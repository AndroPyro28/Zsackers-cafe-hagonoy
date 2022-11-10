import { Body, Controller, Post } from '@nestjs/common';
import { Sub_Category } from '@prisma/client';
import { Roles } from 'src/common/decorators';
import { CreateSubcategoryDto } from './dto/';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategory')
export class SubcategoryController {

    constructor(private readonly subCategoryService: SubcategoryService) {}

    @Post('')
    @Roles(['ADMIN'])
    async createSubcategory(@Body() body: CreateSubcategoryDto) {
        return this.subCategoryService.createSubcategory(body)
    }

    @Post('')
    @Roles(['ADMIN'])
    async getAllSubcategory() {
        return this.subCategoryService.getAllSubcategory()
    }

}
