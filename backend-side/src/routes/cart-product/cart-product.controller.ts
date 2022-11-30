import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { GetCurrentUser, Roles } from 'src/common/decorators';
import { CartProductService } from './cart-product.service';

@Controller('cart-products')
export class CartProductController {

    /**
     *
     */
    constructor(private readonly cartProduct: CartProductService) {}

    @Post()
    @Roles(['CUSTOMER'])
    @HttpCode(HttpStatus.CREATED)
    async addToCart(
        @Body('productId', ParseIntPipe) productId: number,
        @GetCurrentUser('id') userId: number
    ) {
        return this.cartProduct.addToCart(productId, userId);
    }

    @Get()
    @Roles(['CUSTOMER'])
    @HttpCode(HttpStatus.CREATED)
    async getCartProducts(@GetCurrentUser('id') userId: number) {
        return this.cartProduct.getCartProducts(userId);
    }

    @Patch(':id')
    @Roles(['CUSTOMER'])
    @HttpCode(HttpStatus.CREATED)
    async updateCartQuantity(
            @GetCurrentUser('id', ParseIntPipe) userId: number,
            @Body('action') action: string,
            @Param('id', ParseIntPipe) productId: number
        ) {
        return this.cartProduct.updateCartQuantity(productId, userId, action);
    }

}
