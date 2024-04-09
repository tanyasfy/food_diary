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
exports.getUsers = void 0;
const userEntity_1 = require("../entities/userEntity");
const websocketHelpers_1 = require("../utils/websocketHelpers");
/**
 * Get all users from DB
 */
const getUsers = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fastify.orm
        .getRepository(userEntity_1.User)
        .createQueryBuilder()
        .getMany();
});
exports.getUsers = getUsers;
/**
 * Register root routes:
 * GET for /ws to switch connection over to the WebSocket protocol
 * @param fastify -
 */
const root = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.get("/ws", {
        websocket: true,
        schema: {
            hide: true,
            description: "WebSocket Address."
        }
    }, (connection) => __awaiter(void 0, void 0, void 0, function* () {
        // Add the new socket to the list of clients, so we can send data later.
        fastify.websocketServer.clients.add(connection.socket);
        // Sending the known equipment data to the new client.
        (0, exports.getUsers)(fastify).then((users) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                (0, websocketHelpers_1.sendToClients)(connection.socket, {
                    type: "users",
                    action: "update",
                    payload: users
                });
            }
            catch (e) {
                fastify.log.error('%s', e);
            }
        }));
        connection.socket.on("message", (rawData) => __awaiter(void 0, void 0, void 0, function* () {
            const data = JSON.parse(rawData.toString());
            if (data.type === "users") {
                const userName = data.payload.user_name;
                const userVorname = data.payload.user_vorname;
                connection.socket.send(JSON.stringify({
                    type: "users",
                    action: "update",
                    payload: {
                        userName,
                        userVorname
                    }
                }));
            }
            else if (data.type === "usersUpdate") {
                connection.socket.send(JSON.stringify({
                    type: "usersUpdate",
                    action: "update",
                    payload: { data }
                }));
            }
        }));
    }));
});
exports.default = root;
