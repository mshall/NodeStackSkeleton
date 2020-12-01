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
    async findAllCoffeeMachines() {
        const coffeeMachinesList = await coffee_machine_model_1.default.findAll();
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findAllCoffeeMachines', 'Result: '
            + JSON.stringify(coffeeMachinesList));
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findAllCoffeeMachines', 'End');
        return coffeeMachinesList;
    }
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
    async findCoffeeMachineByProductType(productType) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'End');
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'Incoming product type: ' + productType);
        let mobileBEConfig = null;
        try {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            mobileBEConfig = await coffee_machine_model_1.default.findOne({ where: { ProductType: productType } });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        return mobileBEConfig;
    }
    async findCoffeeMachineByWaterLineCompatible(waterLineCompatible) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'End');
        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'Incoming water line compatible: ' + waterLineCompatible);
        let mobileBEConfig = null;
        try {
            mobileBEConfig = await coffee_machine_model_1.default.findOne({
                where: { WaterLineCompatible: waterLineCompatible }
            });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        return mobileBEConfig;
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
