export function instanceOfUser(value) {
    return true;
}
export function UserFromJSON(json) {
    return UserFromJSONTyped(json, false);
}
export function UserFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'username': json['username'] == null ? undefined : json['username'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'email': json['email'] == null ? undefined : json['email'],
        'password': json['password'] == null ? undefined : json['password'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'userStatus': json['userStatus'] == null ? undefined : json['userStatus'],
    };
}
export function UserToJSON(json) {
    return UserToJSONTyped(json, false);
}
export function UserToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'username': value['username'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'email': value['email'],
        'password': value['password'],
        'phone': value['phone'],
        'userStatus': value['userStatus'],
    };
}
//# sourceMappingURL=User.js.map