'use strict';

import { InferAttributes, InferCreationAttributes, UUIDV4 } from "@sequelize/core/types";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: { UUID: any; UUIDV4: any; STRING: any; INTEGER: any; }) => {
  class orderItem extends Model<InferAttributes<orderItem>, InferCreationAttributes<orderItem>> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  orderItem.init({
    orderitem_id: 
    {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_id: {
      type: DataTypes.UUID,
    }
  }, {
    sequelize,
    modelName: 'orderItem',
  });
  return orderItem;
};