import { WhereOptions } from "sequelize/types";
import { IOrderItem } from "../interfaces/orderitem";
import { orderItem as OrderItemModel } from "../models/orderitem";
export declare class orderItemService {
    constructor();
    getOrderItem: (orderitem_id: string) => Promise<OrderItemModel | null>;
    getOrderItems: () => Promise<OrderItemModel[]>;
    createOrderItem: (orderItem: IOrderItem) => Promise<OrderItemModel | "Error on Creation">;
    patchOrderItem: (orderitem_id: WhereOptions<IOrderItem>, patchingValues: Partial<IOrderItem>) => Promise<[affectedCount: number] | "Error on Patching">;
    deleteOrderItem: (orderitem_id: string) => Promise<number>;
}
