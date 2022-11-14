import { Module } from '@nestjs/common';
import { AuthModule, CategoryModule, SubcategoryModule, ProductModule, SetCategoryModule } from './routes';

@Module({
  imports: [AuthModule, CategoryModule, SubcategoryModule, ProductModule, SetCategoryModule],
})
export class AppModule {}
