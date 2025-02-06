import { getProduct } from "@/api/products";
import { getCategories } from "@/api/categories";
import { getBrands } from "@/api/brands";
import { getPostsForProduct } from "@/api/posts";
import Header from "@/components/Header";
import EditProductForm from "./EditProductForm";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const [categories, brands] = await Promise.all([getCategories(), getBrands()]);
    const [product, posts] = id === 'new'
        ? [null, []]
        : await Promise.all([getProduct(parseInt(id)), getPostsForProduct(id)]);

    return (
        <>
            <Header>{product?.Name || 'Add Product'}</Header>
            <EditProductForm product={product} categories={categories} brands={brands} posts={posts} />
        </>
    )
}