import mysql from 'mysql2';
import fp from 'fastify-plugin';
import 'reflect-metadata';
import { Connection, createConnection, LoggerOptions } from 'typeorm';
import { User } from '../entities/userEntity';

/**
 * Basic TypeORM options
 */
export interface TypeOrmOpts {
  path?: string;
  logging?: LoggerOptions;
}

/**
 * Register our ORM as a fastify plugin.
 * Loads the database file from the correct folder depending on the current environment.
 */
export default fp<TypeOrmOpts>(async (fastify, opts) => {

  fastify.decorate(
    'orm',

    await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "12345",
      database: "food_diary",
      entities: [User],
      synchronize: false,
      logging: false
    })
  );
});

declare module 'fastify' {
  export interface FastifyInstance {
    orm: Connection;
  }
}
