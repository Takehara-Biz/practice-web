import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PetApi } from 'src/generated/api';
import { Pet, ApiResponse } from 'src/generated/models';

@Injectable()
export class PetApiServiceImpl extends PetApi {
  addPet(pet: Pet, request: Request): Pet | Promise<Pet> | Observable<Pet> {
    throw new Error('Method not implemented.');
  }
  deletePet(petId: number, apiKey: string | undefined, request: Request): void | Promise<void> | Observable<void> {
    throw new Error('Method not implemented.');
  }
  findPetsByStatus(status: 'available' | 'pending' | 'sold' | undefined, request: Request): Array<Pet> | Promise<Array<Pet>> | Observable<Array<Pet>> {
    throw new Error('Method not implemented.');
  }
  findPetsByTags(tags: Array<string> | undefined, request: Request): Array<Pet> | Promise<Array<Pet>> | Observable<Array<Pet>> {
    throw new Error('Method not implemented.');
  }
  getPetById(petId: number, request: Request): Pet | Promise<Pet> | Observable<Pet> {
    return {name: 'Pochi', category: {id: 1, name: 'Dog'}, photoUrls: []};
  }
  updatePet(pet: Pet, request: Request): Pet | Promise<Pet> | Observable<Pet> {
    throw new Error('Method not implemented.');
  }
  updatePetWithForm(petId: number, name: string | undefined, status: string | undefined, request: Request): void | Promise<void> | Observable<void> {
    throw new Error('Method not implemented.');
  }
  uploadFile(petId: number, additionalMetadata: string | undefined, body: Blob | undefined, request: Request): ApiResponse | Promise<ApiResponse> | Observable<ApiResponse> {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
