
import { get } from "./util";
import { Category } from "@/types/Category";

export function getCategories(): Promise<Array<Category>> {
    return get('/categories');
}
