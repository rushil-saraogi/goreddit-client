import { Product } from './Product';

export interface Collection {
    ID: number;
    Name: string;
    Thumbnail?: string;
    Created: string;
    Updated: string;
    Products?: Product[];
}

export interface CreateCollectionRequest {
    Name: string;
    Thumbnail?: string;
}
