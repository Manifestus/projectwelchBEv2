'use strict';

import { Model, InferAttributes, InferCreationAttributes, CreationOptional, UUIDV4 } from '@sequelize/core'


module.exports = (sequelize: any, DataTypes: { UUID: any; STRING: any; }) => {
  class Clients extends Model<InferAttributes<Clients>, InferCreationAttributes<Clients>> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Clients.init({
    client_id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4
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
    }
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};