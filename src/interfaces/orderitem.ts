import { Optional } from "sequelize";

export interface IOrderItem {
  orderitem_id: string;
  image: string;
  size: number;
  text: string;
  color: string;
  order_id: string;
}

export interface IOrderItemCreationAttributes
  extends Optional<IOrderItem, "orderitem_id"> {}
