import "reflect-metadata";
import { WhereOptions } from "sequelize/types";
export declare class OrderItemController {
    private orderItemService;
    constructor();
    getAll(): Promise<import("../models/orderitem").orderItem[]>;
    getOne(uuid: string): Promise<import("../models/orderitem").orderItem | null>;
    post(orderItem: any): Promise<import("../models/orderitem").orderItem | "Error on Creation">;
    put(orderitem_id: WhereOptions, user: any): Promise<[affectedCount: number] | "Error on Patching">;
    remove(orderitem_id: string): Promise<number>;
}
