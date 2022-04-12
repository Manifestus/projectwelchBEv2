import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "@sequelize/core";

export const ordersMeta = {
  order_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    primaryKey: true,
  },
  client_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  orderitem_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}


class Orders extends Model<
  InferAttributes<Orders>,
  InferCreationAttributes<Orders>
> {
  public order_id!: string;
  public client_id!: string;
  public orderitem_id!: string;
  public date!: string;

  static associate(models: any) {
    Orders.belongsTo(models.Clients, { foreignKey: "client_id" });
    Orders.hasMany(models.orderItem, { foreignKey: "orderitem_id" });
  }
}

export default Orders;
