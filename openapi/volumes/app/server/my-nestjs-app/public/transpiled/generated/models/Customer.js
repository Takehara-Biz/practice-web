import { AddressFromJSON, AddressToJSON, } from './Address.js';
export function instanceOfCustomer(value) {
    return true;
}
export function CustomerFromJSON(json) {
    return CustomerFromJSONTyped(json, false);
}
export function CustomerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'username': json['username'] == null ? undefined : json['username'],
        'address': json['address'] == null ? undefined : (json['address'].map(AddressFromJSON)),
    };
}
export function CustomerToJSON(json) {
    return CustomerToJSONTyped(json, false);
}
export function CustomerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'username': value['username'],
        'address': value['address'] == null ? undefined : (value['address'].map(AddressToJSON)),
    };
}
//# sourceMappingURL=Customer.js.map