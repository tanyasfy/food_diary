"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userEntity_1 = require("../../entities/userEntity");
const websocketHelpers_1 = require("../../utils/websocketHelpers");
/**
 * Register routes for user Data:
 * GET for / to get all user Data
 * PATCH for / to update an existing users data
 * @param fastify -
 */
const users = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.patch("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const data = request.body;
        console.log(data);
        try {
            let userToUpdate = yield fastify.orm
                .getRepository(userEntity_1.User).findOneBy({
                user_id: data.user_id,
            });
            userToUpdate = data;
            yield fastify.orm
                .getRepository(userEntity_1.User).save(userToUpdate);
            fastify.log.debug("[userToUpdate] saving: %o", userToUpdate);
            /* sendToClients(fastify.websocketServer.clients, {
              type: "userSingle",
              action: "user-update",
              payload: userToUpdate
            }); */
            response.code(201).send();
        }
        catch (e) {
            fastify.log.error("[users] -> PATCH -> error on storing user %o", e);
            response.code(500).send({
                error: e
            });
        }
        return {};
    }));
    fastify.post("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const data = request.body;
        try {
            const user = yield fastify.orm
                .getRepository(userEntity_1.User).save(data);
            fastify.log.debug("[add new User] saving: %o", data);
            (0, websocketHelpers_1.sendToClients)(fastify.websocketServer.clients, {
                type: "usersUpdate",
                action: "users-update",
                payload: user
            });
            return response.code(200).send(user);
        }
        catch (e) {
            fastify.log.error("[users] -> POST -> error on storing user %o", e);
            response.code(500).send({ message: "Failed to save user" });
        }
        return response;
    }));
});
exports.default = users;
