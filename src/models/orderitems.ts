import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "@sequelize/core";

export const orderitemsMeta = {
  orderitem_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  item_id: {
    type: DataTypes.UUID,
  },
}

class orderItem extends Model<
  InferAttributes<orderItem>,
  InferCreationAttributes<orderItem>
> {
  public orderitem_id!: string;
  public image!: string;
  public size!: string;
  public text!: string;
  public color!: string;
  public item_id!: string;

  static associate(models: any) {
    this.belongsTo(models.Orders, { foreignKey: "orderitem_id" });
    this.belongsToMany(models.Items, { through: "orderedItems" });
  }
}

export default orderItem;
