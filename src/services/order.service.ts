import { Orders as OrderModel } from "../models/orders";

export class orderService {
  constructor() {}

  //Single Client
  getOrder = async (order_id: string) => {
    const order = await OrderModel.findOne({
      where: { order_id },
    });
    return order;
  };
  //All clients
  getOrders = async () => {
    const orderRes = await OrderModel.findAll();

    return orderRes;
  };

  //Delete
  deleteOrder = async (order_id: string) => {
    const orderDelete = await OrderModel.destroy({
      where: { order_id },
    });
    return orderDelete;
  };
}
