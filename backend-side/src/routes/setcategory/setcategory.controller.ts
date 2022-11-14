import { Controller, HttpCode, Post, HttpStatus, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
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

    @Patch(':id')
    @Roles(['ADMIN'])
    async updateSetcategory(
        @Param('id', ParseIntPipe) id: number,
        @Body('setcategory') setcategory: string
    ) {
         return this.setCategoryService.updateSetcategory(id, setcategory)
    }
}
