
import { get } from "./util";
import { Collection } from "@/types/Collection";

export function getCollections(): Promise<Array<Collection>> {
    return get('/collections');
}
