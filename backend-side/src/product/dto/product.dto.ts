import { IsNotEmpty, IsNumberString, IsOptional } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    productName:string;

    @IsNotEmpty()
    productPrice:string;

    @IsNotEmpty()
    productStock:number;

    @IsNotEmpty()
    @IsNumberString()
    categoryId: string;

    @IsNotEmpty()
    @IsNumberString()
    subcategoryId: string;

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