import fastifyEnv from '@fastify/env';
import fp from 'fastify-plugin';

/**
 * Register environment variable reading as a fastify plugin
 */
export default fp(async (fastify) => {
  await fastify.register(fastifyEnv, {
    confKey: 'config',
    schema: {
      type: 'object',
      properties: {
        CEC_TIMEOUT_1: {
          type: 'number',
        },
        CEC_TIMEOUT_2: {
          type: 'number',
        },
        FASTIFY_LOG_LEVEL: {
          type: 'string',
        },
      },
    },
    dotenv:
      process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
        ? false
        : {
            path: `${__dirname}/.env`,
            debug: true,
          },
  });
});

declare module 'fastify' {
  interface FastifyInstance {
    readonly config: {
      /**
       * Minimum log level for logging - only read once on app startup!
       */
      readonly FASTIFY_LOG_LEVEL: string;
    };
  }
}

// The env plugin is registered manually and doesn't need to be autoloaded.
module.exports.autoload = false;
