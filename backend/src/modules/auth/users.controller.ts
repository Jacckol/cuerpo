import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common"; 
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller('Users')
export class UsersController {
    // Falta cerrar con {}
    constructor(private readonly usersService: UsersService) {}

    @Post()  // Aquí debe ser Post() con P mayúscula
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.usersService.findAll();
    }
}
