import Image from "next/image";
import WatchExPostType from "@/types/WatchExPost";
import { brandMetaData } from "@/util/brand";
import { getPostsForBrand } from "@/api/posts";
import { getBrand } from "@/api/brands";
import PostCard from "@/components/PostCard";

// Not using static build for now
// export async function generateStaticParams() {
//   const brands = await getBrands();

//   return brands.map((brand) => ({
//     id: brand.ID.toString(),
//   }));
// }

export default async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const [brand, posts] = await Promise.all([
    getBrand(id),
    getPostsForBrand(id),
  ]);

  return (
    <div className="min-h-screen mx-auto max-w-[1960px] p-4">
      <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="min-h-44 self-stretch col-span-1 row-span-3 flex items-center justify-center rounded-lg bg-white/90 p-6 text-center sm:col-span-2 lg:col-span-1 lg:row-span-2">
          <Image
            aria-hidden
            src={`/logos/${brand.Name}.png`}
            alt={brand.Name}
            width={150}
            height={150}
          />
        </div>
        {brandMetaData[brand.Name]?.video && (
          <div className="rounded-lg overflow-hidden min-h-56 bg-white/10 flex items-center justify-center row-span-2 col-span-2">
            <iframe
              height="100%"
              width="100%"
              src={`${brandMetaData[brand.Name].video}&autoplay=1&mute=1`}
              title={brand.Name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {posts?.length &&
          posts.map((post: WatchExPostType) => (
            <PostCard post={post} key={post.ID} />
          ))}
      </main>
    </div>
  );
};
