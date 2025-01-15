import { get } from "./util";

export function getLatestPosts() {
    return get('/post/latest');
}

export function getPostsForBrand(brandId: string) {
    return get(`/brand/${brandId}/posts`);
}