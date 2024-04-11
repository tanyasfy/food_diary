import { FastifyPluginAsync } from "fastify";
import { Breakfest } from "../../entities/breakfest"
import { sendToClients } from "../../utils/websocketHelpers";
import { type Essen } from "../../types/breakfest"

/**
 * Register routes for user Data:
 * GET for / to get all user Data
 * PATCH for / to update an existing users data
 * @param fastify -
 */
const breakfest: FastifyPluginAsync = async (fastify): Promise<void> => {

  fastify.patch("/", async (request, response) => {
      const data = request.body as Essen;
      console.log(data)

      try {
        let breakfestToUpdate = await fastify.orm
        .getRepository(Breakfest).findOneBy({
          id_breakfest: data.id_breakfest,
        })

        breakfestToUpdate = data;
        await fastify.orm
        .getRepository(Breakfest).save(breakfestToUpdate);

        fastify.log.debug("[breakfestToUpdate] saving: %o", breakfestToUpdate);
        /* sendToClients(fastify.websocketServer.clients, {
          type: "userSingle",
          action: "user-update",
          payload: userToUpdate
        }); */

        response.code(201).send();
      } catch (e) {
        fastify.log.error("[Breakfest] -> PATCH -> error on storing user %o", e);
        response.code(500).send({
          error: e
        });
      }

      return {};
  })
  fastify.post("/", async (request, response) => {
    const data = request.body as Breakfest;

    try {
      const breakfest = await fastify.orm
      .getRepository(Breakfest).save(data);

      fastify.log.debug("[add new Breakfest] saving: %o", data);
      sendToClients(fastify.websocketServer.clients, {
        type: "breakfestUpdate",
        action: "breakfest-update",
        payload: breakfest
      });
      return response.code(200).send(breakfest);
      
    } catch (e) {
      fastify.log.error("[breakfest] -> POST -> error on storing breakfest %o", e);
      response.code(500).send({ message: "Failed to save breakfest" });
    }

    return response;
  })
  
}

export default breakfest;
