import { ForbiddenException, Injectable } from '@nestjs/common';
import { Subcategory } from 'src/models';
import { CreateSubcategoryDto } from './dto';

@Injectable()
export class SubcategoryService {

    /**
     *
     */
    constructor(private readonly subCategoryModel: Subcategory) {}

    async createSubcategory(body: CreateSubcategoryDto) {
        const newSubcategory = await this.subCategoryModel.createSubcategory(body)

        if(!newSubcategory) throw new ForbiddenException('Category already exist');
        
        return newSubcategory
    }

    async getAllSubcategory() {
        const subcategories = await this.subCategoryModel.getAllSubcategories()
        return subcategories
    }
}
