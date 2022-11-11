import { ForbiddenException, Injectable } from '@nestjs/common';
import { SetCategory } from 'src/models/set-category.model';
import { createSetCategoryDto } from './dto';

@Injectable()
export class SetCategoryService {

    /**
     *
     */
    constructor(private readonly setCategoryModel: SetCategory) {
    }
    async createSetCategory(body: createSetCategoryDto) {
        const newFlavorCategory = this.setCategoryModel.createSetCategory(body)

        if(!newFlavorCategory) throw new ForbiddenException('Something went wrong...')

        return newFlavorCategory;
    }

    async getAllSetCategory() {
        const flavorCategories = await this.setCategoryModel.getAllSetCategory()
        return flavorCategories
    }
}
