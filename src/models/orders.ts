import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
  AllowNull,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { Clients } from "./clients";
import { orderItem } from "./orderitem";
@Table
export class Orders extends Model<Orders> {

  @PrimaryKey
  @Column({defaultValue: DataType.UUIDV4})
  order_id!: string;

  @AllowNull(false)
  @Column
  date!: Date;

  @ForeignKey(()=> Clients)
  client_id!: string

  @HasMany(()=> orderItem)
  orderitem_id!: string
}
