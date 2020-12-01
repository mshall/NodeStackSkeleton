import * as express from 'express';
import { Router } from 'express';
import CoffeeMachineRepository from '../database/repository/coffee-machine.repository';
import GeneralUtils from "../util/GeneralUtils";

const coffeeMachineRouter = Router();
const coffeeMachineRepository: CoffeeMachineRepository = new CoffeeMachineRepository();
  //-----------------------------------------
  // Find all coffee machines
  //-----------------------------------------
coffeeMachineRouter.
  route('/')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      const coffeeMachinesList = await coffeeMachineRepository.findAllCoffeeMachines();
      GeneralUtils.printInitiateMessage(
        "CoffeeMachineController.finalAllMachines -> Coffee Machine",
        JSON.stringify(coffeeMachinesList));
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineController.finalAllMachines', 'End',
      );
      return response.json(coffeeMachinesList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineController.finalAllMachines', 'End',
      );
    }

  });
//-----------------------------------------
// Find coffee machines by product type
//-----------------------------------------
coffeeMachineRouter.
  route('/productType/:productType')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      let incomingProudctType = request.params.productType;
      const coffeeMachineList = await coffeeMachineRepository
        .findCoffeeMachineByProductType(incomingProudctType);
      GeneralUtils.printInitiateMessage(
        "CoffeeMachineController.findProductType -> Coffee Machine:",
        JSON.stringify(coffeeMachineList));
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineController.findProductType', 'End',
      );
      return response.json(coffeeMachineList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findProductType', 'End',
      );
    }
  });

  //-----------------------------------------
  // Find coffee machines given water line
  //-----------------------------------------
coffeeMachineRouter.
  route('/waterline/:isWaterLineCompatible')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    try {
      let isWaterLineCompatible = request.params.isWaterLineCompatible;
      const coffeeMachineList = await coffeeMachineRepository
        .findCoffeeMachineByWaterLineCompatible(isWaterLineCompatible);
      GeneralUtils.printInitiateMessage(
        "CoffeePodController.findByWaterLine -> Coffee Machines:",
        JSON.stringify(coffeeMachineList));
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findByWaterLine', 'End',
      );
      return response.json(coffeeMachineList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineController.findByWaterLine', 'End',
      );
    }
  });

  //-----------------------------------------
  // Find coffee machines based on all fields
  //-----------------------------------------
coffeeMachineRouter.
  route('/all')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    try {
      let productType = request.query.productType;
      let isWaterLineCompatible = Boolean(request.query.isWaterLineCompatible);
      const coffeeMachineList = await coffeeMachineRepository
        .findCoffeeMachineByAllFields(productType, isWaterLineCompatible);
      GeneralUtils.printInitiateMessage(
        "CoffeeMachineController.findByAll -> Coffee Pod:",
        JSON.stringify(coffeeMachineList));
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineController.findByAll', 'End',
      );
      return response.json(coffeeMachineList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineController.findByAll', 'End',
      );
    }
  });
//-----------------------------------------
//  Add a new coffee machine
//-----------------------------------------
coffeeMachineRouter.
  route('/')
  .post(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      let incomingCoffeeMachine = request.body.coffeeMachine;
      GeneralUtils.printInitiateMessage(
        "CoffeeMachineController.Add -> Coffee Machine",
        JSON.stringify(incomingCoffeeMachine));
      const addedCoffeeMachine = await coffeeMachineRepository
        .addNewCoffeeMachine(incomingCoffeeMachine);
      GeneralUtils.printInitiateMessage(
        "CoffeeMachineController.Add -> Result",
        JSON.stringify(addedCoffeeMachine));
      GeneralUtils.printInitiateMessage('CoffeeMachineController.Add', 'End');
      return response.json(addedCoffeeMachine);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage('CoffeeMachineController.Add', 'End');
      next(error);
    }

  });

export { coffeeMachineRouter }



