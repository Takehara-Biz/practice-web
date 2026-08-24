import * as runtime from '../runtime.js';
import { type ModelApiResponse } from '../models/ModelApiResponse.js';
import { type Pet } from '../models/Pet.js';
export interface AddPetRequest {
    pet: Pet;
}
export interface DeletePetRequest {
    petId: number;
    apiKey?: string;
}
export interface FindPetsByStatusRequest {
    status?: FindPetsByStatusStatusEnum;
}
export interface FindPetsByTagsRequest {
    tags?: Array<string>;
}
export interface GetPetByIdRequest {
    petId: number;
}
export interface UpdatePetRequest {
    pet: Pet;
}
export interface UpdatePetWithFormRequest {
    petId: number;
    name?: string;
    status?: string;
}
export interface UploadFileRequest {
    petId: number;
    additionalMetadata?: string;
    body?: Blob;
}
export declare class PetApi extends runtime.BaseAPI {
    addPetRequestOpts(requestParameters: AddPetRequest): Promise<runtime.RequestOpts>;
    addPetRaw(requestParameters: AddPetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pet>>;
    addPet(requestParameters: AddPetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pet>;
    deletePetRequestOpts(requestParameters: DeletePetRequest): Promise<runtime.RequestOpts>;
    deletePetRaw(requestParameters: DeletePetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    deletePet(requestParameters: DeletePetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    findPetsByStatusRequestOpts(requestParameters: FindPetsByStatusRequest): Promise<runtime.RequestOpts>;
    findPetsByStatusRaw(requestParameters: FindPetsByStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Pet>>>;
    findPetsByStatus(requestParameters?: FindPetsByStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Pet>>;
    findPetsByTagsRequestOpts(requestParameters: FindPetsByTagsRequest): Promise<runtime.RequestOpts>;
    findPetsByTagsRaw(requestParameters: FindPetsByTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Pet>>>;
    findPetsByTags(requestParameters?: FindPetsByTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Pet>>;
    getPetByIdRequestOpts(requestParameters: GetPetByIdRequest): Promise<runtime.RequestOpts>;
    getPetByIdRaw(requestParameters: GetPetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pet>>;
    getPetById(requestParameters: GetPetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pet>;
    updatePetRequestOpts(requestParameters: UpdatePetRequest): Promise<runtime.RequestOpts>;
    updatePetRaw(requestParameters: UpdatePetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pet>>;
    updatePet(requestParameters: UpdatePetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pet>;
    updatePetWithFormRequestOpts(requestParameters: UpdatePetWithFormRequest): Promise<runtime.RequestOpts>;
    updatePetWithFormRaw(requestParameters: UpdatePetWithFormRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    updatePetWithForm(requestParameters: UpdatePetWithFormRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    uploadFileRequestOpts(requestParameters: UploadFileRequest): Promise<runtime.RequestOpts>;
    uploadFileRaw(requestParameters: UploadFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelApiResponse>>;
    uploadFile(requestParameters: UploadFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelApiResponse>;
}
export declare const FindPetsByStatusStatusEnum: {
    readonly Available: 'available';
    readonly Pending: 'pending';
    readonly Sold: 'sold';
};
export type FindPetsByStatusStatusEnum = typeof FindPetsByStatusStatusEnum[keyof typeof FindPetsByStatusStatusEnum];
