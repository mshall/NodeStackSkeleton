"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coffee_machine_controller_1 = require("../../controllers/coffee-machine.controller");
const appRouter = express_1.Router();
appRouter.use('/api/coffee-machine', coffee_machine_controller_1.coffeeMachineRouter);
exports.default = appRouter;
