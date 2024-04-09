"use strict";
import Fastify from "fastify";
import * as fs from "fs";
import { AddressInfo } from "net";
import * as path from "path";
import code from "./app";

// Instantiate Fastify with some config
const app = Fastify({
  logger:
    {
      level: process.env.FASTIFY_LOG_LEVEL || "debug",
      transport:
        {
          target: "pino-pretty",
          options: {
            translateTime: "yyyy-mm-dd HH:MM:ss.l",
            ignore: "pid,hostname"
          }
        }
    },
    pluginTimeout: 30_000,
    disableRequestLogging: true
});

// Run the server!
const start = async () => {
  try {
    // Register your application as a normal plugin.
    await app.register(code);

    await app.listen({ port: 3000, host: "0.0.0.0" });
    app.log.error('Hallo')
    app.log.info(
      `server listening on ${(app.server?.address() as AddressInfo)?.port}`
    );
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

void start();