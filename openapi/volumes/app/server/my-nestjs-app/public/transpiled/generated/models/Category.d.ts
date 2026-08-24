export interface Category {
    id?: number;
    name?: string;
}
export declare function instanceOfCategory(value: object): value is Category;
export declare function CategoryFromJSON(json: any): Category;
export declare function CategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Category;
export declare function CategoryToJSON(json: any): Category;
export declare function CategoryToJSONTyped(value?: Category | null, ignoreDiscriminator?: boolean): any;
