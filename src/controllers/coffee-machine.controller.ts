import * as express from 'express';
import { Router } from 'express';
import CoffeeMachineRepository from '../database/repository/coffee-machine.repository';
import GeneralUtils from "../util/GeneralUtils";

const coffeeMachineRouter = Router();
const coffeeMachineRepository: CoffeeMachineRepository = new CoffeeMachineRepository();
coffeeMachineRouter.
  route('/all')
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
      return addedCoffeeMachine;
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage('CoffeeMachineController.Add', 'End');
      next(error);
    }

  });

export { coffeeMachineRouter }



