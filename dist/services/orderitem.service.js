"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderItemService = void 0;
const orderitem_1 = require("../models/orderitem");
class orderItemService {
    constructor() {
        this.getOrderItem = async (orderitem_id) => {
            const orderItem = await orderitem_1.orderItem.findOne({
                where: { orderitem_id },
            });
            return orderItem;
        };
        this.getOrderItems = async () => {
            const orderItemRes = await orderitem_1.orderItem.findAll();
            return orderItemRes;
        };
        this.createOrderItem = async (orderItem) => {
            try {
                const orderItemRes = await orderitem_1.orderItem.create(orderItem);
                return orderItemRes;
            }
            catch (error) {
                console.error(error);
            }
            return "Error on Creation";
        };
        this.patchOrderItem = async (orderitem_id, patchingValues) => {
            try {
                const orderItemPatch = await orderitem_1.orderItem.update(patchingValues, {
                    where: orderitem_id,
                });
                return orderItemPatch;
            }
            catch (error) {
                console.error(error);
            }
            return "Error on Patching";
        };
        this.deleteOrderItem = async (orderitem_id) => {
            const orderItemDelete = await orderitem_1.orderItem.destroy({
                where: { orderitem_id },
            });
            return orderItemDelete;
        };
    }
}
exports.orderItemService = orderItemService;
//# sourceMappingURL=orderitem.service.js.map