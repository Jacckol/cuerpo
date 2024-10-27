import { Injectable } from "@nestjs/common"; 
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()  // Sin paréntesis aquí
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "MI_CODIGO_SECRETO",  // Define aquí tu clave secreta
        });
    }

    async validate(payload: any) {
        // Corregido: el objeto retornado debe tener un ':' en lugar de '.'
        return { 
            email: payload.email, 
            id: payload.id 
        };
    }
}