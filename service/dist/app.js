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
exports.app = void 0;
const autoload_1 = __importDefault(require("@fastify/autoload"));
const path_1 = require("path");
/**
 * Initialize fastify with auto-loading of plugins and routes
 * @param fastify -
 * @param opts -
 */
const app = (fastify, opts) => __awaiter(void 0, void 0, void 0, function* () {
    yield fastify.after();
    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    yield fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'plugins'),
        options: opts,
    });
    // This loads all plugins defined in routes
    // define your routes in one of these
    yield fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'routes'),
        options: opts,
    });
});
exports.app = app;
exports.default = app;
