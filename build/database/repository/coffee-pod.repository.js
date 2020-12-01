"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralUtils_1 = __importDefault(require("../../util/GeneralUtils"));
const cofee_pod_1 = __importDefault(require("../dbmodel/cofee-pod"));
class CoffeePodRepository {
    //-----------------------------------------
    // Add a new coffee pod
    //-----------------------------------------
    async addNewCoffeePod(incomingCoffeePod) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.addNewCoffeePod', 'Start');
        let cofeePod = new cofee_pod_1.default();
        cofeePod.Id = incomingCoffeePod.Id;
        cofeePod.ProductType = incomingCoffeePod.ProductType;
        cofeePod.CoffeeFlavor = incomingCoffeePod.CoffeeFlavor;
        cofeePod.PackSize = incomingCoffeePod.PackSize;
        try {
            const savedConfig = await cofeePod.save();
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.addNewCoffeePod', 'Result: '
                + JSON.stringify(savedConfig));
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.addNewCoffeePod', 'End');
            GeneralUtils_1.default.printStarsLine();
            return savedConfig;
        }
        catch (e) {
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.addNewCoffeePod', 'Exception');
            console.error(e);
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.addNewCoffeePod', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
    }
    //-----------------------------------------
    // Find all coffee pods
    //-----------------------------------------
    async findAllCoffeePods() {
        const coffeePodsList = await cofee_pod_1.default.findAll();
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.coffeePodsList', 'Result: '
            + JSON.stringify(coffeePodsList));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.coffeePodsList', 'End');
        return coffeePodsList;
    }
    //-----------------------------------------
    // Find coffee pod by id
    //-----------------------------------------
    async findCoffeePodById(incomingId) {
        let coffeePod = null;
        try {
            coffeePod = await cofee_pod_1.default.findOne({ where: { Id: incomingId } });
        }
        catch (error) {
            console.error(error);
        }
        return coffeePod;
    }
    //-----------------------------------------
    // Find coffee pods based on product type
    //-----------------------------------------
    async findCoffeePodByProductType(productType) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByProductType', 'End');
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByProductType', 'Incoming product type: ' + productType);
        let coffeePod = null;
        try {
            coffeePod = await cofee_pod_1.default.findAll({ where: { ProductType: productType } });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByProductType', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByProductType', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        return coffeePod;
    }
    //-----------------------------------------
    // Find coffee pod by flavor
    //-----------------------------------------
    async findCoffeePodByFlavor(incomingFlavor) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByFlavor', 'End');
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByFlavor', 'Incoming Flavor: ' + incomingFlavor);
        let cofeePod = null;
        try {
            cofeePod = await cofee_pod_1.default.findAll({
                where: { CoffeeFlavor: incomingFlavor }
            });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByFlavor', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByFlavor', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        return cofeePod;
    }
    //-----------------------------------------
    // Find coffee pod by pack size
    //-----------------------------------------
    async findCoffeePodByPackSize(packSize) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByPackSize', 'End');
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByPackSize', 'Pack size: ' + packSize);
        let coffeePod = null;
        try {
            coffeePod = await cofee_pod_1.default.findAll({
                where: { PackSize: packSize }
            });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByPackSize', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByPackSize', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        return coffeePod;
    }
    //-----------------------------------------
    // Find coffee pods based on all fields
    //-----------------------------------------
    async findCoffeePodByAllFields(incomingProductType, incomingFlavor, incomingPackSize) {
        GeneralUtils_1.default.printStarsLine();
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByAllFields', 'End');
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByAllFields', '| Product type: ' + incomingProductType +
            '| Flavor: ' + incomingFlavor +
            '| Pack size: ' + incomingPackSize);
        let coffeePod = null;
        try {
            coffeePod = await cofee_pod_1.default.findOne({
                where: {
                    ProductType: incomingProductType,
                    CoffeeFlavor: incomingFlavor,
                    PackSize: incomingPackSize
                }
            });
        }
        catch (error) {
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByAllFields', 'Exception');
            console.error(error);
            GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByAllFields', 'End');
            GeneralUtils_1.default.printStarsLine();
        }
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByAllFields', 'Result: ' + JSON.stringify(coffeePod));
        GeneralUtils_1.default.printInitiateMessage('CoffeePodRepository.findCoffeePodByAllFields', 'End');
        return coffeePod;
    }
    async UpdateConfigProperty(coffeePod) {
        let updateResult = null;
        try {
            updateResult = await cofee_pod_1.default.update(coffeePod, {
                where: { Id: coffeePod.Id }
            });
        }
        catch (error) {
            console.error(error);
        }
        return updateResult;
    }
}
exports.default = CoffeePodRepository;
