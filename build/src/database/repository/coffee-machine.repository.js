"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GeneralUtils_1 = __importDefault(require("../../util/GeneralUtils"));
var coffee_machine_model_1 = __importDefault(require("../dbmodel/coffee-machine.model"));
var CoffeeMachineRepository = /** @class */ (function () {
    function CoffeeMachineRepository() {
    }
    CoffeeMachineRepository.prototype.addNewCoffeeMachine = function (coffeeMachine) {
        return __awaiter(this, void 0, void 0, function () {
            var savedConfig, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GeneralUtils_1.default.printStarsLine();
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'Start');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, coffeeMachine.save()];
                    case 2:
                        savedConfig = _a.sent();
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'End');
                        GeneralUtils_1.default.printStarsLine();
                        return [2 /*return*/, savedConfig];
                    case 3:
                        e_1 = _a.sent();
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'Exception');
                        console.error(e_1);
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'End');
                        GeneralUtils_1.default.printStarsLine();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CoffeeMachineRepository.prototype.findAllMachineCoffees = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, coffee_machine_model_1.default.findAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CoffeeMachineRepository.prototype.findCoffeeMachineById = function (incomingId) {
        return __awaiter(this, void 0, void 0, function () {
            var coffeeMachine, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coffeeMachine = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, coffee_machine_model_1.default.findOne({ where: { Id: incomingId } })];
                    case 2:
                        coffeeMachine = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, coffeeMachine];
                }
            });
        });
    };
    CoffeeMachineRepository.prototype.findCoffeeMachineByProductType = function (productType) {
        return __awaiter(this, void 0, void 0, function () {
            var mobileBEConfig, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GeneralUtils_1.default.printStarsLine();
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'End');
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'Incoming product type: ' + productType);
                        mobileBEConfig = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, coffee_machine_model_1.default.findOne({ where: { ProductType: productType } })];
                    case 2:
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        mobileBEConfig = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'Exception');
                        console.error(error_2);
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'End');
                        GeneralUtils_1.default.printStarsLine();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, mobileBEConfig];
                }
            });
        });
    };
    CoffeeMachineRepository.prototype.findCoffeeMachineByWaterLineCompatible = function (waterLineCompatible) {
        return __awaiter(this, void 0, void 0, function () {
            var mobileBEConfig, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GeneralUtils_1.default.printStarsLine();
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'End');
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'Incoming water line compatible: ' + waterLineCompatible);
                        mobileBEConfig = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, coffee_machine_model_1.default.findOne({
                                where: { WaterLineCompatible: waterLineCompatible }
                            })];
                    case 2:
                        mobileBEConfig = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'Exception');
                        console.error(error_3);
                        GeneralUtils_1.default.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'End');
                        GeneralUtils_1.default.printStarsLine();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, mobileBEConfig];
                }
            });
        });
    };
    CoffeeMachineRepository.prototype.UpdateConfigProperty = function (coffeeMachine) {
        return __awaiter(this, void 0, void 0, function () {
            var updateResult, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateResult = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, coffee_machine_model_1.default.update(coffeeMachine, {
                                where: { Id: coffeeMachine.Id }
                            })];
                    case 2:
                        updateResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, updateResult];
                }
            });
        });
    };
    return CoffeeMachineRepository;
}());
exports.default = CoffeeMachineRepository;
