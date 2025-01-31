import { getProduct } from "@/api/products";
import { getCategories } from "@/api/categories";
import Header from "@/components/Header";
import EditProductForm from "./EditProductForm";
import { Category } from "@/types/Category";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const categories = await getCategories();
    const product = id === 'new' ? null : await getProduct(parseInt(id));

    return (
        <>
            <Header>{product?.Name || 'Add Product'}</Header>
            <EditProductForm product={product} categories={categories} />
        </>
    )
}