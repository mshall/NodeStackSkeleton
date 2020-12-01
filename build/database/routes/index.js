"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coffee_machine_controller_1 = require("../../controllers/coffee-machine.controller");
const coffee_pod_controller_1 = require("../../controllers/coffee-pod.controller");
const appRouter = express_1.Router();
appRouter.use('/api/coffee-machine', coffee_machine_controller_1.coffeeMachineRouter);
appRouter.use('/api/coffee-pod', coffee_pod_controller_1.coffeePodRouter);
exports.default = appRouter;
