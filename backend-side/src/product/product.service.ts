import { ForbiddenException, Injectable } from '@nestjs/common';
import { Cloudinary } from 'src/common/utils/cloudinary.utils';
import { Product } from 'src/models';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    // zsackers_product_image upload preset

    /**
     *
     */
    constructor(private readonly cloudinary: Cloudinary, private readonly productModel: Product) {}

    async createProduct(body: CreateProductDto) {
        
        const {secure_url, public_id} = await this.cloudinary.cloudinaryUpload(body.image, 'zsackers_product_image')

        const imageInfo = {
            image_url: secure_url,
            image_id: public_id
        }

        body = {...body, ...imageInfo};
        const newProduct = await this.productModel.createProduct(body);

        if(!newProduct) throw new ForbiddenException('something went wrong...');

        return newProduct;
    }

    async getAllProducts() {
        const products = await this.productModel.getAllProducts();
        return products;
    }

}
