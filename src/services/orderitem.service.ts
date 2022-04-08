import { IOrderItem } from "../interfaces/orderitem";

const { orderItems } = require('../models')

export class orderItemService {
  constructor() {}

  //Single OrderItem
  getOrderItem = async (uuid: string) => {
    const orderItem = await orderItems.findOne({
      where: { uuid },
    });
    return orderItem;
  };
  //All OrderItem
  getOrderItems = async () => {
    const orderItemRes = await orderItems.findAll();

    return orderItemRes;
  };
  //Post OrderItem
  createOrderItem = async (orderItem: IOrderItem) => {
    try {
      const orderItemRes = await orderItems.create(orderItem);
      return orderItemRes;
    } catch (error) {
      console.error(error);
    }
  };

  //Patch OrderItem
  patchOrderItem = async (uuid: string, patchingValues: Partial<IOrderItem>) => {
    try {
      const orderItemPatch = await orderItems.update(patchingValues, {
        where: uuid,
      });
      return orderItemPatch;
    } catch (error) {}
  };
 
  //Delete OrderItem
  deleteOrderItem = async (uuid: string) => {
    const orderItemDelete = await orderItems.destroy({
      where: { uuid },
    });
    return orderItemDelete;
  };
}
