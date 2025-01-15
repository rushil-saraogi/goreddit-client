import Image from "next/image";
import { getBrands } from "@/api/brands";
import BrandCard from "@/components/BrandCard";
import Brand from "@/types/Brand";

export default async function BrandPage() {
  const brands = await getBrands();

  const sortedBrands = brands?.length
    ? brands.sort((a: Brand, b: Brand) => {
        const average = (brand: Brand) => (brand.PriceRangeLower + brand.PriceRangeUpper) / 2;
        return average(a) - average(b);
      })
    : [];

  return (
    <div className="min-h-screen mx-auto max-w-[1960px] p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="col-span-1 row-span-3 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white/10 p-6 text-center text-white shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2">
          <Image
            aria-hidden
            src="/tag.png"
            alt="Reddit Watchexchange"
            width={90}
            height={90}
          />
          <h1 className="text-3xl font-bold font-mono mt-4">Brands</h1>
        </div>
        {sortedBrands.map((brand: Brand) => (
          <BrandCard key={brand.ID} {...brand} />
        ))}
      </main>
    </div>
  );
}
