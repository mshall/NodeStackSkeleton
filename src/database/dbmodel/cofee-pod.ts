import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'CoffeePod',
  timestamps: false,
  freezeTableName: true,
})
export default class CoffeePod extends Model<CoffeePod> {
  @Column({ type: DataType.STRING, primaryKey: true })
  Id?: string;

  @Column(DataType.STRING)
  ProductType?: string;

  @Column(DataType.STRING)
  CoffeeFlavor?: string;

  @Column(DataType.STRING)
  PackSize?: string;
}
