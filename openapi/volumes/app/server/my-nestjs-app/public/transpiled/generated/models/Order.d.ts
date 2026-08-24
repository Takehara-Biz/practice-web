export interface Order {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: Date;
    status?: OrderStatusEnum;
    complete?: boolean;
}
export declare const OrderStatusEnum: {
    readonly Placed: 'placed';
    readonly Approved: 'approved';
    readonly Delivered: 'delivered';
};
export type OrderStatusEnum = typeof OrderStatusEnum[keyof typeof OrderStatusEnum];
export declare function instanceOfOrder(value: object): value is Order;
export declare function OrderFromJSON(json: any): Order;
export declare function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order;
export declare function OrderToJSON(json: any): Order;
export declare function OrderToJSONTyped(value?: Order | null, ignoreDiscriminator?: boolean): any;
