import { IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class createSetCategoryDto {
    @IsNotEmpty()
    @MinLength(3, {message: 'Setcategory must be atleast 3 characters'})
    setcategory: string;

    @IsNotEmpty()
    @IsNumber()
    subcategoryId: number
}

