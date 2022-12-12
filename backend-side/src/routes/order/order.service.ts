import { ForbiddenException, Injectable } from '@nestjs/common';
import { CartProduct, Product } from 'src/models';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Response } from 'express';
import { v4 as uuid } from 'uuid';
import UserInteface from 'src/models/user.model';
import { OrderDetails } from 'src/models/order-details.model';
import { orderStatus } from '@prisma/client';
@Injectable()
export class OrderService {
  constructor(
    private readonly orderDetailsModel: OrderDetails,
    private readonly cartProductModel: CartProduct,
    private readonly productModel: Product
  ) {}
  
  async checkout(createOrderDto: CreateOrderDto,currentUser: UserInteface, res: Response) {
    const { paymentType, cartProducts, address, contact } = createOrderDto;

    const returnJson: any = {
      proceedPayment: true,
      paymentType,
      cartProducts,
      checkouturl: '',
      address,
      contact,
      order_id: '',
    };

    if (paymentType === 'gcash') {
      const request = require('request');
      var options = {
        method: 'POST',
        url: 'https://g.payx.ph/payment_request',
        formData: {
          'x-public-key': process.env.GCASH_API_KEY,
          amount: `${1}`,
          description: 'Payment for services rendered',
          redirectsuccessurl: `${process.env.CLIENT_URL}/customer/payment`,
          // redirectfailurl: `${process.env.CLIENT_URL_PROD}/customer/cart`,
          customeremail: `${currentUser?.email}`,
          customermobile: `${currentUser?.profile.contact}`,
          customername: `${currentUser?.profile.firstname} ${currentUser?.profile.lastname}`,
          // webhooksuccessurl:`${process.env.SERVER_URI_PROD}/api/customer/paymentsuccess`
        },
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);

        const { data } = JSON.parse(response.body);

        const { checkouturl, hash } = data;

        return res.json({ ...returnJson, checkouturl, order_id: hash });
      });
    }
    if (paymentType === 'cod') {
      return res.json({
        ...returnJson,
        checkouturl: `http://localhost:3000/customer/payment`,
        order_id: `${uuid()}`.replace(/\-/g,""),
      });
    }
  }
  async payment(createOrderDto: CreateOrderDto, userId: number) {
    const newOrderDetails = await this.orderDetailsModel.createOrder(createOrderDto, userId)
    const {cartProducts} = createOrderDto;
    const cartProductIds = cartProducts.map(cartProduct => cartProduct.id);

    const productIds = cartProducts.map(cartProduct => ({
      id: cartProduct.product.id,
      quantity: cartProduct.quantity
    }));
    const updateProducts = await this.productModel.updateProductsStocks(productIds)

    const updateCartProducts = await this.cartProductModel.updateManyCartProductsWithOrder(cartProductIds,newOrderDetails.id)
    return {
      success: true
    }
  }

  findAllByAdmin(order_status: string, search: string) {
    return this.orderDetailsModel.findAllByAdmin(order_status, search);
  }

  findAllByCustomer(status: string, userId: number ) {
    return this.orderDetailsModel.findAllByCustomer(status, userId);
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async findOneByOrderId (order_id: string) {
    const orderDetails = await this.orderDetailsModel.findOneByOrderId(order_id);
    if(!orderDetails) {
      throw new ForbiddenException('Cannot find order details')
    }

    return orderDetails
  }

 async updateStatus(id: number, deliveryStatus: number) {
    const updatedOrder = await this.orderDetailsModel.updateStatus(id, deliveryStatus);

    if(!updatedOrder) throw new ForbiddenException('Didnt update status');
    return updatedOrder
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
