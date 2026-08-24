import { CategoryFromJSON, CategoryToJSON, } from './Category.js';
import { TagFromJSON, TagToJSON, } from './Tag.js';
export const PetStatusEnum = {
    Available: 'available',
    Pending: 'pending',
    Sold: 'sold',
};
export function instanceOfPet(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('photoUrls' in value) || value['photoUrls'] === undefined)
        return false;
    return true;
}
export function PetFromJSON(json) {
    return PetFromJSONTyped(json, false);
}
export function PetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'category': json['category'] == null ? undefined : CategoryFromJSON(json['category']),
        'photoUrls': json['photoUrls'],
        'tags': json['tags'] == null ? undefined : (json['tags'].map(TagFromJSON)),
        'status': json['status'] == null ? undefined : json['status'],
    };
}
export function PetToJSON(json) {
    return PetToJSONTyped(json, false);
}
export function PetToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'category': CategoryToJSON(value['category']),
        'photoUrls': value['photoUrls'],
        'tags': value['tags'] == null ? undefined : (value['tags'].map(TagToJSON)),
        'status': value['status'],
    };
}
//# sourceMappingURL=Pet.js.map