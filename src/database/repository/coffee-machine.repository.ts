import GeneralUtils from "../../util/GeneralUtils";
import CoffeeMachine from '../dbmodel/coffee-machine.model';


export default class CoffeeMachineRepository {

  async addNewCoffeeMachine(incomingCoffeeMachine: any): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'Start');
    let coffeeMachine: CoffeeMachine = new CoffeeMachine();
    coffeeMachine.Id = incomingCoffeeMachine.Id;
    coffeeMachine.ProductType = incomingCoffeeMachine.ProductType;
    coffeeMachine.WaterLineCompatible = incomingCoffeeMachine.WaterLineCompatible;
    try {
      const savedConfig = await coffeeMachine.save();
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.addNewCoffeeMachine', 'Result: '
      + JSON.stringify(savedConfig));
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.addNewCoffeeMachine', 'End');
      GeneralUtils.printStarsLine();
      return savedConfig;
    } catch (e) {
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.addNewCoffeeMachine', 'Exception');
      console.error(e);
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.addNewCoffeeMachine', 'End');
      GeneralUtils.printStarsLine();
    }
  }

  //-----------------------------------------
  // Find All coffee machines
  //-----------------------------------------
  async findAllCoffeeMachines() {
    const coffeeMachinesList = await CoffeeMachine.findAll();
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findAllCoffeeMachines', 'Result: '
    + JSON.stringify(coffeeMachinesList));
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findAllCoffeeMachines', 'End');
    return coffeeMachinesList;
  }

  //-----------------------------------------
  // Find coffee machine by id
  //-----------------------------------------
  async findCoffeeMachineById(incomingId: string): Promise<any> {
    let coffeeMachine = null;
    try {
      coffeeMachine = await CoffeeMachine.findOne({ where: { Id: incomingId } });
    } catch (error) {
      console.error(error);
    }
    return coffeeMachine;
  }
  //-----------------------------------------
  // Find coffee machine by product type
  //-----------------------------------------
  async findCoffeeMachineByProductType(productType: string): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'End');
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findCoffeeMachineByProductType',
      'Incoming product type: ' + productType,
    );
    let coffeeMachine = null;
    try {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      coffeeMachine = await CoffeeMachine.findAll({ where: { ProductType: productType } });
    } catch (error) {
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.findCoffeeMachineByProductType',
        'Exception',
      );
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.findCoffeeMachineByProductType', 'End',
      );
      GeneralUtils.printStarsLine();
    }
    return coffeeMachine;
  }
  //-----------------------------------------
  // Find coffee machine by water compatible line 
  //-----------------------------------------
  async findCoffeeMachineByWaterLineCompatible(waterLineCompatible: any): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'Start',
    );
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible',
      'Incoming water line compatible: ' + waterLineCompatible,
    );
    let coffeeMachine = null;
    try {
      coffeeMachine = await CoffeeMachine.findAll(
        {
          where: { WaterLineCompatible: waterLineCompatible }
        });
    } catch (error) {
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible',
        'Exception',
      );
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'End',
      );
      GeneralUtils.printStarsLine();
    }
    return coffeeMachine;
  }
  //-----------------------------------------
  // Find coffee machine by all fields
  //-----------------------------------------
  async findCoffeeMachineByAllFields(incomingProductType: any,
    incomingWaterLineCompatible: any): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findCoffeeMachineByAllFields', 'Start',
    );

    let coffeeMachine = null;
    try {
      coffeeMachine = await CoffeeMachine.findOne(
        {
          where: {
            ProductType: incomingProductType,
            WaterLineCompatible: incomingWaterLineCompatible
          }
        });
    } catch (error) {
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.findCoffeeMachineByAllFields',
        'Exception',
      );
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeeMachineRepository.findCoffeeMachineByAllFields', 'End',
      );
      GeneralUtils.printStarsLine();
    }
    return coffeeMachine;
  }
  async UpdateConfigProperty(coffeeMachine: any) {
    let updateResult: any = null;
    try {
      updateResult = await CoffeeMachine.update<CoffeeMachine>(
        coffeeMachine,
        {
          where: { Id: coffeeMachine.Id }
        });
    } catch (error) {
      console.error(error);
    }
    return updateResult;
  }
}
