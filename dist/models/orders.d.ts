import { Model } from "sequelize-typescript";
import { IOrder, IOrderCreationAttributes } from "src/interfaces/order";
export declare class Orders extends Model<IOrder, IOrderCreationAttributes> {
    order_id: string;
    date: Date;
    client_id: string;
    orderitem_id: string;
}
