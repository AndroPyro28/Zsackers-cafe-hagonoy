import { Module } from '@nestjs/common';
import { SetCategory } from 'src/models/set-category.model';
import { SetCategoryController } from './setcategory.controller';
import { SetCategoryService } from './setcategory.service';

@Module({
  controllers: [SetCategoryController],
  providers: [SetCategoryService, SetCategory]
})
export class SetCategoryModule {}
