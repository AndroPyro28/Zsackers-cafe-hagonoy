import { Injectable } from "@nestjs/common";
import { createSetCategoryDto } from "src/routes/setcategory/dto";
import { set_Category } from "./root.model";
@Injectable()

export class SetCategory {
    async createSetCategory(body:createSetCategoryDto) {
        try {
            const newSetCategory = await set_Category.create({
                data: {
                    name: body.setcategory,
                    subcategoryId: body.subcategoryId
                }
            })
            return newSetCategory;
        } catch (error) {
            console.error(error)
        }
    }

    async getAllSetCategory() {
        try {
            const setCategories = await set_Category.findMany()
            return setCategories;
        } catch (error) {
            console.error(error)
        }
    }

    async updateSetcategory(id: number, setcategory: string) {
        try {
            const updatedSetCategory = await set_Category.update({
                where: {
                    id
                },
                data: {
                    name: setcategory
                }
            })
            return updatedSetCategory;
        } catch (error) {
            console.error(error)
        }
    }
}