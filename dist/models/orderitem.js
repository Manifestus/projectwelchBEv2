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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const items_1 = require("./items");
const orders_1 = require("./orders");
let orderItem = class orderItem extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ defaultValue: sequelize_typescript_1.DataType.UUIDV4 }),
    __metadata("design:type", String)
], orderItem.prototype, "orderitem_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], orderItem.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], orderItem.prototype, "size", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], orderItem.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], orderItem.prototype, "text", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], orderItem.prototype, "color", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => orders_1.Orders),
    __metadata("design:type", String)
], orderItem.prototype, "order_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => items_1.Items),
    __metadata("design:type", String)
], orderItem.prototype, "item_id", void 0);
orderItem = __decorate([
    sequelize_typescript_1.Table
], orderItem);
exports.orderItem = orderItem;
//# sourceMappingURL=orderitem.js.map