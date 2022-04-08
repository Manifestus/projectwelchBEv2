import {
  Param,
  Get,
  Delete,
  JsonController,
} from "routing-controllers";
import { orderService } from "../services/order.service";

@JsonController()
export class OrderController {
  private orderService: orderService;
  constructor() {
    this.orderService = new orderService();
  }

  @Get("/orders")
  getAll() {
    const order = this.orderService.getOrders();
    return order;
  }

  @Get("/orders/:orders_id")
  getOne(@Param("orders_id") uuid: string) {
    const order = this.orderService.getOrder(uuid);
    return order;
  }

  @Delete("/orders/:orders_id")
  remove(@Param("orders_id") order_id: string) {
    return order_id;
  }
}
