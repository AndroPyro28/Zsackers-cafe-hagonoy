import { Controller, HttpCode, Post, HttpStatus, Body } from '@nestjs/common';
import { Roles } from 'src/common/decorators';
import { createSetCategoryDto } from './dto';
import { SetCategoryService } from './setcategory.service';

@Controller('setcategory')
export class SetCategoryController {

    /**
     *
     */
    constructor(private readonly setCategoryService: SetCategoryService) {}

    @Post()
    @Roles(['ADMIN'])
    @HttpCode(HttpStatus.CREATED)
    async createFlavorCategory(@Body() body: createSetCategoryDto) {
        return this.setCategoryService.createSetCategory(body)
    }

    @Post('')
    @Roles(['ADMIN'])
    async getAllSubcategory() {
        return this.setCategoryService.getAllSetCategory()
    }
}
