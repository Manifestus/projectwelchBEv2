import { WhereOptions } from "sequelize/types";
import { IOrderItem } from "../interfaces/orderitem";

import { orderItem as OrderItemModel } from "../models/orderitems";

export class orderItemService {
  constructor() {}

  //Single OrderItem
  getOrderItem = async (orderitem_id: string) => {
    const orderItem = await OrderItemModel.findOne({
      where: { orderitem_id },
    });
    return orderItem;
  };
  //All OrderItem
  getOrderItems = async () => {
    const orderItemRes = await OrderItemModel.findAll();

    return orderItemRes;
  };
  //Post OrderItem
  createOrderItem = async (orderItem: IOrderItem) => {
    try {
      const orderItemRes = await OrderItemModel.create(orderItem);
      return orderItemRes;
    } catch (error) {
      console.error(error);
    }
    return "Error on Creation"
  };

  //Patch OrderItem
  patchOrderItem = async (orderitem_id: WhereOptions<IOrderItem>, patchingValues: Partial<IOrderItem>) => {
    try {
      const orderItemPatch = await OrderItemModel.update(patchingValues, {
        where: orderitem_id,
      });
      return orderItemPatch;
    } catch (error) {
      console.error(error);
    }

    return "Error on Patching"
  };
 
  //Delete OrderItem
  deleteOrderItem = async (orderitem_id: string) => {
    const orderItemDelete = await OrderItemModel.destroy({
      where: { orderitem_id },
    });
    return orderItemDelete;
  };
}
