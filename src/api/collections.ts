
import { get, post, del, put } from "./util";
import { Collection, CreateCollectionRequest } from "@/types/Collection";

export function getCollections(): Promise<Array<Collection>> {
    return get('/collections');
}

export function getCollection(id: number): Promise<Collection> {
    return get(`/collection/${id}`);
}

export function createCollection(data: CreateCollectionRequest): Promise<Collection> {
    return post('/collections', data);
}

export function updateCollection(id: number, data: CreateCollectionRequest): Promise<Collection> {
    return put(`/collection/${id}`, data);
}

export function deleteCollection(id: string): Promise<void> {
    return del(`/collection/${id}`);
}

export function addProductToCollection(collectionId: number, productId: number): Promise<void> {
    return post(`/collection/${collectionId}/product/${productId}`, {});
}

export function removeProductFromCollection(collectionId: number, productId: number): Promise<void> {
    return del(`/collection/${collectionId}/product/${productId}`);
}