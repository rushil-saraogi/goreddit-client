import { get, post, del } from "./util";
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

export function getPostById(id: string): Promise<WatchExPost> {
    return get(`/post/${id}`, true);
}

export function getAllPosts(page: number = 1, pageSize: number = 25): Promise<PaginatedPostResponse> {
    return get(`/posts/all?page=${page}&pageSize=${pageSize}`, true);
}

export function getAllPostsWithBrandsAndProducts(page: number = 1, pageSize: number = 25): Promise<PaginatedPostResponse<WatchExPostWithBrandAndProduct>> {
    return get(`/posts/all-with-brands-and-products?page=${page}&pageSize=${pageSize}`, true);
}

export function getPostsForBrand(brandId: string): Promise<WatchExPost[]> {
    return get(`/brand/${brandId}/posts`);
}

export function getPostsForProduct(productId: string): Promise<WatchExPost[]> {
    return get(`/product/${productId}/posts`);
}

export function reprocessPosts() {
    return post('/posts/reprocess', {});
}

export function createPostBrand(postId: string, brandId: number) {
    return post(`/post/${postId}/brand/${brandId}`, {});
}

export function createPostProduct(postId: string, productId: number) {
    return post(`/post/${postId}/product/${productId}`, {});
}

export function deletePostBrand(postId: string, brandId: number) {
    return del(`/post/${postId}/brand/${brandId}`);
}

export function deletePostProduct(postId: string, productId: number) {
    return del(`/post/${postId}/product/${productId}`);
}