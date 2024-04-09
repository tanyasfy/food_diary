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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app_1 = __importDefault(require("./app"));
// Instantiate Fastify with some config
const app = (0, fastify_1.default)({
    logger: {
        level: process.env.FASTIFY_LOG_LEVEL || "debug",
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "yyyy-mm-dd HH:MM:ss.l",
                ignore: "pid,hostname"
            }
        }
    },
    pluginTimeout: 30000,
    disableRequestLogging: true
});
// Run the server!
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        // Register your application as a normal plugin.
        yield app.register(app_1.default);
        yield app.listen({ port: 3000, host: "0.0.0.0" });
        app.log.error('Hallo');
        app.log.info(`server listening on ${(_b = (_a = app.server) === null || _a === void 0 ? void 0 : _a.address()) === null || _b === void 0 ? void 0 : _b.port}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
});
void start();
