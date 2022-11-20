import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    productName:string;

    @IsNotEmpty()
    productPrice:number;

    @IsNotEmpty()
    productStock:number;

    @IsNotEmpty()
    @IsNumberString()
    categoryId: string;

    @IsNotEmpty()
    @IsNumberString()
    subcategoryId: string;

    @IsOptional()
    @IsString()
    details: string;

    @IsNotEmpty()
    @IsNumberString()
    setcategoryId: string;

    @IsNotEmpty()
    image: string;

    @IsOptional()
    image_url: string;
    @IsOptional()
    image_id: string;
}

export class UpdateProduct {
    @IsNotEmpty()
    @IsString()
    productName: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    stock: number;

    @IsOptional()
    @IsString()
    details: string;

    @IsString()
    @IsNotEmpty()
    image_url: string;

    @IsString()
    @IsNotEmpty()
    image_id:string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;

    @IsNumber()
    @IsNotEmpty()
    subcategoryId: number;

    @IsNumber()
    @IsNotEmpty()
    setcategoryId: number;
}