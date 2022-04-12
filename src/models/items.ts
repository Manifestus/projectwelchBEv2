import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "@sequelize/core";

export const itemsMeta = {
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
};

class Items extends Model<
  InferAttributes<Items>,
  InferCreationAttributes<Items>
> {
  public item_id!: string;
  public name!: string;
  public description!: string;
  public cost!: string;

  static associate(models: any) {
    this.belongsToMany(models.orderItem, { through: "orderedItems" });
  }
}

export default Items;
