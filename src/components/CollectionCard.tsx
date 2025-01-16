import Link from "next/link";
import { Collection } from "@/types/Collection";

export default ({ Name, ID }: Collection) => {
  return (
    <Link
      href={`/collections/${ID}`}
      className={`min-h-52 overflow-hidden bg-white/5 hover:bg-white/10 flex transition items-center justify-center after:content rounded-lg relative cursor-zoom-in`}
    >
        <div className="text-white text-xl font-bold leading-5">{Name}</div>
    </Link>
  );
};
