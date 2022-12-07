import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ValidateCheckoutMiddleware } from './middleware';
import { Product } from 'src/models';

@Module({
  controllers: [OrderController],
  providers: [OrderService, Product]
})
export class OrderModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCheckoutMiddleware)
    .forRoutes(
      {
        path: 'order/checkout',
        method: RequestMethod.POST
      }
    )
  }
}
