import { Body, Controller, Get, HttpCode, HttpStatus, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Roles } from 'src/common/decorators';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    /**
     *
     */
    constructor(private readonly productService: ProductService) {}

    @Post()
    @Roles(['ADMIN'])
    @HttpCode(HttpStatus.CREATED)
    async createProduct(@Body() body: CreateProductDto) {
        return this.productService.createProduct(body);
    }

    @Get()
    @Roles(['ADMIN'])
    @HttpCode(HttpStatus.OK)
    async getAllProducts(
        @Query('name') productName: string,
        @Query('categoryId', ParseIntPipe) categoryId: Number,
        @Query('setcategoryId', ParseIntPipe) setcategoryId: Number,
        @Query('subcategoryId', ParseIntPipe) subcategoryId: Number
    ) {
        console.log({
            productName,
            categoryId,
            setcategoryId,
            subcategoryId,
        })
        return this.productService.getAllProducts();
    }
}
