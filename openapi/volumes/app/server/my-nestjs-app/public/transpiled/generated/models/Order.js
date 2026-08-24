import { parseDateTime, serializeDateTime } from '../runtime.js';
export const OrderStatusEnum = {
    Placed: 'placed',
    Approved: 'approved',
    Delivered: 'delivered',
};
export function instanceOfOrder(value) {
    return true;
}
export function OrderFromJSON(json) {
    return OrderFromJSONTyped(json, false);
}
export function OrderFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'petId': json['petId'] == null ? undefined : json['petId'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'shipDate': json['shipDate'] == null ? undefined : (parseDateTime(json['shipDate'])),
        'status': json['status'] == null ? undefined : json['status'],
        'complete': json['complete'] == null ? undefined : json['complete'],
    };
}
export function OrderToJSON(json) {
    return OrderToJSONTyped(json, false);
}
export function OrderToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'petId': value['petId'],
        'quantity': value['quantity'],
        'shipDate': value['shipDate'] == null ? value['shipDate'] : serializeDateTime(value['shipDate']),
        'status': value['status'],
        'complete': value['complete'],
    };
}
//# sourceMappingURL=Order.js.map