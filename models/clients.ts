'use strict';

import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core'


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
    client_id: DataTypes.UUID,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    country: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};