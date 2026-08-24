import * as runtime from '../runtime.js';
import { ModelApiResponseFromJSON, } from '../models/ModelApiResponse.js';
import { PetFromJSON, PetToJSON, } from '../models/Pet.js';
export class PetApi extends runtime.BaseAPI {
    async addPetRequestOpts(requestParameters) {
        if (requestParameters['pet'] == null) {
            throw new runtime.RequiredError('pet', 'Required parameter "pet" was null or undefined when calling addPet().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }
        let urlPath = `/pet`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PetToJSON(requestParameters['pet']),
        };
    }
    async addPetRaw(requestParameters, initOverrides) {
        const requestOptions = await this.addPetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => PetFromJSON(jsonValue));
    }
    async addPet(requestParameters, initOverrides) {
        const response = await this.addPetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async deletePetRequestOpts(requestParameters) {
        if (requestParameters['petId'] == null) {
            throw new runtime.RequiredError('petId', 'Required parameter "petId" was null or undefined when calling deletePet().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (requestParameters['apiKey'] != null) {
            headerParameters['api_key'] = String(requestParameters['apiKey']);
        }
        if (this.configuration && this.configuration.accessToken) {
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }
        let urlPath = `/pet/{petId}`;
        urlPath = urlPath.replace('{petId}', encodeURIComponent(String(requestParameters['petId'])));
        return {
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async deletePetRaw(requestParameters, initOverrides) {
        const requestOptions = await this.deletePetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async deletePet(requestParameters, initOverrides) {
        await this.deletePetRaw(requestParameters, initOverrides);
    }
    async findPetsByStatusRequestOpts(requestParameters) {
        const queryParameters = {};
        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }
        let urlPath = `/pet/findByStatus`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async findPetsByStatusRaw(requestParameters, initOverrides) {
        const requestOptions = await this.findPetsByStatusRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PetFromJSON));
    }
    async findPetsByStatus(requestParameters = {}, initOverrides) {
        const response = await this.findPetsByStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async findPetsByTagsRequestOpts(requestParameters) {
        const queryParameters = {};
        if (requestParameters['tags'] != null) {
            queryParameters['tags'] = requestParameters['tags'];
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }
        let urlPath = `/pet/findByTags`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async findPetsByTagsRaw(requestParameters, initOverrides) {
        const requestOptions = await this.findPetsByTagsRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PetFromJSON));
    }
    async findPetsByTags(requestParameters = {}, initOverrides) {
        const response = await this.findPetsByTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async getPetByIdRequestOpts(requestParameters) {
        if (requestParameters['petId'] == null) {
            throw new runtime.RequiredError('petId', 'Required parameter "petId" was null or undefined when calling getPetById().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = await this.configuration.apiKey("api_key");
        }
        let urlPath = `/pet/{petId}`;
        urlPath = urlPath.replace('{petId}', encodeURIComponent(String(requestParameters['petId'])));
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async getPetByIdRaw(requestParameters, initOverrides) {
        const requestOptions = await this.getPetByIdRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => PetFromJSON(jsonValue));
    }
    async getPetById(requestParameters, initOverrides) {
        const response = await this.getPetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async updatePetRequestOpts(requestParameters) {
        if (requestParameters['pet'] == null) {
            throw new runtime.RequiredError('pet', 'Required parameter "pet" was null or undefined when calling updatePet().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }
        let urlPath = `/pet`;
        return {
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PetToJSON(requestParameters['pet']),
        };
    }
    async updatePetRaw(requestParameters, initOverrides) {
        const requestOptions = await this.updatePetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => PetFromJSON(jsonValue));
    }
    async updatePet(requestParameters, initOverrides) {
        const response = await this.updatePetRaw(requestParameters, initOverrides);
        return await response.value();
    }
    async updatePetWithFormRequestOpts(requestParameters) {
        if (requestParameters['petId'] == null) {
            throw new runtime.RequiredError('petId', 'Required parameter "petId" was null or undefined when calling updatePetWithForm().');
        }
        const queryParameters = {};
        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }
        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }
        let urlPath = `/pet/{petId}`;
        urlPath = urlPath.replace('{petId}', encodeURIComponent(String(requestParameters['petId'])));
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async updatePetWithFormRaw(requestParameters, initOverrides) {
        const requestOptions = await this.updatePetWithFormRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async updatePetWithForm(requestParameters, initOverrides) {
        await this.updatePetWithFormRaw(requestParameters, initOverrides);
    }
    async uploadFileRequestOpts(requestParameters) {
        if (requestParameters['petId'] == null) {
            throw new runtime.RequiredError('petId', 'Required parameter "petId" was null or undefined when calling uploadFile().');
        }
        const queryParameters = {};
        if (requestParameters['additionalMetadata'] != null) {
            queryParameters['additionalMetadata'] = requestParameters['additionalMetadata'];
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/octet-stream';
        if (this.configuration && this.configuration.accessToken) {
            headerParameters["Authorization"] = await this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
        }
        let urlPath = `/pet/{petId}/uploadImage`;
        urlPath = urlPath.replace('{petId}', encodeURIComponent(String(requestParameters['petId'])));
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        };
    }
    async uploadFileRaw(requestParameters, initOverrides) {
        const requestOptions = await this.uploadFileRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ModelApiResponseFromJSON(jsonValue));
    }
    async uploadFile(requestParameters, initOverrides) {
        const response = await this.uploadFileRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
export const FindPetsByStatusStatusEnum = {
    Available: 'available',
    Pending: 'pending',
    Sold: 'sold',
};
//# sourceMappingURL=PetApi.js.map