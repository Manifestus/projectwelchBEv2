"use strict";

import {
  InferAttributes,
  InferCreationAttributes,
} from "@sequelize/core";

const { Model } = require("sequelize");
module.exports = (
  sequelize: any,
  DataTypes: { UUID: any; UUIDV4: any; DATE: any }
) => {
  class Orders extends Model<
    InferAttributes<Orders>,
    InferCreationAttributes<Orders>
  > {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Orders.belongsTo(models.Clients, { foreignKey: "client_id" });
      Orders.hasMany(models.orderItem, { foreignKey: "orderitem_id" });
    }
  }
  Orders.init(
    {
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
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Orders",
    }
  );
  return Orders;
};
