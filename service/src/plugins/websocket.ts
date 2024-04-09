import fp from 'fastify-plugin';
import websocketPlugin from '@fastify/websocket';
import { Server } from 'ws';

/**
 * Register WebSocket support as a fastify plugin
 */
export default fp(async (fastify) => {
  await fastify.register(websocketPlugin);
});

declare module 'fastify' {
  export interface FastifyInstance {
    websocketServer: Server;
  }
}
