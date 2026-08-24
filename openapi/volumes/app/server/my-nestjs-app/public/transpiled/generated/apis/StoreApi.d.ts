import * as runtime from '../runtime.js';
import { type Order } from '../models/Order.js';
export interface DeleteOrderRequest {
    orderId: number;
}
export interface GetOrderByIdRequest {
    orderId: number;
}
export interface PlaceOrderRequest {
    order?: Order;
}
export declare class StoreApi extends runtime.BaseAPI {
    deleteOrderRequestOpts(requestParameters: DeleteOrderRequest): Promise<runtime.RequestOpts>;
    deleteOrderRaw(requestParameters: DeleteOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    deleteOrder(requestParameters: DeleteOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    getInventoryRequestOpts(): Promise<runtime.RequestOpts>;
    getInventoryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{
        [key: string]: number;
    }>>;
    getInventory(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{
        [key: string]: number;
    }>;
    getOrderByIdRequestOpts(requestParameters: GetOrderByIdRequest): Promise<runtime.RequestOpts>;
    getOrderByIdRaw(requestParameters: GetOrderByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Order>>;
    getOrderById(requestParameters: GetOrderByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Order>;
    placeOrderRequestOpts(requestParameters: PlaceOrderRequest): Promise<runtime.RequestOpts>;
    placeOrderRaw(requestParameters: PlaceOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Order>>;
    placeOrder(requestParameters?: PlaceOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Order>;
}
