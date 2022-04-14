import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  DataType,
  HasMany,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { IItem, IItemCreationAttributes } from "src/interfaces/item";
import { orderItem } from "./orderitems";


@Table
export class Items extends Model<IItem, IItemCreationAttributes> {

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

  @CreatedAt
  @UpdatedAt
  @DeletedAt
  timestamps=false

  @HasMany(()=> orderItem)
  orderitem_id!: string
}
