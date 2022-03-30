'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Orders', {
      order_id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      client_id: {
        type: DataTypes.UUID
      },
      orderitem_id: {
        type: DataTypes.UUID
      },
      date: {
        type: DataTypes.DATE
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
    await queryInterface.dropTable('Orders');
  }
};