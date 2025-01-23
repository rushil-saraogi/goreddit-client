
import { get, post } from "./util";
import { Collection } from "@/types/Collection";

export function getCollections(): Promise<Array<Collection>> {
    return get('/collections');
}

export function createCollection(collection: Collection): Promise<Collection> {
    return post('/collections', collection);
}