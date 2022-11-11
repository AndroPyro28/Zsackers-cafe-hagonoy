import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { ProductModule } from './product/product.module';
import { SetCategoryModule } from './setcategory/setcategory.module';

@Module({
  imports: [AuthModule, CategoryModule, SubcategoryModule, ProductModule, SetCategoryModule],
})
export class AppModule {}
