import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'blaName' }];

  findAll(): User[] {
    return this.users;
  }

  findById(userId: number) {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDtp: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDtp };
    this.users.push(newUser);

    return newUser;
  }
}
