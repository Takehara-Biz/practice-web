export interface Tag {
    id?: number;
    name?: string;
}
export declare function instanceOfTag(value: object): value is Tag;
export declare function TagFromJSON(json: any): Tag;
export declare function TagFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tag;
export declare function TagToJSON(json: any): Tag;
export declare function TagToJSONTyped(value?: Tag | null, ignoreDiscriminator?: boolean): any;
