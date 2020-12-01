"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const routes_1 = __importDefault(require("./database/routes"));
const database_1 = require("./util/database/database");
const coffee_machine_model_1 = __importDefault(require("./database/dbmodel/coffee-machine.model"));
const request_logger_middleware_1 = require("./util/request-logger-middleware");
const cofee_pod_1 = __importDefault(require("./database/dbmodel/cofee-pod"));
const app = express_1.default();
exports.app = app;
app.use(bodyParser.json());
app.use(request_logger_middleware_1.requestLoggerMiddleware);
app.use(routes_1.default);
app.get('/hello', (req, res, next) => {
    res.send('Hello world');
});
database_1.addModel(coffee_machine_model_1.default);
database_1.addModel(cofee_pod_1.default);
app.listen(process.env.PORT || 4040, () => {
    console.log("server started");
});
