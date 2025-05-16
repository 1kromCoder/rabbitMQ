import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserLogin } from './dto/user.login.dto';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}
  async createRegister(data: CreateUserDto) {
    try {
      let user = await this.prisma.user.findFirst({
        where: { email: data.email },
      });
      if (user) {
        return { message: 'User already exists' };
      }
      let hash = bcrypt.hashSync(data.password, 10);
      let newUser = await this.prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hash,
        },
      });
      return newUser;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createLogin(data: UserLogin) {
    try {
      let user = await this.prisma.user.findFirst({
        where: { name: data.name },
      });
      if (!user) {
        return { message: 'user not found' };
      }
      let match = bcrypt.compareSync(data.password, user.password);
      if (!match) {
        return { message: 'Wrong password' };
      }

      let token = this.jwt.sign({ id: user.id });
      return { token };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }
}
