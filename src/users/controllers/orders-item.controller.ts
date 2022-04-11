import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderItemDto } from '../dtos/order-item.dto';
import { OrdersItemService } from '../services/orders-item.service';

@Controller('orders-item')
export class OrdersItemController {
  constructor(private orderItemService: OrdersItemService) {}

  @Post()
  create(@Body() payload: CreateOrderItemDto) {
    return this.orderItemService.create(payload);
  }
}
