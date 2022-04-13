import {
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
} from "routing-controllers";
import "reflect-metadata";
import { orderItemService } from "../services/orderitem.service";
import { WhereOptions } from "sequelize/types";

@JsonController()
export class OrderItemController {
  private orderItemService: orderItemService;
  constructor() {
    this.orderItemService = new orderItemService();
  }

  @Get("/orderitem")
  getAll() {
    const orderItems = this.orderItemService.getOrderItems();
    return orderItems;
  }

  @Get("/orderitem/:orderitem_id")
  getOne(@Param("orderitem_id") uuid: string) {
    const orderItems = this.orderItemService.getOrderItem(uuid);
    return orderItems;
  }

  @Post("/orderitem")
  post(@Body() orderItem: any) {
    const neworderItems = this.orderItemService.createOrderItem(orderItem);
    return neworderItems;
  }

  @Put("/orderitem/:orderitem_id")
  put(@Param("id") orderitem_id: WhereOptions, @Body() user: any) {
    const updateOrderItem = this.orderItemService.patchOrderItem(orderitem_id, user)
    return updateOrderItem;
  }

  @Delete("/orderitem/:orderitem_id")
  remove(@Param("orderitem_id") orderitem_id: string) {
    const deleteOrderItem = this.orderItemService.deleteOrderItem(orderitem_id)
    return deleteOrderItem;
  }
}
