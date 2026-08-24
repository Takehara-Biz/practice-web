import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User,  } from '../models';


@Injectable()
export abstract class UserApi {

  abstract createUser(user: User | undefined,  request: Request): User | Promise<User> | Observable<User>;


  abstract createUsersWithListInput(user: Array<User> | undefined,  request: Request): User | Promise<User> | Observable<User>;


  abstract deleteUser(username: string,  request: Request): void | Promise<void> | Observable<void>;


  abstract getUserByName(username: string,  request: Request): User | Promise<User> | Observable<User>;


  abstract loginUser(username: string | undefined, password: string | undefined,  request: Request): string | Promise<string> | Observable<string>;


  abstract logoutUser( request: Request): void | Promise<void> | Observable<void>;


  abstract updateUser(username: string, user: User | undefined,  request: Request): void | Promise<void> | Observable<void>;

} 