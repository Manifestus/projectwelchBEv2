import { Model } from "sequelize-typescript";
import { IItem, IItemCreationAttributes } from "src/interfaces/item";
export declare class Items extends Model<IItem, IItemCreationAttributes> {
    item_id: string;
    name: string;
    description: string;
    cost: number;
    orderitem_id: string;
}
