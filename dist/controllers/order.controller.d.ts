export declare class OrderController {
    private orderService;
    constructor();
    getAll(): Promise<import("../models/orders").Orders[]>;
    getOne(uuid: string): Promise<import("../models/orders").Orders | null>;
    remove(order_id: string): Promise<number>;
}
