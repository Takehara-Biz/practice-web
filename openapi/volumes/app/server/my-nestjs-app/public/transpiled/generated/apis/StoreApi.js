import * as runtime from '../runtime.js';
import { OrderFromJSON, OrderToJSON, } from '../models/Order.js';
export class StoreApi extends runtime.BaseAPI {
    async deleteOrderRequestOpts(requestParameters) {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError('orderId', 'Required parameter "orderId" was null or undefined when calling deleteOrder().');
        }
        const queryParameters = {};
        const headerParameters = {};
        let urlPath = `/store/order/{orderId}`;
        urlPath = urlPath.replace('{orderId}', encodeURIComponent(String(requestParameters['orderId'])));
        return {
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async deleteOrderRaw(requestParameters, initOverrides) {
        const requestOptions = await this.deleteOrderRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async deleteOrder(requestParameters, initOverrides) {
        await this.deleteOrderRaw(requestParameters, initOverrides);
    }
    async getInventoryRequestOpts() {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = await this.configuration.apiKey("api_key");
        }
        let urlPath = `/store/inventory`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async getInventoryRaw(initOverrides) {
        const requestOptions = await this.getInventoryRequestOpts();
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response);
    }
    async getInventory(initOverrides) {
        const response = await this.getInventoryRaw(initOverrides);
        return await response.value();
    }
    async getOrderByIdRequestOpts(requestParameters) {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError('orderId', 'Required parameter "orderId" was null or undefined when calling getOrderById().');
        }
        const queryParameters = {};
        const headerParameters = {};
        let urlPath = `/store/order/{orderId}`;
        urlPath = urlPath.replace('{orderId}', encodeURIComponent(String(requestParameters['orderId'])));
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async getOrderByIdRaw(requestParameters, initOverrides) {
        const requestOptions = await this.getOrderByIdRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }
    async getOrderById(requestParameters, initOverrides) {
        const response = await this.getOrderByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async placeOrderRequestOpts(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/store/order`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrderToJSON(requestParameters['order']),
        };
    }
    async placeOrderRaw(requestParameters, initOverrides) {
        const requestOptions = await this.placeOrderRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }
    async placeOrder(requestParameters = {}, initOverrides) {
        const response = await this.placeOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
//# sourceMappingURL=StoreApi.js.map