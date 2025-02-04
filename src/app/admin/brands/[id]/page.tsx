import ProductTable from "../../ProductTable"
import { getProductsByBrand } from "@/api/products";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const products = await getProductsByBrand(parseInt(id));

    return (
        <ProductTable data={products} />
    )
}