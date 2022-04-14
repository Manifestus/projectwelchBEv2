import { Optional } from "sequelize";
export interface IItem {
    item_id: string;
    name: string;
    description: string;
    cost: number;
}
export interface IItemCreationAttributes extends Optional<IItem, "item_id"> {
}
