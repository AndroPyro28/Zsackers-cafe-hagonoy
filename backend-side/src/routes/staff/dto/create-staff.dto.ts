import { IsEmail, IsNotEmpty, IsNumberString } from "class-validator";
import { Match } from "src/common/decorators";

export class CreateStaffDto {

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
