import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { Roles } from 'src/common/decorators';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto';

@Controller('category')
export class CategoryController {

    /**
     *
     */
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    @Roles(['ADMIN'])
    @HttpCode(HttpStatus.OK)
    async getAllCategories(@Query('search') search: string ) {
        return this.categoryService.getAllCategories(search)
    }

    @Post('')
    @Roles(['ADMIN'])
    @HttpCode(HttpStatus.CREATED)
    async createCategory(@Body() body: CreateCategoryDto) {
        return this.categoryService.createCategory(body)
    }
}
