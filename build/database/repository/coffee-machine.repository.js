"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralUtils_1 = __importDefault(require("../../util/GeneralUtils"));
const coffee_machine_model_1 = __importDefault(require("../dbmodel/coffee-machine.model"));
class CoffeeMachineRepository {
    async addNewCoffeeMachine(incomingCoffeeMachine) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'Start');
        let coffeeMachine = new coffee_machine_model_1.default();
        coffeeMachine.Id = incomingCoffeeMachine.Id;
        coffeeMachine.ProductType = incomingCoffeeMachine.ProductType;
        coffeeMachine.WaterLineCompatible = incomingCoffeeMachine.WaterLineCompatible;
        try {
            const savedConfig = await coffeeMachine.save();
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'Result: '
                + JSON.stringify(savedConfig));
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'End');
            GeneralUtils_1.default.printStarsLine();
            return savedConfig;
        }
        catch (e) {
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'Exception');
            console.error(e);
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
    }
    //-----------------------------------------
    // Find All coffee machines
    //-----------------------------------------
    async findAllCoffeeMachines() {
        const coffeeMachinesList = await coffee_machine_model_1.default.findAll();
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findAllCoffeeMachines', 'Result: '
            + JSON.stringify(coffeeMachinesList));
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findAllCoffeeMachines', 'End');
        return coffeeMachinesList;
    }
    //-----------------------------------------
    // Find coffee machine by id
    //-----------------------------------------
    async findCoffeeMachineById(incomingId) {
        let coffeeMachine = null;
        try {
            coffeeMachine = await coffee_machine_model_1.default.findOne({ where: { Id: incomingId } });
        }
        catch (error) {
            console.error(error);
        }
        return coffeeMachine;
    }
    //-----------------------------------------
    // Find coffee machine by product type
    //-----------------------------------------
    async findCoffeeMachineByProductType(productType) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'End');
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'Incoming product type: ' + productType);
        let coffeeMachine = null;
        try {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            coffeeMachine = await coffee_machine_model_1.default.findAll({ where: { ProductType: productType } });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        return coffeeMachine;
    }
    //-----------------------------------------
    // Find coffee machine by water compatible line 
    //-----------------------------------------
    async findCoffeeMachineByWaterLineCompatible(waterLineCompatible) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'Start');
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'Incoming water line compatible: ' + waterLineCompatible);
        let coffeeMachine = null;
        try {
            coffeeMachine = await coffee_machine_model_1.default.findAll({
                where: { WaterLineCompatible: waterLineCompatible }
            });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        return coffeeMachine;
    }
    //-----------------------------------------
    // Find coffee machine by all fields
    //-----------------------------------------
    async findCoffeeMachineByAllFields(incomingProductType, incomingWaterLineCompatible) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByAllFields', 'Start');
        let coffeeMachine = null;
        try {
            coffeeMachine = await coffee_machine_model_1.default.findOne({
                where: {
                    ProductType: incomingProductType,
                    WaterLineCompatible: incomingWaterLineCompatible
                }
            });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByAllFields', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByAllFields', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        return coffeeMachine;
    }
    async UpdateConfigProperty(coffeeMachine) {
        let updateResult = null;
        try {
            updateResult = await coffee_machine_model_1.default.update(coffeeMachine, {
                where: { Id: coffeeMachine.Id }
            });
        }
        catch (error) {
            console.error(error);
        }
        return updateResult;
    }
}
exports.default = CoffeeMachineRepository;
