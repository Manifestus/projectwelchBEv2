'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('orderItems', {
      orderitem_id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING
      },
      size: {
        type: DataTypes.STRING
      },
      color: {
        type: DataTypes.STRING
      },
      item_id: {
        type: DataTypes.UUID
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
    await queryInterface.dropTable('orderItems');
  }
};