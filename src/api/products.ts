import { Product, CreateProductRequest } from "@/types/Product";
import { get, post, put, del } from "./util";

export function getProducts(): Promise<Array<Product>> {
    return get('/products');
}

export function getProduct(id: number): Promise<Product> {
    return get(`/product/${id}`);
}

export function getProductsByCategory(categoryId: number): Promise<Array<Product>> {
    return get(`/category/${categoryId}/products`);
}

export function getProductsByBrand(brandId: string): Promise<Array<Product>> {
    return get(`/brand/${brandId}/products`);
}

export function createProduct(product: CreateProductRequest): Promise<Product> {
    return post('/products', product);
}

export function updateProduct(id: number, product: CreateProductRequest): Promise<Product> {
    return put(`/product/${id}`, product);
}

export function deleteProduct(id: number): Promise<void> {
    return del(`/product/${id}`);
}

export function addProductCategory(productId: number, categoryId: number): Promise<void> {
    return post(`/product/${productId}/category/${categoryId}`, {});
}

export function removeProductCategory(productId: number, categoryId: number): Promise<void> {
    return del(`/product/${productId}/category/${categoryId}`);
}