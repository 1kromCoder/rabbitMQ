import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
  @ApiProperty()
  name?: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  password?: string;
}
