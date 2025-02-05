import Brand from "@/types/Brand";
import { get, post, put, del } from "./util";

export type CreateBrandRequest = Omit<Brand, 'ID' | 'Created' | 'Updated'>;

export function getBrands(): Promise<Array<Brand>> {
    return get('/brands');
}

export function getBrand(id: string): Promise<Brand> {
    return get(`/brand/${id}`);
}

export function createBrand(brand: CreateBrandRequest): Promise<Brand> {
    return post('/brand', brand);
}

export function updateBrand(id: string, brand: CreateBrandRequest): Promise<Brand> {
    return put(`/brand/${id}`, brand);
}

export function deleteBrand(id: string): Promise<void> {
    return del(`/brand/${id}`);
}
