import { Injectable } from "@nestjs/common";
import { CreateSubcategoryDto } from "src/subcategory/dto";
import { sub_Category } from "./root.model";
@Injectable()

export class Subcategory {

    async createSubcategory(body:CreateSubcategoryDto) {
        try {
            const newSubcategory = await sub_Category.create({
                data: {
                    name: body.subcategory,
                    // price: body.price,
                    categoryId: body.categoryId
                }
            })
            return newSubcategory;
        } catch (error) {
            console.error(error)
        }
    }

    async getAllSubcategories() {
        try {
            const subCategories = await sub_Category.findMany()
            return subCategories;
        } catch (error) {
            console.error(error)
        }
    }
}