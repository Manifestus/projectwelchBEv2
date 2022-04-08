"use strict";

import {
  InferAttributes,
  InferCreationAttributes,
  UUIDV4,
} from "@sequelize/core";

const { Model } = require("sequelize");
module.exports = (sequelize: any, DataTypes: { UUID: any; STRING: any }) => {
  class Clients extends Model<
    InferAttributes<Clients>,
    InferCreationAttributes<Clients>
  > {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.hasMany(models.Orders, { foreignKey: "client_id" });
    }
  }
  Clients.init(
    {
      client_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Clients",
    }
  );
  return Clients;
};