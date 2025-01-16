import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types/Category";

type props = Category & { index: number };

export default ({ Name, ID, index }: props) => {
  const backgroundColors = [
    "bg-indigo-400 hover:bg-indigo-500",
    "bg-teal-400 hover:bg-teal-500",
    "bg-yellow-300 hover:bg-yellow-400",
    "bg-green-400 hover:bg-green-500",
    "bg-blue-400 hover:bg-blue-500",
    "bg-red-400 hover:bg-red-500",
    "bg-pink-400 hover:bg-pink-500",
    "bg-purple-400 hover:bg-purple-500",
  ];

  return (
    <Link
      href={`/categories/${ID}`}
      className={`min-h-52 overflow-hidden flex shadow-sm transition items-end justify-start after:content rounded-lg relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight ${
        backgroundColors[index % backgroundColors.length]
      }`}
    >
      <Image
        src={`/categories/${Name}-min.png`}
        alt={Name}
        width={250}
        height={250}
        className="transform brightness-100 transition will-change-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      />

      <div className="min-h-28 flex items-end z-10 p-4 bg-gradient-to-t from-black/60 to-black/0 h-full w-full">
        <div className="text-white text-xl font-bold leading-5">{Name}</div>
      </div>
    </Link>
  );
};
