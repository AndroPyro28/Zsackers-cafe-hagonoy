import { ForbiddenException, Injectable } from '@nestjs/common';
import { Category } from 'src/models';
import { CreateCategoryDto } from './dto';
import {Category as CategoryInterface} from "@prisma/client"

@Injectable()
export class CategoryService {
    /**
     *
     */
    constructor(private readonly categoryModel: Category) {}

    async createCategory(body: CreateCategoryDto){
        const newCategory = await this.categoryModel.createCategory(body)

        if(!newCategory) throw new ForbiddenException('Category already exist');

        return newCategory
    }

    async getAllCategories(search: string): Promise<CategoryInterface[]> {
        const categories = await this.categoryModel.getAllCategories(search)
        return categories
    }
}
