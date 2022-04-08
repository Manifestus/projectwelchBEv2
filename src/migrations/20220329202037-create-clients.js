'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Clients', {
      client_id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Clients');
  }
};