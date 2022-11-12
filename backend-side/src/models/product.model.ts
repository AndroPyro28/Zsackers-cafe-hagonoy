import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/product.dto';
import {product} from './root.model'
import {Product as ProductModel} from "@prisma/client"

@Injectable()
export class Product {
    async createProduct(body: CreateProductDto) {
        try {
            const newProduct = await product.create({
                data: {
                    productName: body.productName,
                    price: body.productPrice + '',
                    image_url: body.image_url,
                    image_id: body.image_id,
                    categoryId: Number(body.categoryId),
                    subcategoryId: Number(body.subcategoryId),
                    setcategoryId: Number(body.setcategoryId)
                }
            })
            return newProduct;
        } catch (error) {
            console.error(error)
        }
    }

    async getAllProducts(): Promise<ProductModel[]> {
        try {
            const products = await product.findMany({})
            return products;

        } catch (error) {
            console.error(error)
        }
    }
}