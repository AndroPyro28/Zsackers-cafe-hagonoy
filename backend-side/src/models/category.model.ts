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
                select: {
                    id : true,
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                    sub_category: {
                        select: {
                            id: true,
                            name: true,
                            // price: true,
                            createdAt: true,
                            updatedAt: true,
                        }
                    }
                },
                orderBy: [{
                    createdAt: 'desc'
                }]
            })
            console.log(categories);

            return categories;
        } catch (error) {
            console.error(error)
        }
    }
}