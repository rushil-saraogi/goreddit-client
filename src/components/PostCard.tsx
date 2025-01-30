import Image from "next/image";
import WatchExPost from "@/types/WatchExPost";
import Tag from "./Tag";
import { removeEscapedAmpersands, isValidUrl } from "@/util/URL";
import { cardDateFormat } from "@/util/date";

export default ({ post }: { post: WatchExPost }) => {
  const cleanedUrl = removeEscapedAmpersands(post.Thumbnail);
  const urlIsValid = isValidUrl(cleanedUrl);

  return (
    <a
      key={post.ID}
      className="min-h-44 relative flex shadow-sm bg-black items-center justify-center after:content group rounded-lg relative cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight max-h-52 overflow-hidden"
    >
      {urlIsValid && (
        <Image
          src={cleanedUrl}
          alt={post.Title}
          width={200}
          height={200}
          className="transform brightness-90 transition will-change-auto group-hover:brightness-110 w-full"
        />
      )}

      { !urlIsValid && (
        <div className="text-white text-xl font-semibold">{post.Title}</div>
      )}

      <Tag classes="absolute top-2 left-2">
        {cardDateFormat(post.PostTime).dateString}
      </Tag>

      <div className="absolute p-8 transition h-full w-full flex items-center justify-center text-white text-sm text-center font-semibold bg-black bg-opacity-80 opacity-0 group-hover:opacity-100">
        {post.Title}
      </div>
    </a>
  );
};
