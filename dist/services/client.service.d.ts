import { WhereOptions } from "sequelize/types";
import { IClient, IClientCreationAttributes } from "../interfaces/client";
import { Clients as ClientsModel } from "../models/clients";
export declare class clientService {
    constructor();
    getClient: (client_id: string) => Promise<ClientsModel | null>;
    getClients: () => Promise<ClientsModel[]>;
    createClient: (client: IClientCreationAttributes) => Promise<ClientsModel | "Error Creating">;
    patchClient: (client_id: WhereOptions<IClient>, patchingValues: Partial<IClient>) => Promise<[affectedCount: number] | "Error Patching">;
    deleteClient: (client_id: string) => Promise<number>;
}
