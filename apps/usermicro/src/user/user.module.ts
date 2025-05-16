import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'apps/prisma/prisma.module';

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
