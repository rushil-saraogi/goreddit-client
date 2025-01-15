import Brand from "@/types/Brand";
import { get } from "./util";

export function getBrands(): Promise<Array<Brand>> {
    return get('/brand');
}

export function getBrand(id: string): Promise<Brand> {
    return get(`/brand/${id}`);
}