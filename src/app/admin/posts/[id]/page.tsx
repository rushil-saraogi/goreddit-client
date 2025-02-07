import { getPostById } from "@/api/posts";
import { getBrands } from "@/api/brands";
import { getProducts } from "@/api/products";
import EditPostForm from "./EditPostForm";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const [post, brands, products] = await Promise.all([
        getPostById(id),
        getBrands(),
        getProducts(),
    ]);

    return (
        <EditPostForm post={post} brands={brands} products={products} />
    )
}