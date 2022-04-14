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
exports.OrderItemController = void 0;
const routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
const orderitem_service_1 = require("../services/orderitem.service");
let OrderItemController = class OrderItemController {
    constructor() {
        this.orderItemService = new orderitem_service_1.orderItemService();
    }
    getAll() {
        const orderItems = this.orderItemService.getOrderItems();
        return orderItems;
    }
    getOne(uuid) {
        const orderItems = this.orderItemService.getOrderItem(uuid);
        return orderItems;
    }
    post(orderItem) {
        const neworderItems = this.orderItemService.createOrderItem(orderItem);
        return neworderItems;
    }
    put(orderitem_id, user) {
        const updateOrderItem = this.orderItemService.patchOrderItem(orderitem_id, user);
        return updateOrderItem;
    }
    remove(orderitem_id) {
        const deleteOrderItem = this.orderItemService.deleteOrderItem(orderitem_id);
        return deleteOrderItem;
    }
};
__decorate([
    (0, routing_controllers_1.Get)("/orderitem"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderItemController.prototype, "getAll", null);
__decorate([
    (0, routing_controllers_1.Get)("/orderitem/:orderitem_id"),
    __param(0, (0, routing_controllers_1.Param)("orderitem_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderItemController.prototype, "getOne", null);
__decorate([
    (0, routing_controllers_1.Post)("/orderitem"),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderItemController.prototype, "post", null);
__decorate([
    (0, routing_controllers_1.Put)("/orderitem/:orderitem_id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OrderItemController.prototype, "put", null);
__decorate([
    (0, routing_controllers_1.Delete)("/orderitem/:orderitem_id"),
    __param(0, (0, routing_controllers_1.Param)("orderitem_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderItemController.prototype, "remove", null);
OrderItemController = __decorate([
    (0, routing_controllers_1.JsonController)(),
    __metadata("design:paramtypes", [])
], OrderItemController);
exports.OrderItemController = OrderItemController;
//# sourceMappingURL=orderitem.Controller.js.map