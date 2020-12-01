"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var sequelize_1 = require("sequelize");
var config_1 = __importDefault(require("../../config"));
var coffee_machine_model_1 = __importDefault(require("./coffee-machine.model"));
// Open database connection
var sequelize = new sequelize_1.Sequelize(config_1.default.database.database, config_1.default.database.username, config_1.default.database.password, config_1.default.database);
exports.Database = sequelize;
// Initialize each model in the database
// This must be done before associations are made
var models = [coffee_machine_model_1.default];
models.forEach(function (model) { return model.initialize(sequelize); });
// Create database tables
//   force: true causes database to reset with each run
sequelize.sync({ force: true });
