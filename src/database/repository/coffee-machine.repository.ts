import GeneralUtils from "../../util/GeneralUtils";
import CoffeeMachine from '../dbmodel/coffee-machine.model';


export default class CoffeeMachineRepository {

  async addNewCoffeeMachine(coffeeMachine: CoffeeMachine): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'Start');

    try {
      const savedConfig = await coffeeMachine.save();
      GeneralUtils.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'End');
      GeneralUtils.printStarsLine();
      return savedConfig;
    } catch (e) {
      GeneralUtils.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'Exception');
      console.error(e);
      GeneralUtils.printInitiateMessage('CoffeeMachineRepository.addNewCoffeeMachine', 'End');
      GeneralUtils.printStarsLine();
    }
  }

  async findAllMachineCoffees() {
    return await CoffeeMachine.findAll();
  }

  async findCoffeeMachineById(incomingId: string): Promise<any> {
    let coffeeMachine = null;
    try {
      coffeeMachine = await CoffeeMachine.findOne({ where: { Id: incomingId } });
    } catch (error) {
      console.error(error);
    }
    return coffeeMachine;
  }

  async findCoffeeMachineByProductType(productType: string): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage('CoffeeMachineRepository.findCoffeeMachineByProductType', 'End');
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findCoffeeMachineByProductType',
      'Incoming product type: ' + productType,
    );
    let mobileBEConfig = null;
    try {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      mobileBEConfig = await CoffeeMachine.findOne({ where: { ProductType: productType } });
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
    return mobileBEConfig;
  }

  async findCoffeeMachineByWaterLineCompatible(waterLineCompatible: string): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible', 'End',
    );
    GeneralUtils.printInitiateMessage(
      'CoffeeMachineRepository.findCoffeeMachineByWaterLineCompatible',
      'Incoming water line compatible: ' + waterLineCompatible,
    );
    let mobileBEConfig = null;
    try {
      mobileBEConfig = await CoffeeMachine.findOne(
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
    return mobileBEConfig;
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