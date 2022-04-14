import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  ForeignKey,
  DataType,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Clients } from "./clients";
import { orderItem } from "./orderitems";
import { IOrder, IOrderCreationAttributes } from "src/interfaces/order";

@Table
export class Orders extends Model<IOrder, IOrderCreationAttributes> {

  @PrimaryKey
  @Column({defaultValue: DataType.UUIDV4})
  order_id!: string;

  @AllowNull(false)
  @Column
  date!: Date;

  @CreatedAt
  @UpdatedAt
  @DeletedAt
  timestamps=false

  @ForeignKey(()=> Clients)
  client_id!: string

  @ForeignKey(()=> orderItem)
  orderitem_id!: string 
}
