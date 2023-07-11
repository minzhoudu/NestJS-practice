// import { plainToInstance } from 'class-transformer';
import { SerializedUser, User } from './../types/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: Array<User> = [
    {
      username: 'john',
      password: '12345',
    },
    {
      username: 'pavle',
      password: '12345',
    },
    {
      username: 'pera',
      password: '12345',
    },
  ];

  getUsers(): Array<User> {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
