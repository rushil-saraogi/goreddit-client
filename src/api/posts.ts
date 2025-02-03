import { get } from "./util";

export function getLatestPosts() {
    return get('/post/latest', true);
}

export function getPostsForBrand(brandId: string) {
    return get(`/brand/${brandId}/posts`);
}

export function getPostsForProduct(productId: string) {
    return get(`/product/${productId}/posts`);
}