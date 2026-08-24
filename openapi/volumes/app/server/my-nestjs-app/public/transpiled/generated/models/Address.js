export function instanceOfAddress(value) {
    return true;
}
export function AddressFromJSON(json) {
    return AddressFromJSONTyped(json, false);
}
export function AddressFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'street': json['street'] == null ? undefined : json['street'],
        'city': json['city'] == null ? undefined : json['city'],
        'state': json['state'] == null ? undefined : json['state'],
        'zip': json['zip'] == null ? undefined : json['zip'],
    };
}
export function AddressToJSON(json) {
    return AddressToJSONTyped(json, false);
}
export function AddressToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'street': value['street'],
        'city': value['city'],
        'state': value['state'],
        'zip': value['zip'],
    };
}
//# sourceMappingURL=Address.js.map