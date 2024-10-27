import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AuthController } from './modules/auth/auth.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
