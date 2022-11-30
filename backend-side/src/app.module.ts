import { Module } from '@nestjs/common';
import { AuthModule, CategoryModule, SubcategoryModule, ProductModule } from './routes';
import { SetcategoryModule } from './routes/setcategory/setcategory.module';
import { CartProductModule } from './routes/cart-product/cart-product.module';

@Module({
  imports: [AuthModule, CategoryModule, SubcategoryModule, ProductModule, SetcategoryModule, CartProductModule],
})
export class AppModule {}
