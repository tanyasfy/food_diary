import { FastifyPluginAsync } from "fastify";
import { User } from "../../entities/userEntity"
import { sendToClients } from "../../utils/websocketHelpers";
import { type Users } from "../../types/user"

/**
 * Register routes for user Data:
 * GET for / to get all user Data
 * PATCH for / to update an existing users data
 * @param fastify -
 */
const users: FastifyPluginAsync = async (fastify): Promise<void> => {

  fastify.patch("/", async (request, response) => {
      const data = request.body as Users;
      console.log(data)

      try {
        let userToUpdate = await fastify.orm
        .getRepository(User).findOneBy({
            user_id: data.user_id,
        })

        userToUpdate = data;
        await fastify.orm
        .getRepository(User).save(userToUpdate);

        fastify.log.debug("[userToUpdate] saving: %o", userToUpdate);
        /* sendToClients(fastify.websocketServer.clients, {
          type: "userSingle",
          action: "user-update",
          payload: userToUpdate
        }); */

        response.code(201).send();
      } catch (e) {
        fastify.log.error("[users] -> PATCH -> error on storing user %o", e);
        response.code(500).send({
          error: e
        });
      }

      return {};
  })
  fastify.post("/", async (request, response) => {
    const data = request.body as Users;

    try {
      const user = await fastify.orm
      .getRepository(User).save(data);

      fastify.log.debug("[add new User] saving: %o", data);
      sendToClients(fastify.websocketServer.clients, {
        type: "usersUpdate",
        action: "users-update",
        payload: user
      });
      return response.code(200).send(user);
      
    } catch (e) {
      fastify.log.error("[users] -> POST -> error on storing user %o", e);
      response.code(500).send({ message: "Failed to save user" });
    }

    return response;
  })
  
}

export default users;
