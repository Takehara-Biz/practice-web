export interface User {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    userStatus?: number;
}
export declare function instanceOfUser(value: object): value is User;
export declare function UserFromJSON(json: any): User;
export declare function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User;
export declare function UserToJSON(json: any): User;
export declare function UserToJSONTyped(value?: User | null, ignoreDiscriminator?: boolean): any;
