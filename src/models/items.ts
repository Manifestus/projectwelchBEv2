import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsToMany,
  AllowNull,
  DataType,
} from "sequelize-typescript";
import { orderItem } from "./orderitem";
import { orderedItems } from "./orderedItems";

@Table
export class Items extends Model<Items> {

  @PrimaryKey
  @Column({defaultValue: DataType.UUIDV4})
  item_id!: string;

  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @Column
  description!: string;

  @AllowNull(false)
  @Column
  cost!: number;

  @BelongsToMany(() => orderItem, () => orderedItems)
  orderitem_id!: string;
}
