import { Optional } from "sequelize";

export interface IClient {
  client_id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  address: string;
}
export interface IClientCreationAttributes
  extends Optional<IClient, "client_id"> {}
