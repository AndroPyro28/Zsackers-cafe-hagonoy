import { Injectable } from '@nestjs/common';
import { Product, User } from 'src/models';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
// import request from 'request'
import UserInteface from 'src/models/user.model';
@Injectable()
export class OrderService {
  constructor(private readonly productModel: Product) {}

  
  async checkout(createOrderDto: CreateOrderDto, currentUser: UserInteface) {

    
    // return returnJson;

    
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
