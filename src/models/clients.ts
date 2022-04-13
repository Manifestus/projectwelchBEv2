import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
  AllowNull,
  DataType,
} from "sequelize-typescript";
import { Orders } from "./orders";

@Table
export class Clients extends Model<Clients> {

  @PrimaryKey
  @Column({ defaultValue: DataType.UUIDV4})
  client_id!: string;

  @AllowNull(false)
  @Column
  first_name!: string;

  @AllowNull(false)
  @Column
  last_name!: string;

  @AllowNull(false)
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  country!: string;

  @AllowNull(false)
  @Column
  address!: string;

  @HasMany(() => Orders)
  order_id!: string
}
