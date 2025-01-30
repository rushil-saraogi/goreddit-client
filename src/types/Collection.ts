export interface Collection {
    ID: number;
    Name: string;
    Thumbnail?: string;
    Created: string;
    Updated: string;
}

export interface CreateCollectionRequest {
    Name: string;
    Thumbnail?: string;
}
