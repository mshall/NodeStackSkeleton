"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coffeePodRouter = void 0;
const express_1 = require("express");
const GeneralUtils_1 = __importDefault(require("../util/GeneralUtils"));
const coffee_pod_repository_1 = __importDefault(require("../database/repository/coffee-pod.repository"));
const coffeePodRouter = express_1.Router();
exports.coffeePodRouter = coffeePodRouter;
const coffeePodRepository = new coffee_pod_repository_1.default();
//-----------------------------------------
// Find all coffee pods
//-----------------------------------------
coffeePodRouter.
    route('/')
    .get(async (request, response, next) => {
    //const collection = getCollection('todos');
    try {
        const coffeePodList = await coffeePodRepository.findAllCoffeePods();
        GeneralUtils_1.default.printInitiateMessage("CoffeePodController.findAllCoffeePods -> Coffee Machine", JSON.stringify(coffeePodList));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findAllCoffeePods', 'End');
        return response.json(coffeePodList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findAllCoffeePods', 'End');
    }
});
//-----------------------------------------
// Find coffee pods given product type
//-----------------------------------------
coffeePodRouter.
    route('/productType/:productType')
    .get(async (request, response, next) => {
    //const collection = getCollection('todos');
    try {
        let incomingProudctType = request.params.productType;
        const coffeePodList = await coffeePodRepository
            .findCoffeePodByProductType(incomingProudctType);
        GeneralUtils_1.default.printInitiateMessage("CoffeePodController.findProductType -> Coffee Pod:", JSON.stringify(coffeePodList));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findProductType', 'End');
        return response.json(coffeePodList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findProductType', 'End');
    }
});
//-----------------------------------------
// Find coffee pods given flavor
//-----------------------------------------
coffeePodRouter.
    route('/flavor/:flavor')
    .get(async (request, response, next) => {
    try {
        let incomingFlavor = request.params.flavor;
        const coffeePodList = await coffeePodRepository
            .findCoffeePodByFlavor(incomingFlavor);
        GeneralUtils_1.default.printInitiateMessage("CoffeePodController.findByFlavor -> Coffee Pod:", JSON.stringify(coffeePodList));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findByFlavor', 'End');
        return response.json(coffeePodList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findByFlavor', 'End');
    }
});
//-----------------------------------------
// Find coffee pods given pack size
//-----------------------------------------
coffeePodRouter.
    route('/packSize/:packSize')
    .get(async (request, response, next) => {
    try {
        let packSize = Number(request.params.packSize);
        const coffeePodList = await coffeePodRepository
            .findCoffeePodByPackSize(packSize);
        GeneralUtils_1.default.printInitiateMessage("CoffeePodController.findByPackSize -> Coffee Pod:", JSON.stringify(coffeePodList));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findByPackSize', 'End');
        return response.json(coffeePodList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findByPackSize', 'End');
    }
});
//-----------------------------------------
// Find coffee pods given all fields
//-----------------------------------------
coffeePodRouter.
    route('/all')
    .get(async (request, response, next) => {
    try {
        let productType = request.query.productType;
        let flavor = request.query.flavor;
        let packSize = Number(request.query.packSize);
        const coffeePodList = await coffeePodRepository
            .findCoffeePodByAllFields(productType, flavor, packSize);
        GeneralUtils_1.default.printInitiateMessage("CoffeePodController.findByAll -> Coffee Pod:", JSON.stringify(coffeePodList));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findByAll', 'End');
        return response.json(coffeePodList);
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.findByAll', 'End');
    }
});
//-----------------------------------------
// Add a new coffee pod
//-----------------------------------------
coffeePodRouter.
    route('/')
    .post(async (request, response, next) => {
    //const collection = getCollection('todos');
    try {
        let incomingCoffeePod = request.body.coffeePod;
        GeneralUtils_1.default.printInitiateMessage("CoffeePodController.Add -> Coffee Machine", JSON.stringify(incomingCoffeePod));
        const addedCoffeePod = await coffeePodRepository
            .addNewCoffeePod(incomingCoffeePod);
        GeneralUtils_1.default.printInitiateMessage("CoffeePodController.Add -> Result", JSON.stringify(addedCoffeePod));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.Add', 'End');
        return addedCoffeePod;
    }
    catch (error) {
        console.error(error);
        GeneralUtils_1.default.printInitiateMessage('CoffeePodController.Add', 'End');
        next(error);
    }
});
