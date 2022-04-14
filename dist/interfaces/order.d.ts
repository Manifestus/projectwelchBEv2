import { Optional } from "sequelize";
export interface IOrder {
    order_id: string;
    date: Date;
    client_id: string;
    orderitem_id: string;
}
export interface IOrderCreationAttributes extends Optional<IOrder, "order_id"> {
}
