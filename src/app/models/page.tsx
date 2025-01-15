import Image from "next/image";

export default async function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-[1960px] p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="col-span-1 row-span-3 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-black/90 p-6 text-center text-white shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2">
          <Image
            aria-hidden
            src="/watch.png"
            alt="Reddit Watchexchange"
            width={90}
            height={90}
          />
          <h1 className="text-3xl font-bold font-mono">r/Watchexchange</h1>
          <h2>References</h2>
        </div>
      </main>
    </div>
  );
}
