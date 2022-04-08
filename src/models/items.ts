"use strict";

import {
  InferAttributes,
  InferCreationAttributes,
  UUIDV4,
} from "@sequelize/core";

const { Model } = require("sequelize");
module.exports = (
  sequelize: any,
  DataTypes: { UUID: any; STRING: any; FLOAT: any }
) => {
  class Items extends Model<
    InferAttributes<Items>,
    InferCreationAttributes<Items>
  > {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.belongsToMany(models.orderItem, { through: "orderedItems" });
    }
  }
  Items.init(
    {
      item_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Items",
    }
  );
  return Items;
};
