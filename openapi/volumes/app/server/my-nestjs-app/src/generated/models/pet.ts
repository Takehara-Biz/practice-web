import { Category } from './category';
import { Tag } from './tag';


export interface Pet { 
  id?: number;
  name: string;
  category?: Category;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  /**
   * pet status in the store
   */
  status?: Pet.StatusEnum;
}
export namespace Pet {
  export const StatusEnum = {
    Available: 'available',
    Pending: 'pending',
    Sold: 'sold',
  } as const;
  export type StatusEnum = typeof StatusEnum[keyof typeof StatusEnum];
}


