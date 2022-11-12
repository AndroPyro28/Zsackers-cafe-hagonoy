import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Roles } from 'src/common/decorators';
import { CreateProductDto, UpdateProduct } from './dto';
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

  @Put(':id')
  @Roles(['ADMIN'])
  @HttpCode(HttpStatus.OK)
  async archiveProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.archiveProductById(id);
  }

  @Patch(':id')
  @Roles(['ADMIN'])
  @HttpCode(HttpStatus.OK)
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProduct
  ) {
     return this.productService.updateProduct(id, body);
  }
}


