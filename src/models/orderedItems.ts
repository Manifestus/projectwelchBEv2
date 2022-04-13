import {
  Table,
  Column,
  Model,
  ForeignKey,
} from "sequelize-typescript";
import { Items } from "./items";
import { orderItem } from "./orderitem";

@Table
export class orderedItems extends Model<orderedItems> {

  @Column
  @ForeignKey(() => orderItem)
  orderitem_id!: string;

  @Column
  @ForeignKey(() => Items)
  item_id!: string;
}
