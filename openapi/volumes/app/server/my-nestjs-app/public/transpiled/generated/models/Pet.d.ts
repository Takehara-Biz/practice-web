import type { Category } from './Category.js';
import type { Tag } from './Tag.js';
export interface Pet {
    id?: number;
    name: string;
    category?: Category;
    photoUrls: Array<string>;
    tags?: Array<Tag>;
    status?: PetStatusEnum;
}
export declare const PetStatusEnum: {
    readonly Available: 'available';
    readonly Pending: 'pending';
    readonly Sold: 'sold';
};
export type PetStatusEnum = typeof PetStatusEnum[keyof typeof PetStatusEnum];
export declare function instanceOfPet(value: object): value is Pet;
export declare function PetFromJSON(json: any): Pet;
export declare function PetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pet;
export declare function PetToJSON(json: any): Pet;
export declare function PetToJSONTyped(value?: Pet | null, ignoreDiscriminator?: boolean): any;
