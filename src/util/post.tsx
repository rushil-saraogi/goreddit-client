import Tag from "@/components/Tag";
import { WatchExPostWithBrandAndProduct, WatchExPostWithBrandAndProductTable } from "@/types/WatchExPost";

const Tags = ({ tags, bg }: { tags: string[], bg: string }) => (
    <div className="flex flex-wrap gap-1">
        {tags.map(tag => <Tag key={tag} classes={bg}>{tag}</Tag>)}
    </div>
)

export function formatWatchExPostForTable(posts: WatchExPostWithBrandAndProduct[]): WatchExPostWithBrandAndProductTable[] {
    return posts.map(post => ({
        Brands: (<Tags bg="bg-teal-500" tags={post.Brands} />),
        Products: (<Tags bg="bg-pink-500" tags={post.Products} />),
        Title: post.Title,
        ID: post.ID,
        Username: post.Username,
        Thumbnail: post.Thumbnail,
        PostTime: post.PostTime,
        Created: post.Created,
        Updated: post.Updated,
    }));
}