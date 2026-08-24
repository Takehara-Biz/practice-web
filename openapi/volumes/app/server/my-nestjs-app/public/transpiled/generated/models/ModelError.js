export function instanceOfModelError(value) {
    if (!('code' in value) || value['code'] === undefined)
        return false;
    if (!('message' in value) || value['message'] === undefined)
        return false;
    return true;
}
export function ModelErrorFromJSON(json) {
    return ModelErrorFromJSONTyped(json, false);
}
export function ModelErrorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'code': json['code'],
        'message': json['message'],
    };
}
export function ModelErrorToJSON(json) {
    return ModelErrorToJSONTyped(json, false);
}
export function ModelErrorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'code': value['code'],
        'message': value['message'],
    };
}
//# sourceMappingURL=ModelError.js.map