import { ForbiddenException, Injectable } from '@nestjs/common';
import {User} from 'src/models/';
import { SigninDto, SignupDto } from './dto/auth.dto';
import * as argon from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './types';
@Injectable()
export class AuthService {

    constructor(
        private readonly userModel: User,
        private readonly jwtService: JwtService
        ) {}

    async signup(body: SignupDto) {
        const hashPw = await argon.hash(body.password);
        body.password = hashPw
        const newUser = await this.userModel.createUser(body);

        if(!newUser) throw new ForbiddenException('Email already exist');

        return {
            success: true
        }
    }

    async signin(body: SigninDto) {
        const user = await this.userModel.findUserByEmail(body.email);

        if(!user) throw new ForbiddenException('Invalid Credentials');
        const isMatched = await argon.verify(user.password, body.password);

        if(!isMatched) throw new ForbiddenException('Invalid Credentials');

        const access_token = await this.signToken({id: user.id, email: user.email});
        return {
            access_token,
            role: user.role.toLocaleLowerCase()
        }
    }

    async signToken({id, email}: TokenPayload) {
        return this.jwtService.sign({id, email}, {
            secret: process.env.JWT_ACCESS_TOKEN,
            expiresIn: '1d'
        });
    }
}
