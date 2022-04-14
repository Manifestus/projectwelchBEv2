"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const routing_controllers_1 = require("routing-controllers");
const order_service_1 = require("../services/order.service");
let OrderController = class OrderController {
    constructor() {
        this.orderService = new order_service_1.orderService();
    }
    getAll() {
        const order = this.orderService.getOrders();
        return order;
    }
    getOne(uuid) {
        const order = this.orderService.getOrder(uuid);
        return order;
    }
    remove(order_id) {
        const deleteOrder = this.orderService.deleteOrder(order_id);
        return deleteOrder;
    }
};
__decorate([
    (0, routing_controllers_1.Get)("/orders"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAll", null);
__decorate([
    (0, routing_controllers_1.Get)("/orders/:orders_id"),
    __param(0, (0, routing_controllers_1.Param)("orders_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOne", null);
__decorate([
    (0, routing_controllers_1.Delete)("/orders/:orders_id"),
    __param(0, (0, routing_controllers_1.Param)("orders_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "remove", null);
OrderController = __decorate([
    (0, routing_controllers_1.JsonController)(),
    __metadata("design:paramtypes", [])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map