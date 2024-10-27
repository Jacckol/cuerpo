import {User} from"../interfaces/user.interface";
import { IsEmail, IsNotEmpty, isNotEmpty, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto implements User{

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(6)
    @MinLength(6)
    @IsNotEmpty()
    email: string;
    password: string;
    name: string;
    
}