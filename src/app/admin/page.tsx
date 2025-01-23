import Button from "@/components/Button";
import TableComponent from "@/components/TableComponent";
import { tableDateFormat } from "@/api/util";
import { getProducts } from "@/api/products";

export default async function Latest() {
  const products = await getProducts();
  const productData = products.map((product) => ({
    ...product,
    Created: tableDateFormat(product.Created),
    Updated: tableDateFormat(product.Updated),
  }));

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Button type="secondary" href="/admin/products/new">Add Product</Button>
        </div>
        <TableComponent
          data={productData}
        />
      </div>
    </div>
  );
}
