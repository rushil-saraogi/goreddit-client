"use client";

import { useState, useEffect } from "react";
import { getAllPostsWithBrandsAndProducts } from "@/api/posts";
import Header from "@/components/Header";
import TableComponent from "@/components/TableComponent";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import { WatchExPostWithBrandAndProduct, WatchExPostWithBrandAndProductTable } from "@/types/WatchExPost";
import Loader from "@/components/Loader";
import { reprocessPosts } from "@/api/posts";

const PAGE_SIZE = 25;

const Tags = ({ tags, bg }: { tags: string[], bg: string }) => (
    <div className="flex flex-wrap gap-1">
        {tags.map(tag => <Tag key={tag} classes={bg}>{tag}</Tag>)}
    </div>
)

export default () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<WatchExPostWithBrandAndProduct[]>([]);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [initialPageLoaded, setInitialPageLoaded] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        if (initialPageLoaded && posts.length >= total) {
            setIsLoading(false);
            return;
        }

        getAllPostsWithBrandsAndProducts(page, PAGE_SIZE)
            .then(data => {
                if (data.posts) {
                    setPosts([...posts, ...data.posts]);
                }
                
                setInitialPageLoaded(true);
                setTotal(data.total);
                setIsLoading(false);
            });
    }, [page]);

    const onViewMore = () => {
        setPage(page + 1);
    };

    const formattedData: WatchExPostWithBrandAndProductTable[]  = posts.map(post => ({
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

    const handleReprocess = () => {
        reprocessPosts()
            .then((res) => {
                alert(`${res.rowsAffected} new tags added`);
            });
    }

    return (
        <div>
            <Header
                actions={(
                    <Button type="secondary" onClick={handleReprocess}>Reprocess posts</Button>
                )}
            >
                    Posts <span className="text-gray-400">({total} total)</span>
            </Header>
            {
                isLoading && <Loader />
            }
            {
                !isLoading && (
                    <TableComponent data={formattedData} onViewMore={onViewMore} />
                )
            }
        </div>
    )
}