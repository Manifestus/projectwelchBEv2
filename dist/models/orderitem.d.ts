import { Model } from "sequelize-typescript";
import { IOrderItem, IOrderItemCreationAttributes } from "src/interfaces/orderitem";
export declare class orderItem extends Model<IOrderItem, IOrderItemCreationAttributes> {
    orderitem_id: string;
    image: string;
    size: number;
    date: Date;
    text: Date;
    color: Date;
    order_id: string;
    item_id: string;
}
