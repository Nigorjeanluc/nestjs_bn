import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Igor', email: 'nigorjeanluc@gmail.com' },
    { username: 'Igor1', email: 'nigorjeanluc1@gmail.com' },
    { username: 'Igor2', email: 'nigorjeanluc2@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return {
      id,
      username: 'Nigor',
      email: 'example@web.com',
    };
  }
}
