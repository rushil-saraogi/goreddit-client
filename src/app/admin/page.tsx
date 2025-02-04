import { getProducts } from "@/api/products";
import { getBrands } from "@/api/brands";
import BrandTable from './BrandTable';

export default async function Products() {
  const brands = await getBrands();

  return (
    <>
      <BrandTable data={brands} />
    </>
  );
}
