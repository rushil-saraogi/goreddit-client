
import { get, post, del } from "./util";
import { Collection, CreateCollectionRequest } from "@/types/Collection";

export function getCollections(): Promise<Array<Collection>> {
    return get('/collections');
}

export function createCollection(data: CreateCollectionRequest): Promise<Collection> {
    return post('/collections', data);
}

export function deleteCollection(id: number): Promise<void> {
    return del(`/collection/${id}`);
}