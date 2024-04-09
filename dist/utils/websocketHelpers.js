"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToClients = void 0;
/**
 * Sends a message to all connected WebSocket clients
 * @param clients -
 * @param message -
 */
const sendToClients = (clients, message) => {
    if (clients instanceof Set) {
        for (const client of clients) {
            if (client.readyState === 1) {
                client.send(JSON.stringify(message));
            }
        }
    }
    else {
        clients.send(JSON.stringify(message));
    }
};
exports.sendToClients = sendToClients;
