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
const env_1 = __importDefault(require("@fastify/env"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
/**
 * Register environment variable reading as a fastify plugin
 */
exports.default = (0, fastify_plugin_1.default)((fastify) => __awaiter(void 0, void 0, void 0, function* () {
    yield fastify.register(env_1.default, {
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
        dotenv: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
            ? false
            : {
                path: `${__dirname}/.env`,
                debug: true,
            },
    });
}));
// The env plugin is registered manually and doesn't need to be autoloaded.
module.exports.autoload = false;
