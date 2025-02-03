import Header from "@/components/Header";
import { getPostsForProduct } from "@/api/posts";
import { getProduct } from "@/api/products";
import TableComponent from "@/components/TableComponent";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const [product, posts] = await Promise.all([getProduct(parseInt(id)), getPostsForProduct(id)]);

    return (
        <>
            <Header>{product?.Name || 'Add Product'}</Header>
            <TableComponent
                data={posts}
            />
        </>
    )
}