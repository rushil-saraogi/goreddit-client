import { Product } from "@/types/Product";
import { get } from "./util";

export function getProducts(): Promise<Array<Product>> {
    return get('/products');
}
