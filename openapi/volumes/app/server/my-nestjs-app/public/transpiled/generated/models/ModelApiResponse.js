export function instanceOfModelApiResponse(value) {
    return true;
}
export function ModelApiResponseFromJSON(json) {
    return ModelApiResponseFromJSONTyped(json, false);
}
export function ModelApiResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'code': json['code'] == null ? undefined : json['code'],
        'type': json['type'] == null ? undefined : json['type'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}
export function ModelApiResponseToJSON(json) {
    return ModelApiResponseToJSONTyped(json, false);
}
export function ModelApiResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'code': value['code'],
        'type': value['type'],
        'message': value['message'],
    };
}
//# sourceMappingURL=ModelApiResponse.js.map