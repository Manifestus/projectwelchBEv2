import { Model } from "sequelize-typescript";
import { IClient, IClientCreationAttributes } from "src/interfaces/client";
export declare class Clients extends Model<IClient, IClientCreationAttributes> {
    client_id: string;
    first_name: string;
    last_name: string;
    email: string;
    country: string;
    address: string;
    order_id: string;
}
