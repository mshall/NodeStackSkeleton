import * as express from 'express';
import { Router } from 'express';
import GeneralUtils from "../util/GeneralUtils";
import CoffeePodRepository from '../database/repository/coffee-pod.repository';

const coffeePodRouter = Router();
const coffeePodRepository: CoffeePodRepository = new CoffeePodRepository();
coffeePodRouter.
  route('/')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      const coffeePodList = await coffeePodRepository.findAllCoffeePods();
      GeneralUtils.printInitiateMessage(
        "CoffeePodController.findAllCoffeePods -> Coffee Machine",
        JSON.stringify(coffeePodList));
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findAllCoffeePods', 'End',
      );
      return response.json(coffeePodList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findAllCoffeePods', 'End',
      );
    }

  });

coffeePodRouter.
  route('/productType/:productType')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      let incomingProudctType = request.params.productType;
      const coffeePodList = await coffeePodRepository
        .findCoffeePodByProductType(incomingProudctType);
      GeneralUtils.printInitiateMessage(
        "CoffeePodController.findProductType -> Coffee Pod:",
        JSON.stringify(coffeePodList));
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findProductType', 'End',
      );
      return response.json(coffeePodList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findProductType', 'End',
      );
    }
  });

coffeePodRouter.
  route('/flavor/:flavor')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    try {
      let incomingFlavor = request.params.flavor;
      const coffeePodList = await coffeePodRepository
        .findCoffeePodByFlavor(incomingFlavor);
      GeneralUtils.printInitiateMessage(
        "CoffeePodController.findByFlavor -> Coffee Pod:",
        JSON.stringify(coffeePodList));
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findByFlavor', 'End',
      );
      return response.json(coffeePodList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findByFlavor', 'End',
      );
    }
  });

coffeePodRouter.
  route('/packSize/:packSize')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    try {
      let packSize = Number(request.params.packSize);
      const coffeePodList = await coffeePodRepository
        .findCoffeePodByPackSize(packSize);
      GeneralUtils.printInitiateMessage(
        "CoffeePodController.findByPackSize -> Coffee Pod:",
        JSON.stringify(coffeePodList));
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findByPackSize', 'End',
      );
      return response.json(coffeePodList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findByPackSize', 'End',
      );
    }
  });

coffeePodRouter.
  route('/all')
  .get(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    try {
      let productType = request.query.productType;
      let flavor = request.query.flavor;
      let packSize = Number(request.query.packSize);
      const coffeePodList = await coffeePodRepository
        .findCoffeePodByAllFields(productType, flavor, packSize);
      GeneralUtils.printInitiateMessage(
        "CoffeePodController.findByAll -> Coffee Pod:",
        JSON.stringify(coffeePodList));
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findByAll', 'End',
      );
      return response.json(coffeePodList);
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodController.findByAll', 'End',
      );
    }
  });

coffeePodRouter.
  route('/')
  .post(async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction) => {
    //const collection = getCollection('todos');
    try {
      let incomingCoffeePod = request.body.coffeePod;
      GeneralUtils.printInitiateMessage(
        "CoffeePodController.Add -> Coffee Machine",
        JSON.stringify(incomingCoffeePod));
      const addedCoffeePod = await coffeePodRepository
        .addNewCoffeePod(incomingCoffeePod);
      GeneralUtils.printInitiateMessage(
        "CoffeePodController.Add -> Result",
        JSON.stringify(addedCoffeePod));
      GeneralUtils.printInitiateMessage('CoffeePodController.Add', 'End');
      return addedCoffeePod;
    } catch (error) {
      console.error(error);
      GeneralUtils.printInitiateMessage('CoffeePodController.Add', 'End');
      next(error);
    }

  });

export { coffeePodRouter }



