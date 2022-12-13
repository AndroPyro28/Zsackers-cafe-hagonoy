import { Injectable } from '@nestjs/common';
import { orderStatus } from '@prisma/client';
import { CreateOrderDto } from 'src/routes/order/dto/create-order.dto';
import { CancelOrderDto } from 'src/routes/order/dto/update-order.dto';
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

  async findAllByAdmin(order_status: string, search: string,) {
    try {
      let condition: any = {
        OR: [
          {
            order_id: {
              contains: search
            },
            order_status: 'pending',
          },
          {
            order_id: {
              contains: search
            },
            order_status: 'onGoing'
          }
        ]
      }
      if(order_status != 'all') {
          condition = {
            order_id: {
              contains: search
            },
            order_status: order_status as orderStatus
        }
      }
      const orders = await order_Details.findMany({
        where: condition,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              profile: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
      return orders

      
    } catch (error) {
      console.error(error)
    }
  }

  async findAllByCustomer(status: string, userId: number) {
    try {
      let condition: object = {}
      if(status === 'preparing') {
        condition = {
          OR: [
            {
              order_status: 'pending',
              delivery_status: 0,
              userId,
              user: {
                role: 'CUSTOMER'
              }
            },
            {
              order_status: 'onGoing',
              delivery_status: 1,
              userId,
              user: {
                role: 'CUSTOMER'
              }
            },
            {
              order_status: 'onGoing',
              delivery_status: 2,
              userId,
              user: {
                role: 'CUSTOMER'
              }
            },
          ]
        }
      }

      if(status === 'to-receive') {
        condition = {
              order_status: 'onGoing',
              delivery_status: 3,
              userId,
              user: {
                role: 'CUSTOMER'
              }
            }
      }

      if(status === 'completed') {
        condition = {
          order_status: 'completed',
          delivery_status: 4,
          userId,
          user: {
            role: 'CUSTOMER'
          }
        }
      }
      const orders = await order_Details.findMany({
        where: condition,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              profile: true
            }
          },
          cart_product: {
            select: {
              product: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
      return orders

      
    } catch (error) {
      console.error(error)
    }
  }


  async findOneByOrderId(order_id: string) {
    console.log(order_id)
    try {
      const orderDetails = await order_Details.findUnique({
        where: {
          order_id
        },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              profile: true
            }
          },
          cart_product: {
            include: {
              product: true
            }
          }
        },
      })
      return orderDetails;
    } catch (error) {
      console.error(error)
    }
  }

  async findOrderById(id: number) {
    try {
      const order = await order_Details.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              profile: true
            }
          },
      }});
      return order;
    } catch (error) {
      console.error(error)
    }
  }

  async updateStatus(id: number, deliveryStatus: number) {
    try {
      let orderStatus: orderStatus;
      if(
        deliveryStatus+1 === 1 ||
        deliveryStatus+1 === 2 ||
        deliveryStatus+1 === 3
        ) orderStatus = 'onGoing'

      if(deliveryStatus+1 === 4) orderStatus = 'completed'

      const updatedOrder = await order_Details.update({
        where: {
          id,
        },
        data: {
          order_status: orderStatus,
          delivery_status: {
            increment: 1
          }
        }
      })
      return updatedOrder
    } catch (error) {
      console.error(error)
    }
  }

  async cancelOrder(id: number,  cancelOrderDto: CancelOrderDto) {
    try {
      const updatedOrder = await order_Details.update({
        where: { id },
        data: {
          delivery_status: -1,
          order_status: 'cancelled',
          cancel_reason: cancelOrderDto.reason
        }})
      return updatedOrder
    } catch (error) {
      console.error(error)
    }
  }
}
