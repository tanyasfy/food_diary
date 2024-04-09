import fp from 'fastify-plugin';
import cors from '@fastify/cors';

/**
 * Register CORS support as a fastify plugin to allow local development
 */
export default fp(async (fastify) => {
  await fastify.register(cors, {
    origin: '*',
  });
});
