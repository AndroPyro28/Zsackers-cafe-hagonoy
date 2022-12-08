import { Injectable } from '@nestjs/common';
import { CartProduct, Product } from 'src/models';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
// import request from 'request'
import UserInteface from 'src/models/user.model';
import { OrderDetails } from 'src/models/order-details.model';
@Injectable()
export class OrderService {
  constructor(
    private readonly orderDetailsModel: OrderDetails,
    private readonly cartProductModel: CartProduct,
    private readonly productModel: Product
  ) {}
  
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

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
