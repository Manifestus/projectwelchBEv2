import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  ForeignKey,
  DataType,
  HasMany,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { IOrderItem, IOrderItemCreationAttributes } from "src/interfaces/orderitem";
import { Items } from "./items";
import { Orders } from "./orders";

@Table
export class orderItem extends Model <IOrderItem, IOrderItemCreationAttributes>{

  @PrimaryKey
  @Column({defaultValue: DataType.UUIDV4})
  orderitem_id!: string;

  @AllowNull(false)
  @Column
  image!: string;

  @AllowNull(false)
  @Column
  size!: number;

  @AllowNull(false)
  @Column({defaultValue: DataType.DATE})
  date!: Date;

  @AllowNull(false)
  @Column
  text!: Date;

  @AllowNull(false)
  @Column
  color!: Date;

  @CreatedAt
  @UpdatedAt
  @DeletedAt
  timestamps=false

  @HasMany(() => Orders)
  order_id!: string

  @ForeignKey(()=> Items)
  item_id!: string;
}
