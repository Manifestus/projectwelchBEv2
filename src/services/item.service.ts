import { WhereOptions } from "sequelize/types";
import { IItem, IItemCreationAttributes } from "../interfaces/item";
import { Items as ItemsModel } from "../models/items";

export class ItemService {
  constructor() {}

  //Single Items
  getItem = async (item_id: string) => {
    const item = await ItemsModel.findOne({
      where: { item_id },
    });
    return item;
  };
  //All items
  getItems = async () => {
    const itemsRes = await ItemsModel.findAll();

    return itemsRes;
  };
  //Post Items
  createItem = async (item: IItemCreationAttributes) => {
    try {
      const itemRes = await ItemsModel.create(item);
      return itemRes;
    } catch (error) {
      console.error(error);
    }
    return "Error Creating";
  };

  //Patch Items
  patchItem = async (
    item_id: WhereOptions<IItem>,
    patchingValues: Partial<IItem>
  ) => {
    try {
      const itemPatch = await ItemsModel.update(patchingValues, {
        where: item_id,
      });
      return itemPatch;
    } catch (error) {
      console.error(error);
    }
    return "Error Patching";
  };

  //Delete Items
  deleteItem = async (item_id: string) => {
    const itemDelete = await ItemsModel.destroy({
      where: { item_id },
    });
    return itemDelete;
  };
}
