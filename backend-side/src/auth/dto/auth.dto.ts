import { IsNotEmpty, IsEmail, IsNumberString } from "class-validator"

type ROLE = "ADMIN" | "STAFF" | "CUSTOMER"
export class SignupDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsNumberString()
    contact:string;

    @IsNotEmpty()
    address: string;
}

export class SigninDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}