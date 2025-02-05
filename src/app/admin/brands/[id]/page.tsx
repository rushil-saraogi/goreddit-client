import ProductTable from "../../ProductTable"
import { getProductsByBrand } from "@/api/products";
import { getBrand } from "@/api/brands";
import EditBrandForm from "./EditBrandForm";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    const [brand, products] = id === 'new'
        ? [null, []]
        : await Promise.all([
            getBrand(id),
            getProductsByBrand(id)
        ]);

    return (
        <>
            <EditBrandForm brand={brand} />
            {
                brand && (
                    <>
                        <h2 className="text-2xl font-semibold mt-4">Products</h2>
                        <ProductTable data={products} brandID={brand.ID} />
                    </>
                )
            }
            
        </>
    )
}