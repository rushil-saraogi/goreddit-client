import { getProductsByCategory } from "@/api/products";
import { getCategory } from "@/api/categories";
import Header from "@/components/Header";
import TableComponent from "@/components/TableComponent";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const [products, category] = await Promise.all([getProductsByCategory(parseInt(id)), getCategory(parseInt(id))]);

    return (
        <div>
            <Header>{category.Name}</Header>
            <TableComponent data={products || []} />
        </div>
    )
}