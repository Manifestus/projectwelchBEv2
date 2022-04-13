import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsToMany,
  AllowNull,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { orderedItems } from "./orderedItems";
import { Orders } from "./orders";

@Table
export class orderItem extends Model <orderItem>{

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
  @Column
  date!: Date;

  @AllowNull(false)
  @Column
  text!: Date;

  @AllowNull(false)
  @Column
  color!: Date;

  @ForeignKey(() => Orders)
  order_id!: string;

  @BelongsToMany(() => orderItem, () => orderedItems)
  item_id!: string;
}
