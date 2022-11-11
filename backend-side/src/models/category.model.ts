import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "src/category/dto";
import { category } from "./root.model";
@Injectable()

export class Category {

    async createCategory(body:CreateCategoryDto) {
        try {
            const newCategory = await category.create({
                data: {
                    name: body.category
                }
            })
            return newCategory;
        } catch (error) {
            console.error(error)
        }
    }

    async getAllCategories(search:string) {
        try {
            const categories = await category.findMany({
                where: {
                    name: {
                        contains: search
                    }
                },
                include: {
                    sub_category: {
                        include: {
                            set_category: true
                        },
                        orderBy: [{
                            createdAt: 'desc'
                        }]
                    },
                },
                orderBy: [{
                    createdAt: 'desc'
                }]
            })
            return categories;
        } catch (error) {
            console.error(error)
        }
    }
}