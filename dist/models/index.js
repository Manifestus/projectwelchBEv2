"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const clients_1 = require("./clients");
const items_1 = require("./items");
const orderitem_1 = require("./orderitem");
const orders_1 = require("./orders");
const uri = `${process.env.DATABASE_URI}`;
exports.sequelize = new sequelize_typescript_1.Sequelize(uri);
exports.sequelize.addModels([clients_1.Clients, orders_1.Orders, orderitem_1.orderItem, items_1.Items]);
//# sourceMappingURL=index.js.map