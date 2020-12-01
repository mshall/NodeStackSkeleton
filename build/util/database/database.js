"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.addModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("../../config"));
const coffee_machine_model_1 = __importDefault(require("../../database/dbmodel/coffee-machine.model"));
const sequelize = new sequelize_typescript_1.Sequelize(config_1.default.database.database, config_1.default.database.username, config_1.default.database.password, {
    host: config_1.default.database.host,
    port: config_1.default.database.port,
    dialect: "postgres",
    dialectOptions: {
        options: {
            useUTC: false,
            dateFirst: 1,
        },
    },
    timezone: '+04:00',
});
exports.sequelize = sequelize;
sequelize
    .authenticate()
    .then((err) => {
    console.info('Sequelize.intialize -> Connection successful');
})
    .catch((err) => {
    console.error('Sequelize.intialize -> Unable to connect to database', err);
});
sequelize.addModels([coffee_machine_model_1.default]);
function addModel(model) {
    return sequelize.addModels([model]);
}
exports.addModel = addModel;
