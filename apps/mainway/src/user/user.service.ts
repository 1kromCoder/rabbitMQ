import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { UserLogin } from 'apps/usermicro/src/user/dto/user.login.dto';

@Injectable()
export class UserService {
  constructor(@Inject('USERS') private readonly users: ClientProxy) {}
  register(createUserDto: CreateUserDto) {
    return this.users.send('createRegister', createUserDto);
  }
  login(createUserDto: UserLogin) {
    return this.users.send('createLogin', createUserDto);
  }
}
