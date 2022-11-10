import { IsNotEmpty, IsEmail, IsNumberString } from "class-validator"
import { Match } from "src/common/decorators";

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
    @Match('password', {
        message: 'password and password confirmation do not match'
    })
    confirmPassword: string;

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