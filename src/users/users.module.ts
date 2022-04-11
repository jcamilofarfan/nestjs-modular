import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer } from './entities/customer.entity';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';

import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { Order } from './entities/order.entity';

import { OrderItem } from './entities/order-item.entity';
import { OrdersItemService } from './services/orders-item.service';
import { OrdersItemController } from './controllers/orders-item.controller';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([Customer, User, Order, OrderItem]),
  ],
  controllers: [
    CustomerController,
    UsersController,
    OrdersController,
    OrdersItemController,
  ],
  providers: [CustomersService, UsersService, OrdersService, OrdersItemService],
})
export class UsersModule {}
