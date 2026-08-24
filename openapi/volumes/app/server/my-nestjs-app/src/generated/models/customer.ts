import { Address } from './address';


export interface Customer { 
  id?: number;
  username?: string;
  address?: Array<Address>;
}

