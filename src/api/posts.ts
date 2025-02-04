import { get } from "./util";
import WatchExPost, {WatchExPostWithBrandAndProduct} from "@/types/WatchExPost";

interface PaginatedPostResponse<T = WatchExPost> {
    posts: T[];
    page: number;
    pageSize: number;
    total: number;
}

export function getLatestPosts(): Promise<WatchExPost[]> {
    return get('/posts/latest', true);
}

export function getAllPosts(page: Number = 1, pageSize: Number = 25): Promise<PaginatedPostResponse> {
    return get(`/posts/all?page=${page}&pageSize=${pageSize}`, true);
}

export function getAllPostsWithBrandsAndProducts(page: Number = 1, pageSize: Number = 25): Promise<PaginatedPostResponse<WatchExPostWithBrandAndProduct>> {
    return get(`/posts/all-with-brands-and-products?page=${page}&pageSize=${pageSize}`, true);
}

export function getPostsForBrand(brandId: string) {
    return get(`/brand/${brandId}/posts`);
}

export function getPostsForProduct(productId: string) {
    return get(`/product/${productId}/posts`);
}