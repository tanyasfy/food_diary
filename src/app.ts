import { FastifyPluginAsync } from 'fastify';
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload';
import { join } from 'path';
import { TypeOrmOpts } from './plugins/typeorm';

/**
 * Combined app options
 */
export type AppOptions = {
  database: TypeOrmOpts;
} & Partial<AutoloadPluginOptions>;

/**
 * Initialize fastify with auto-loading of plugins and routes
 * @param fastify -
 * @param opts -
 */
const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  await fastify.after();

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  await fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  await fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts,
  });
};

export default app;
export { app };
