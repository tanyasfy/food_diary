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
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const userEntity_1 = require("../entities/userEntity");
/**
 * Register our ORM as a fastify plugin.
 * Loads the database file from the correct folder depending on the current environment.
 */
exports.default = (0, fastify_plugin_1.default)((fastify, opts) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.decorate('orm', yield (0, typeorm_1.createConnection)({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "12345",
        database: "food_diary",
        entities: [userEntity_1.User],
        synchronize: false,
        logging: false
    }));
}));
