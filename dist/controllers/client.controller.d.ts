import "reflect-metadata";
import { WhereOptions } from "sequelize/types";
import { IClient } from "src/interfaces/client";
export declare class ClientController {
    private clientService;
    constructor();
    getAll(): Promise<import("../models/clients").Clients[]>;
    getOne(uuid: string): Promise<import("../models/clients").Clients | null>;
    post(client: any): Promise<import("../models/clients").Clients | "Error Creating">;
    put(client_id: WhereOptions<IClient>, user: any): Promise<[affectedCount: number] | "Error Patching">;
    remove(client_id: string): Promise<number>;
}
