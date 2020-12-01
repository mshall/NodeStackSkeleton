"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appConfig = {
    "database": {
        "username": "shall",
        "password": "",
        "database": "testdb",
        "host": "127.0.0.1",
        "port": 5432,
        "logging": true,
        "dialect": "postgres",
        "sync": {
            "force": true
        }
    }
};
exports.default = appConfig;
