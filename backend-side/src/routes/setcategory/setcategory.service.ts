import { ForbiddenException, Injectable } from '@nestjs/common';
import { SetCategory } from 'src/models';
import { createSetCategoryDto } from './dto';

@Injectable()
export class SetCategoryService {

    /**
     *
     */
    constructor(private readonly setCategoryModel: SetCategory) {
    }
    async createSetCategory(body: createSetCategoryDto) {
        const newSetCategory = this.setCategoryModel.createSetCategory(body)

        if(!newSetCategory) throw new ForbiddenException('Something went wrong...')

        return newSetCategory;
    }

    async getAllSetCategory() {
        const setCategories = await this.setCategoryModel.getAllSetCategory()
        return setCategories
    }

    async updateSetcategory(id: number, setcategory: string) {
        const updatedSetCategory = await this.setCategoryModel.updateSetcategory(id, setcategory)
        if(!updatedSetCategory) throw new ForbiddenException('Error: something went wrong')
        return updatedSetCategory
    }
}
