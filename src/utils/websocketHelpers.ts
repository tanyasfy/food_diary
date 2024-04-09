import * as WebSocket from 'ws';

/**
 * Basic WebSocket message
 */
export interface WebsocketMessage {
  type: string;
  action: string;
  payload?: any;
}

/**
 * Sends a message to all connected WebSocket clients
 * @param clients -
 * @param message -
 */
export const sendToClients = (
  clients: WebSocket | Set<WebSocket> | any,
  message: WebsocketMessage
): void => {
  if (clients instanceof Set) {
    for (const client of clients) {
      if (client.readyState === 1) {
        client.send(JSON.stringify(message));
      }
    }
  } else {
    clients.send(JSON.stringify(message));
  }
};
