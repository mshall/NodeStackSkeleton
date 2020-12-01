import GeneralUtils from "../../util/GeneralUtils";
import CoffeePod from '../dbmodel/cofee-pod';


export default class CoffeePodRepository {

  //-----------------------------------------
  // Add a new coffee pod
  //-----------------------------------------
  async addNewCoffeePod(incomingCoffeePod: any): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage('CoffeePodRepository.addNewCoffeePod', 'Start');
    let cofeePod: CoffeePod = new CoffeePod();
    cofeePod.Id = incomingCoffeePod.Id;
    cofeePod.ProductType = incomingCoffeePod.ProductType;
    cofeePod.CoffeeFlavor = incomingCoffeePod.CoffeeFlavor;
    cofeePod.PackSize = incomingCoffeePod.PackSize;
    try {
      const savedConfig = await cofeePod.save();
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.addNewCoffeePod', 'Result: '
      + JSON.stringify(savedConfig));
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.addNewCoffeePod', 'End');
      GeneralUtils.printStarsLine();
      return savedConfig;
    } catch (e) {
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.addNewCoffeePod', 'Exception');
      console.error(e);
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.addNewCoffeePod', 'End');
      GeneralUtils.printStarsLine();
    }
  }
  //-----------------------------------------
  // Find all coffee pods
  //-----------------------------------------
  async findAllCoffeePods() {
    const coffeePodsList = await CoffeePod.findAll();
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.coffeePodsList', 'Result: '
    + JSON.stringify(coffeePodsList));
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.coffeePodsList', 'End');
    return coffeePodsList;
  }
  //-----------------------------------------
  // Find coffee pod by id
  //-----------------------------------------
  async findCoffeePodById(incomingId: string): Promise<any> {
    let coffeePod = null;
    try {
      coffeePod = await CoffeePod.findOne({ where: { Id: incomingId } });
    } catch (error) {
      console.error(error);
    }
    return coffeePod;
  }
  //-----------------------------------------
  // Find coffee pods based on product type
  //-----------------------------------------
  async findCoffeePodByProductType(productType: string): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage('CoffeePodRepository.findCoffeePodByProductType', 'End');
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByProductType',
      'Incoming product type: ' + productType,
    );
    let coffeePod = null;
    try {
      coffeePod = await CoffeePod.findAll({ where: { ProductType: productType } });
    } catch (error) {
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.findCoffeePodByProductType',
        'Exception',
      );
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.findCoffeePodByProductType', 'End',
      );
      GeneralUtils.printStarsLine();
    }
    return coffeePod;
  }
  //-----------------------------------------
  // Find coffee pod by flavor
  //-----------------------------------------
  async findCoffeePodByFlavor(incomingFlavor: string): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByFlavor', 'End',
    );
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByFlavor',
      'Incoming Flavor: ' + incomingFlavor,
    );
    let cofeePod = null;
    try {
      cofeePod = await CoffeePod.findAll(
        {
          where: { CoffeeFlavor: incomingFlavor }
        });
    } catch (error) {
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.findCoffeePodByFlavor',
        'Exception',
      );
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.findCoffeePodByFlavor', 'End',
      );
      GeneralUtils.printStarsLine();
    }
    return cofeePod;
  }
  //-----------------------------------------
  // Find coffee pod by pack size
  //-----------------------------------------
  async findCoffeePodByPackSize(packSize: number): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByPackSize', 'End',
    );
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByPackSize',
      'Pack size: ' + packSize,
    );
    let coffeePod = null;
    try {
      coffeePod = await CoffeePod.findAll(
        {
          where: { PackSize: packSize }
        });
    } catch (error) {
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.findCoffeePodByPackSize',
        'Exception',
      );
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.findCoffeePodByPackSize', 'End',
      );
      GeneralUtils.printStarsLine();
    }
    return coffeePod;
  }
  //-----------------------------------------
  // Find coffee pods based on all fields
  //-----------------------------------------
  async findCoffeePodByAllFields(incomingProductType: any, incomingFlavor: any, incomingPackSize: any): Promise<any> {
    GeneralUtils.printStarsLine();
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByAllFields', 'End',
    );
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByAllFields',
      '| Product type: ' + incomingProductType +
      '| Flavor: ' + incomingFlavor +
      '| Pack size: ' + incomingPackSize,
    );
    let coffeePod = null;
    try {
      coffeePod = await CoffeePod.findOne(
        {
          where: {
            ProductType: incomingProductType,
            CoffeeFlavor: incomingFlavor,
            PackSize: incomingPackSize
          }
        });
    } catch (error) {
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.findCoffeePodByAllFields',
        'Exception',
      );
      console.error(error);
      GeneralUtils.printInitiateMessage(
        'CoffeePodRepository.findCoffeePodByAllFields', 'End',
      );
      GeneralUtils.printStarsLine();
    }
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByAllFields',
      'Result: ' + JSON.stringify(coffeePod),
    );
    GeneralUtils.printInitiateMessage(
      'CoffeePodRepository.findCoffeePodByAllFields', 'End',
    );
    return coffeePod;
  }


  async UpdateConfigProperty(coffeePod: any) {
    let updateResult: any = null;
    try {
      updateResult = await CoffeePod.update<CoffeePod>(
        coffeePod,
        {
          where: { Id: coffeePod.Id }
        });
    } catch (error) {
      console.error(error);
    }
    return updateResult;
  }
}
