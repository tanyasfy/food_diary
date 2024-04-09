"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
// create a new MySQL connection
exports.connection = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'food_diary'
});
// connect to the MySQL database
exports.connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    }
    else {
        console.log('Connected to MySQL database!');
    }
});
// close the MySQL connection
exports.connection.end();
