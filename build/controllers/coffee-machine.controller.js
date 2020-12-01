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
//-----------------------------------------
// Find all coffee machines
//-----------------------------------------
coffeeMachineRouter.
    route('/')
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
//-----------------------------------------
// Find coffee machines by product type
//-----------------------------------------
coffeeMachineRouter.
    route('/productType/:productType')
    .get(async (request, response, next) => {
    //const collection = getCollection('todos');
    try {
        let incomingProudctType = request.params.productType;
        const coffeeMachineList = await coffeeMachineRepository
            .findCoffeeMachineByProductType(incomingProudctType);
        GeneralUtils_1.default.printInitiateMessage("CoffeeMachineController.findProductType -> Coffee Machine:", JSON.stringify(coffeeMachineList));
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.findProductType', 'End');
        return response.json(coffeeMachineList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findProductType', 'End');
    }
});
//-----------------------------------------
// Find coffee machines given water line
//-----------------------------------------
coffeeMachineRouter.
    route('/waterline/:isWaterLineCompatible')
    .get(async (request, response, next) => {
    try {
        let isWaterLineCompatible = request.params.isWaterLineCompatible;
        const coffeeMachineList = await coffeeMachineRepository
            .findCoffeeMachineByWaterLineCompatible(isWaterLineCompatible);
        GeneralUtils_1.default.printInitiateMessage("CoffeePodController.findByWaterLine -> Coffee Machines:", JSON.stringify(coffeeMachineList));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findByWaterLine', 'End');
        return response.json(coffeeMachineList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.findByWaterLine', 'End');
    }
});
//-----------------------------------------
// Find coffee machines based on all fields
//-----------------------------------------
coffeeMachineRouter.
    route('/all')
    .get(async (request, response, next) => {
    try {
        let productType = request.query.productType;
        let isWaterLineCompatible = Boolean(request.query.isWaterLineCompatible);
        const coffeeMachineList = await coffeeMachineRepository
            .findCoffeeMachineByAllFields(productType, isWaterLineCompatible);
        GeneralUtils_1.default.printInitiateMessage("CoffeeMachineController.findByAll -> Coffee Pod:", JSON.stringify(coffeeMachineList));
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.findByAll', 'End');
        return response.json(coffeeMachineList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.findByAll', 'End');
    }
});
//-----------------------------------------
//  Add a new coffee machine
//-----------------------------------------
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
        return response.json(addedCoffeeMachine);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineController.Add', 'End');
        next(error);
    }
});
