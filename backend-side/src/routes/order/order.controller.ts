import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { GetCurrentUser, Roles } from 'src/common/decorators';
import UserInteface from 'src/models/user.model';
import { Response } from 'express';
import { orderStatus } from '@prisma/client'
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post('/checkout')
  @Roles(['CUSTOMER', 'STAFF'])
  async checkout(
    @Body() createOrderDto: CreateOrderDto,
    @GetCurrentUser() currentUser: UserInteface,
    @Res() res: Response,
  ) {
    return this.orderService.checkout(createOrderDto, currentUser, res)
  }

  @Post('/pos')
  @Roles(['CUSTOMER', 'STAFF'])
  async pos(
    @Body() createOrderDto: CreateOrderDto,
    @GetCurrentUser() currentUser: UserInteface,
    @Res() res: Response,
  ) {
    return this.orderService.checkout(createOrderDto, currentUser, res)
  }

  @Post('/payment')
  @Roles(['CUSTOMER', 'STAFF'])
  async payment(
    @Body() createOrderDto: CreateOrderDto,
    @GetCurrentUser('id') userId: number,
  ) {
    return this.orderService.payment(createOrderDto, userId)
  }

  @Get('admin')
  @Roles(['ADMIN'])
  findAllByAdmin(
    @Query('order_status') order_status: string,
    @Query('search') search: string
  ) {
    return this.orderService.findAllByAdmin(order_status, search);
  }

  @Get('customer')
  @Roles(['CUSTOMER'])
  findAllByCustomer(
    @Query('status') status: string,
    @GetCurrentUser('id') userId: number
  ) {
    return this.orderService.findAllByCustomer(status, userId);
  }

  @Get('order-id/:order_id')
  @Roles(['ADMIN', 'CUSTOMER'])
  findOneByOrderId(
    @Param('order_id') order_id: string,
  ) {
    return this.orderService.findOneByOrderId(order_id);
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  updateStatus(
    @Param('id', ParseIntPipe) id: number, @Body('deliveryStatus', ParseIntPipe) deliveryStatus: number) {
    return this.orderService.updateStatus(id, deliveryStatus);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
