export function instanceOfCategory(value) {
    return true;
}
export function CategoryFromJSON(json) {
    return CategoryFromJSONTyped(json, false);
}
export function CategoryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
export function CategoryToJSON(json) {
    return CategoryToJSONTyped(json, false);
}
export function CategoryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
    };
}
//# sourceMappingURL=Category.js.map