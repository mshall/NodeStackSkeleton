import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'CoffeeMachine',
  timestamps: false,
  freezeTableName: true,
})
export default class CoffeeMachine extends Model<CoffeeMachine> {
  @Column({ type: DataType.STRING, primaryKey: true })
  Id?: string;

  @Column(DataType.STRING)
  ProductType?: string;

  @Column(DataType.BOOLEAN)
  WaterLineCompatible?: boolean;
}
