import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({  
      global: true,
      secret: 'oke',
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
