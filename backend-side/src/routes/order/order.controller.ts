import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { GetCurrentUser, Roles } from 'src/common/decorators';
import { User } from 'src/models';
import UserInteface from 'src/models/user.model';
import { v4 as uuid } from 'uuid';
import { Response } from 'express';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post('/checkout')
  @Roles(['CUSTOMER'])
  async checkout(
    @Body() createOrderDto: CreateOrderDto,
    @GetCurrentUser() currentUser: UserInteface,
    @Res() res: Response,
  ) {
    // const { paymentType, totalAmount, cartProducts, address, contact } = createOrderDto;

    // let returnJson: any = {
    //   proceedPayment: true,
    //   paymentType,
    //   cartProducts,
    //   checkouturl: '',
    //   address,
    //   contact,
    //   order_id: '',
    // };

    // if (paymentType === 'gcash') {
    //   const request = require('request');
    //   var options = {
    //     method: 'POST',
    //     url: 'https://g.payx.ph/payment_request',
    //     formData: {
    //       'x-public-key': process.env.GCASH_API_KEY,
    //       amount: `${1}`,
    //       description: 'Payment for services rendered',
    //       redirectsuccessurl: `${process.env.CLIENT_URL}/customer/payment`,
    //       // redirectfailurl: `${process.env.CLIENT_URL_PROD}/customer/cart`,
    //       customeremail: `${currentUser?.email}`,
    //       customermobile: `${currentUser?.profile.contact}`,
    //       customername: `${currentUser?.profile.firstname} ${currentUser?.profile.lastname}`,
    //       // webhooksuccessurl:`${process.env.SERVER_URI_PROD}/api/customer/paymentsuccess`
    //     },
    //   };
    //   request(options, function (error, response) {
    //     if (error) throw new Error(error);

    //     const { data } = JSON.parse(response.body);

    //     const { checkouturl, hash } = data;

    //     return res.json({ ...returnJson, checkouturl, order_id: hash });
    //   });
    // }
    // if (paymentType === 'cod') {
    //   res.json({
    //     ...returnJson,
    //     checkouturl: `http://localhost:3000/customer/payment`,
    //     order_id: uuid(),
    //   });
    // }
  }

  @Post('/payment')
  @Roles(['CUSTOMER'])
  async payment(
    @Body() createOrderDto: CreateOrderDto,
    @GetCurrentUser('id') userId: number,
  ) {
    return this.orderService.payment(createOrderDto, userId)
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
