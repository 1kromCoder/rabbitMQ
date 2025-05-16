import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLogin } from './dto/user.login.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('createRegister')
  createRegister(@Payload() data: CreateUserDto) {
    return this.userService.createRegister(data);
  }

  @MessagePattern('createLogin')
  createLogin(@Payload() data: UserLogin) {
    return this.userService.createLogin(data);
  }
}
