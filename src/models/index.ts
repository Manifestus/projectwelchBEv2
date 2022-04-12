import Clients, { clientMeta } from "../models/clients";
import Orders, { ordersMeta } from "../models/orders";
import OrderItem, { orderitemsMeta } from "../models/orderitems";
import Items, { itemsMeta } from "../models/items";

const { Sequelize } = require("@sequelize/core");
const sequelize = new Sequelize(process.env.DATABASE_URI);
console.log(process.env.DATABASE_URI)
const initDataMeta = {
  sequelize: sequelize,
  timestamps: false,
  // modelName: "Clients",
};

let models = [
  { model: Clients, meta: clientMeta, modelName: "Clients" },
  { model: Orders, meta: ordersMeta, modelName: "Orders" },
  { model: OrderItem, meta: orderitemsMeta, modelName: "orderItem" },
  { model: Items, meta: itemsMeta, modelName: "Items" },
];

models.forEach((model) => {
  if (model.model) {
    model.model.init(model.meta, {
      ...initDataMeta,
      modelName: model.modelName,
    });
  }
});

Clients.hasMany(Orders, { foreignKey: "client_id" });
Orders.belongsTo(Clients, { foreignKey: "client_id" });
Orders.hasMany(OrderItem, { foreignKey: "orderitem_id" });
Items.belongsToMany(OrderItem, { through: "orderedItems" });
OrderItem.belongsTo(Orders, { foreignKey: "orderitem_id" });
OrderItem.belongsToMany(Items, { through: "orderedItems" });

export { sequelize as db, Clients, Orders, OrderItem, Items };
