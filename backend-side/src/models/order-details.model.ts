import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from 'src/routes/order/dto/create-order.dto';
import { order_Details } from './root.model';
@Injectable()
export class OrderDetails {
  async createOrder(createOrder: CreateOrderDto, userId: number) {
    const { paymentType, address, contact, totalAmount, order_id } = createOrder;

    try {
      const newOrder = await order_Details.create({
        data: {
            paymentMethod: paymentType,
            order_id,
            contact,
            totalAmount: Number(totalAmount.toFixed(0)),
            address,
            userId
        }
      });
      return newOrder;
    } catch (error) {
      console.error(error);
    }
  }
}
