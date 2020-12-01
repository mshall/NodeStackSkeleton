"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coffeeMachineRouter = void 0;
const express_1 = require("express");
const coffee_machine_repository_1 = __importDefault(require("../database/repository/coffee-machine.repository"));
const GeneralUtils_1 = __importDefault(require("../util/GeneralUtils"));
const coffeeMachineRouter = express_1.Router();
exports.coffeeMachineRouter = coffeeMachineRouter;
const coffeeMachineRepository = new coffee_machine_repository_1.default();
coffeeMachineRouter.
    route('/all')
    .get(async (request, response, next) => {
    //const collection = getCollection('todos');
    try {
        const coffeeMachinesList = await coffeeMachineRepository.findAllCoffeeMachines();
        GeneralUtils_1.default.printInitiateMessage("CoffeeMachineController.finalAllMachines -> Coffee Machine", JSON.stringify(coffeeMachinesList));
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.finalAllMachines', 'End');
        return response.json(coffeeMachinesList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.finalAllMachines', 'End');
    }
});
coffeeMachineRouter.
    route('/')
    .post(async (request, response, next) => {
    //const collection = getCollection('todos');
    try {
        let incomingCoffeeMachine = request.body.coffeeMachine;
        GeneralUtils_1.default.printInitiateMessage("CoffeeMachineController.Add -> Coffee Machine", JSON.stringify(incomingCoffeeMachine));
        const addedCoffeeMachine = await coffeeMachineRepository
            .addNewCoffeeMachine(incomingCoffeeMachine);
        GeneralUtils_1.default.printInitiateMessage("CoffeeMachineController.Add -> Result", JSON.stringify(addedCoffeeMachine));
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.Add', 'End');
        return addedCoffeeMachine;
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.Add', 'End');
        next(error);
    }
});
