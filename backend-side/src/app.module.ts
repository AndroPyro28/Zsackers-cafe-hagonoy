import { Module } from '@nestjs/common';
import { AuthModule, CategoryModule, SubcategoryModule, ProductModule } from './routes';
import { SetcategoryModule } from './routes/setcategory/setcategory.module';

@Module({
  imports: [AuthModule, CategoryModule, SubcategoryModule, ProductModule, SetcategoryModule],
})
export class AppModule {}
