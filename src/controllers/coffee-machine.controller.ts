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
    const coffeeMachinesList = coffeeMachineRepository.findAllMachineCoffees();    
    return coffeeMachinesList;
  } catch (error) {
    console.error(error);
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findCoffeeMachineByProductType', 'End',
    );
  }

});

export { coffeeMachineRouter }

  

