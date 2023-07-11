import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { SerializedUser } from '../types/User';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  findUserByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return new SerializedUser(user);
  }
}
