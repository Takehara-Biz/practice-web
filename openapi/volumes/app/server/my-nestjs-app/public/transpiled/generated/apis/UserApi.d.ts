import * as runtime from '../runtime.js';
import { type User } from '../models/User.js';
export interface CreateUserRequest {
    user?: User;
}
export interface CreateUsersWithListInputRequest {
    user?: Array<User>;
}
export interface DeleteUserRequest {
    username: string;
}
export interface GetUserByNameRequest {
    username: string;
}
export interface LoginUserRequest {
    username?: string;
    password?: string;
}
export interface UpdateUserRequest {
    username: string;
    user?: User;
}
export declare class UserApi extends runtime.BaseAPI {
    createUserRequestOpts(requestParameters: CreateUserRequest): Promise<runtime.RequestOpts>;
    createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    createUser(requestParameters?: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    createUsersWithListInputRequestOpts(requestParameters: CreateUsersWithListInputRequest): Promise<runtime.RequestOpts>;
    createUsersWithListInputRaw(requestParameters: CreateUsersWithListInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    createUsersWithListInput(requestParameters?: CreateUsersWithListInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    deleteUserRequestOpts(requestParameters: DeleteUserRequest): Promise<runtime.RequestOpts>;
    deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    getUserByNameRequestOpts(requestParameters: GetUserByNameRequest): Promise<runtime.RequestOpts>;
    getUserByNameRaw(requestParameters: GetUserByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    getUserByName(requestParameters: GetUserByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    loginUserRequestOpts(requestParameters: LoginUserRequest): Promise<runtime.RequestOpts>;
    loginUserRaw(requestParameters: LoginUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    loginUser(requestParameters?: LoginUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    logoutUserRequestOpts(): Promise<runtime.RequestOpts>;
    logoutUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    logoutUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    updateUserRequestOpts(requestParameters: UpdateUserRequest): Promise<runtime.RequestOpts>;
    updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
