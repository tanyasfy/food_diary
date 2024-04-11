import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { User } from "../entities/userEntity";
import { Breakfest } from "../entities/breakfest";
import { sendToClients } from "../utils/websocketHelpers";

/**
 * Get all users from DB
 */
export const getUsers = async (
  fastify: FastifyInstance
): Promise<User[]> => {
  return await fastify.orm
    .getRepository(User)
    .createQueryBuilder()
    .getMany();
};

/**
 * Get breakfests from DB
 */
export const getBreakfest = async (
  fastify: FastifyInstance
): Promise<Breakfest[]> => {
  return await fastify.orm
    .getRepository(Breakfest)
    .createQueryBuilder()
    .getMany();
};

/**
 * Register root routes:
 * GET for /ws to switch connection over to the WebSocket protocol
 * @param fastify -
 */
const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get(
    "/ws",
    { 
      websocket: true,
      schema: {
        hide: true,
        description: "WebSocket Address."
      } as any
    },
    async (connection) => {
      // Add the new socket to the list of clients, so we can send data later.
      fastify.websocketServer.clients.add(connection.socket as any);

      // Sending the known equipment data to the new client.
      getUsers(fastify).then(async (users) => {
        try {
          sendToClients(connection.socket as any, {
            type: "users",
            action: "update",
            payload: users
          });
        } catch (e) {
          fastify.log.error('%s', e)
        }
        
      });

      // Sending the known equipment data to the new client.
      getBreakfest(fastify).then(async (data) => {
        try {
          sendToClients(connection.socket as any, {
            type: "breakfest",
            action: "update",
            payload: data
          });
        } catch (e) {
          fastify.log.error('%s', e)
        }
        
      });

      (connection.socket as any).on("message", async (rawData: any) => {
        const data = JSON.parse(rawData.toString());
        if (data.type === "users") {
          const userName = data.payload.user_name;
          const userVorname = data.payload.user_vorname;
          (connection.socket as any).send(
            JSON.stringify({
              type: "users",
              action: "update",
              payload: {
                userName,
                userVorname
              }
            })
          );
        } else if (data.type === "usersUpdate") {
          (connection.socket as any).send(
            JSON.stringify({
              type: "usersUpdate",
              action: "update",
              payload: { data }
            })
          );
        } else if (data.type === "breakfest") {
          (connection.socket as any).send(
            JSON.stringify({
              type: "breakfest",
              action: "update",
              payload: { data }
            })
          );
        }
      })
    })
};

export default root;

declare module "fastify" {
  export interface FastifyInstance {
    closeWebsockifyServer?: () => void;
  }
}
