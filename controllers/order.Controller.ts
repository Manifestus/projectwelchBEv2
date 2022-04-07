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
    const clients = this.orderService.getOrders();
    return clients;
  }

  @Get("/orders/:orders_id")
  getOne(@Param("orders_id") uuid: string) {
    const client = this.orderService.getOrder(uuid);
    return client;
  }

  @Delete("/orders/:orders_id")
  remove(@Param("orders_id") order_id: string) {
    return "Removing user...";
  }
}
