export function instanceOfTag(value) {
    return true;
}
export function TagFromJSON(json) {
    return TagFromJSONTyped(json, false);
}
export function TagFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
export function TagToJSON(json) {
    return TagToJSONTyped(json, false);
}
export function TagToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
    };
}
//# sourceMappingURL=Tag.js.map