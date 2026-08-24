import { Body, Controller, DefaultValuePipe, Delete, Get, Post, Put, Param, ParseIntPipe, ParseFloatPipe, Query, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Cookies, Headers } from '../decorators';
import { UserApi } from '../api';
import { User,  } from '../models';

@Controller()
export class UserApiController {
  constructor(private readonly userApi: UserApi) {}

  @Post('/user')
  createUser(@Body() user: User | undefined, @Req() request: Request): User | Promise<User> | Observable<User> {
    return this.userApi.createUser(user, request);
  }

  @Post('/user/createWithList')
  createUsersWithListInput(@Body() user: Array<User> | undefined, @Req() request: Request): User | Promise<User> | Observable<User> {
    return this.userApi.createUsersWithListInput(user, request);
  }

  @Delete('/user/:username')
  deleteUser(@Param('username') username: string, @Req() request: Request): void | Promise<void> | Observable<void> {
    return this.userApi.deleteUser(username, request);
  }

  @Get('/user/:username')
  getUserByName(@Param('username') username: string, @Req() request: Request): User | Promise<User> | Observable<User> {
    return this.userApi.getUserByName(username, request);
  }

  @Get('/user/login')
  loginUser(@Query('username') username: string | undefined, @Query('password') password: string | undefined, @Req() request: Request): string | Promise<string> | Observable<string> {
    return this.userApi.loginUser(username, password, request);
  }

  @Get('/user/logout')
  logoutUser(@Req() request: Request): void | Promise<void> | Observable<void> {
    return this.userApi.logoutUser(request);
  }

  @Put('/user/:username')
  updateUser(@Param('username') username: string, @Body() user: User | undefined, @Req() request: Request): void | Promise<void> | Observable<void> {
    return this.userApi.updateUser(username, user, request);
  }

} 