import { Orders as OrderModel } from "../models/orders";
export declare class orderService {
    constructor();
    getOrder: (order_id: string) => Promise<OrderModel | null>;
    getOrders: () => Promise<OrderModel[]>;
    deleteOrder: (order_id: string) => Promise<number>;
}
