import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/product/dto/product.dto';
import { product } from './root.model';
import { Product as ProductModel } from '@prisma/client';

@Injectable()
export class Product {
  async createProduct(body: CreateProductDto) {
    try {
      const newProduct = await product.create({
        data: {
          productName: body.productName,
          price: body.productPrice + '',
          image_url: body.image_url,
          stock: body.productStock,
          image_id: body.image_id,
          categoryId: Number(body.categoryId),
          subcategoryId: Number(body.subcategoryId),
          setcategoryId: Number(body.setcategoryId),
        },
      });
      return newProduct;
    } catch (error) {
      console.error(error);
    }
  }

  async getAllProducts(search: search): Promise<ProductModel[]> {
    try {
      const arr = [
        search.productName !== "" && {
         productName: {
          startsWith: search.productName
         }
        },
        search.categoryId !== 0 && {
         categoryId: search.categoryId
        },
        search.subcategoryId !== 0 && {
         subcategoryId: search.subcategoryId
        },
        search.setcategoryId !== 0 && {
          setcategoryId: search.setcategoryId
        },
       ];
      const conditionArr = arr.filter(value => typeof value === 'object')
      const products = await product.findMany({
        where: {
          AND: conditionArr
        },
        include: {
          set_category: true,
          category: true,
          sub_category: true,
        },
      });
      return products;
    } catch (error) {
      console.error(error);
    }
  }
}
