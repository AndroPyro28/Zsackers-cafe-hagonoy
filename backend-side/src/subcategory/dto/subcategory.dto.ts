import { IsNotEmpty, IsNumber, IsNumberString, Min, MinLength } from "class-validator";

export class CreateSubcategoryDto {
    @IsNotEmpty()
    @MinLength(3, {message: 'subcategory must be atleast 3 characters'})
    subcategory: string;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number
}

export class UpdateSubCategoryDto {
    @IsNotEmpty()
    @MinLength(3, {message: 'subcategory must be atleast 3 characters'})
    subcategory: string;

    @IsNotEmpty()
    @IsNumber()
    id: number
}
