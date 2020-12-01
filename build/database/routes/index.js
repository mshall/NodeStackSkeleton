"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var coffee_machine_controller_1 = require("../../controllers/coffee-machine.controller");
var appRouter = express_1.Router();
appRouter.use('/api/cofee-machine', coffee_machine_controller_1.coffeeMachineRouter);
exports.default = appRouter;
