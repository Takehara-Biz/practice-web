import * as runtime from '../runtime.js';
import { UserFromJSON, UserToJSON, } from '../models/User.js';
export class UserApi extends runtime.BaseAPI {
    async createUserRequestOpts(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/user`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters['user']),
        };
    }
    async createUserRaw(requestParameters, initOverrides) {
        const requestOptions = await this.createUserRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }
    async createUser(requestParameters = {}, initOverrides) {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async createUsersWithListInputRequestOpts(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/user/createWithList`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['user'].map(UserToJSON),
        };
    }
    async createUsersWithListInputRaw(requestParameters, initOverrides) {
        const requestOptions = await this.createUsersWithListInputRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }
    async createUsersWithListInput(requestParameters = {}, initOverrides) {
        const response = await this.createUsersWithListInputRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async deleteUserRequestOpts(requestParameters) {
        if (requestParameters['username'] == null) {
            throw new runtime.RequiredError('username', 'Required parameter "username" was null or undefined when calling deleteUser().');
        }
        const queryParameters = {};
        const headerParameters = {};
        let urlPath = `/user/{username}`;
        urlPath = urlPath.replace('{username}', encodeURIComponent(String(requestParameters['username'])));
        return {
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async deleteUserRaw(requestParameters, initOverrides) {
        const requestOptions = await this.deleteUserRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async deleteUser(requestParameters, initOverrides) {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }
    async getUserByNameRequestOpts(requestParameters) {
        if (requestParameters['username'] == null) {
            throw new runtime.RequiredError('username', 'Required parameter "username" was null or undefined when calling getUserByName().');
        }
        const queryParameters = {};
        const headerParameters = {};
        let urlPath = `/user/{username}`;
        urlPath = urlPath.replace('{username}', encodeURIComponent(String(requestParameters['username'])));
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async getUserByNameRaw(requestParameters, initOverrides) {
        const requestOptions = await this.getUserByNameRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }
    async getUserByName(requestParameters, initOverrides) {
        const response = await this.getUserByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async loginUserRequestOpts(requestParameters) {
        const queryParameters = {};
        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }
        if (requestParameters['password'] != null) {
            queryParameters['password'] = requestParameters['password'];
        }
        const headerParameters = {};
        let urlPath = `/user/login`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async loginUserRaw(requestParameters, initOverrides) {
        const requestOptions = await this.loginUserRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse(response);
        }
        else {
            return new runtime.TextApiResponse(response);
        }
    }
    async loginUser(requestParameters = {}, initOverrides) {
        const response = await this.loginUserRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async logoutUserRequestOpts() {
        const queryParameters = {};
        const headerParameters = {};
        let urlPath = `/user/logout`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async logoutUserRaw(initOverrides) {
        const requestOptions = await this.logoutUserRequestOpts();
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async logoutUser(initOverrides) {
        await this.logoutUserRaw(initOverrides);
    }
    async updateUserRequestOpts(requestParameters) {
        if (requestParameters['username'] == null) {
            throw new runtime.RequiredError('username', 'Required parameter "username" was null or undefined when calling updateUser().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/user/{username}`;
        urlPath = urlPath.replace('{username}', encodeURIComponent(String(requestParameters['username'])));
        return {
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters['user']),
        };
    }
    async updateUserRaw(requestParameters, initOverrides) {
        const requestOptions = await this.updateUserRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async updateUser(requestParameters, initOverrides) {
        await this.updateUserRaw(requestParameters, initOverrides);
    }
}
//# sourceMappingURL=UserApi.js.map