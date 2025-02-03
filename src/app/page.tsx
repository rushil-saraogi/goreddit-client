import Image from "next/image";
import { getCategories } from "@/api/categories";
import { getCollections } from "@/api/collections";
import { Category } from "@/types/Category";
import { Collection } from "@/types/Collection";
import CategoryCard from "@/components/CategoryCard";
import CollectionCard from "@/components/CollectionCard";

export default async function Home() {
  const [categories, collections]: [Category[], Collection[]] = await Promise.all([
    getCategories(),
    getCollections(),
  ]);

  // Temporarily filter categories without posts
  const filteredCategories = categories.filter((category) => !['Sector Dial'].includes(category.Name));

  return (
    <div className="min-h-screen mx-auto max-w-[1960px] p-4">
      <main>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          <div className="col-span-1 row-span-3 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-white/10 p-6 text-center text-white shadow-highlight col-span-1 lg:col-span-2 lg:row-span-2">
            <Image
              aria-hidden
              src="/logo.png"
              alt="Reddit Watchexchange"
              width={90}
              height={90}
            />
            <h1 className="text-3xl font-bold mt-6">AskWinston</h1>
            <h2 className="mt-2">
              A curated list of the world&apos;s best watches and where to find them
            </h2>
          </div>
          {filteredCategories.map((category: Category, i: number) => (
            <div key={category.ID}>
              <CategoryCard {...category} index={i} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
          <div className="col-span-1 row-span-3 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-white/10 p-6 text-center text-white shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <Image
              aria-hidden
              src="/heart.png"
              alt="Featured"
              width={90}
              height={90}
            />
            <h1 className="text-2xl font-bold mt-4">Collections</h1>
          </div>
          {collections.map((collection: Collection) => (
            <div key={collection.ID}>
              <CollectionCard {...collection} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
