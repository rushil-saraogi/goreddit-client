import { getProducts } from "@/api/products";
import ProductTable from './ProductTable'
import Header from "@/components/Header";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <Header>Products</Header>
      <ProductTable data={products} />
    </>
  );
}
