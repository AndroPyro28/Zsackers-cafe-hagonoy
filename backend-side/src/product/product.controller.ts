import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
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
    @Query('categoryId', ParseIntPipe) categoryId: number,
    @Query('setcategoryId', ParseIntPipe) setcategoryId: number,
    @Query('subcategoryId', ParseIntPipe) subcategoryId: number,
  ) {
    return this.productService.getAllProducts({
      productName,
      categoryId,
      setcategoryId,
      subcategoryId,
    });
  }
}
