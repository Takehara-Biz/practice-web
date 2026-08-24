export interface ModelApiResponse {
    code?: number;
    type?: string;
    message?: string;
}
export declare function instanceOfModelApiResponse(value: object): value is ModelApiResponse;
export declare function ModelApiResponseFromJSON(json: any): ModelApiResponse;
export declare function ModelApiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelApiResponse;
export declare function ModelApiResponseToJSON(json: any): ModelApiResponse;
export declare function ModelApiResponseToJSONTyped(value?: ModelApiResponse | null, ignoreDiscriminator?: boolean): any;
