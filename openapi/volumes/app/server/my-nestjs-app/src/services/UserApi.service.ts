import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserApi } from 'src/generated/api';
import { User } from 'src/generated/models';


@Injectable()
export class UserApiServiceImpl extends UserApi{
  createUser(user: User | undefined, request: Request): User | Promise<User> | Observable<User> {
    throw new Error('Method not implemented.');
  }
  createUsersWithListInput(user: Array<User> | undefined, request: Request): User | Promise<User> | Observable<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(username: string, request: Request): void | Promise<void> | Observable<void> {
    throw new Error('Method not implemented.');
  }
  getUserByName(username: string, request: Request): User | Promise<User> | Observable<User> {
    throw new Error('Method not implemented.');
  }
  loginUser(username: string | undefined, password: string | undefined, request: Request): string | Promise<string> | Observable<string> {
    throw new Error('Method not implemented.');
  }
  logoutUser(request: Request): void | Promise<void> | Observable<void> {
    throw new Error('Method not implemented.');
  }
  updateUser(username: string, user: User | undefined, request: Request): void | Promise<void> | Observable<void> {
    throw new Error('Method not implemented.');
  }


} 