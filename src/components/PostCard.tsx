import Image from "next/image";
import WatchExPost from "@/types/WatchExPost";
import Tag from "./Tag";
import { cleanUrl } from "@/util/images";
import { cardDateFormat } from "@/util/date";

export default ({ post }: { post: WatchExPost }) => {
  return (
    <a
      key={post.ID}
      className="min-h-44 relative flex shadow-sm bg-black items-center justify-center after:content group rounded-lg relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight max-h-52 overflow-hidden"
    >
      <Image
        src={cleanUrl(post.Thumbnail)}
        alt={post.Title}
        width={100}
        height={100}
        className="transform brightness-90 transition will-change-auto group-hover:brightness-110 w-full"
      />

      <Tag classes="absolute top-2 left-2">{cardDateFormat(post.PostTime).dateString}</Tag>
    </a>
  );
};
