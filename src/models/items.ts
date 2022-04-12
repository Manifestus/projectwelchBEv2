import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "@sequelize/core/types";

const { Sequelize } = require('@sequelize/core');
const sequelize: any = new Sequelize(process.env.DATABASE_URI)

class Items extends Model <
InferAttributes<Items>,
InferCreationAttributes<Items>
>{
    public item_id!: string;
    public name!: string;
    public description!: string;
    public cost!: string;

  static associate(models: any) {
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
    sequelize: sequelize,
    timestamps: false,
    modelName: "Items",
  }
);

export default Items;


