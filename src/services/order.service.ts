const { Orders } = require('../models')

export class orderService {
  constructor() {}

  //Single Client
  getOrder = async (uuid: string) => {
    const order = await Orders.findOne({
      where: { uuid },
    });
    return order;
  };
  //All clients
  getOrders = async () => {
    const orderRes = await Orders.findAll();

    return orderRes;
  };

  //Delete
  deleteOrder = async (uuid: string) => {
    const orderDelete = await Orders.destroy({
      where: { uuid },
    });
    return orderDelete;
  };
}
