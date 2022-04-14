"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const orders_1 = require("../models/orders");
class orderService {
    constructor() {
        this.getOrder = async (order_id) => {
            const order = await orders_1.Orders.findOne({
                where: { order_id },
            });
            return order;
        };
        this.getOrders = async () => {
            const orderRes = await orders_1.Orders.findAll();
            return orderRes;
        };
        this.deleteOrder = async (order_id) => {
            const orderDelete = await orders_1.Orders.destroy({
                where: { order_id },
            });
            return orderDelete;
        };
    }
}
exports.orderService = orderService;
//# sourceMappingURL=order.service.js.map