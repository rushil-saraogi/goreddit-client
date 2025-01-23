import Link from "next/link";
import { Collection } from "@/types/Collection";

type CollectionCardProps = Collection & {
  classes?: string;
}

export default ({ Name, ID, classes }: CollectionCardProps) => {
  return (
    <Link
      href={`/collections/${ID}`}
      className={`min-h-24 overflow-hidden bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 hover:opacity-80 flex transition items-center justify-center rounded-lg relative cursor-zoom-in ${classes}`}
    >
        <div className="text-white text-xl font-bold leading-5">{Name}</div>
    </Link>
  );
};
