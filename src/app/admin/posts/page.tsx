"use client";

import { useState, useEffect } from "react";
import { getAllPostsWithBrandsAndProducts } from "@/api/posts";
import Header from "@/components/Header";
import TableComponent from "@/components/TableComponent";
import Button from "@/components/Button";
import { formatWatchExPostForTable } from "@/util/post";
import { WatchExPostWithBrandAndProduct, WatchExPostWithBrandAndProductTable } from "@/types/WatchExPost";
import Loader from "@/components/Loader";
import { reprocessPosts } from "@/api/posts";

const PAGE_SIZE = 25;

export default () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<WatchExPostWithBrandAndProduct[]>([]);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isReprocessing, setIsReprocessing] = useState(false);
    const [initialPageLoaded, setInitialPageLoaded] = useState(false);

    useEffect(() => {
        if (initialPageLoaded && posts.length >= total) {
            setIsLoading(false);
            return;
        }

        getAllPostsWithBrandsAndProducts(page, PAGE_SIZE)
            .then(data => {
                if (data.posts) {
                    setPosts(posts =>[...posts, ...data.posts]);
                }

                if (!initialPageLoaded) {
                    setInitialPageLoaded(true);
                }

                setTotal(data.total);
                setIsLoading(false);
            });
    }, [page]);

    const onViewMore = () => {
        setPage(page + 1);
    };

    const formattedData: WatchExPostWithBrandAndProductTable[]  = formatWatchExPostForTable(posts);

    const handleReprocess = () => {
        setIsReprocessing(true);

        reprocessPosts()
            .then((res) => {
                alert(`${res.rowsAffected} new tags added`);
                setIsReprocessing(false);
            });
    }

    return (
        <div>
            <Header
                actions={(
                    <Button type="secondary" onClick={handleReprocess} loading={isReprocessing}>Reprocess posts</Button>
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