import type { Address } from './Address.js';
export interface Customer {
    id?: number;
    username?: string;
    address?: Array<Address>;
}
export declare function instanceOfCustomer(value: object): value is Customer;
export declare function CustomerFromJSON(json: any): Customer;
export declare function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer;
export declare function CustomerToJSON(json: any): Customer;
export declare function CustomerToJSONTyped(value?: Customer | null, ignoreDiscriminator?: boolean): any;
