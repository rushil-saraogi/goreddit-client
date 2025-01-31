import { getCollection } from "@/api/collections";
import { getProducts } from "@/api/products";
import Header from "@/components/Header";
import EditCollectionForm from "./EditCollectionForm";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const collection = id === 'new' ? null : await getCollection(parseInt(id));
    const products = await getProducts();

    return (
        <>
            <Header>{collection?.Name}</Header>
            <EditCollectionForm collection={collection} products={products} />
        </>
    )
}