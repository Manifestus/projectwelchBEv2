import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "@sequelize/core/types";

const { Sequelize } = require('@sequelize/core');
const sequelize: any = new Sequelize(process.env.DATABASE_URI)

class Clients extends Model <
InferAttributes<Clients>,
InferCreationAttributes<Clients>
>{
  public client_id!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public country!: string;
  public address!: string;

  static associate(models: any) {
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
    sequelize: sequelize,
    timestamps: false,
    modelName: "Clients",
  }
);

export default Clients;
