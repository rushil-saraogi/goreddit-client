"use client";

import { useState, useEffect } from "react";
import { getAllPostsWithBrandsAndProducts } from "@/api/posts";
import Header from "@/components/Header";
import TableComponent from "@/components/TableComponent";
import Button from "@/components/Button";
import WatchExPost from "@/types/WatchExPost";

const PAGE_SIZE = 25;

export default () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<WatchExPost[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getAllPostsWithBrandsAndProducts(page, PAGE_SIZE)
            .then(data => {
                setPosts([...posts, ...data.posts]);
                setTotal(data.total);
            });
    }, [page]);

    const onViewMore = () => {
        setPage(page + 1);
    };

    return (
        <div>
            <Header
                actions={(
                    <Button type="secondary">Tag posts</Button>
                )}
            >
                    Posts <span className="text-gray-400">({total} total)</span>
            </Header>
            <TableComponent data={posts} onViewMore={onViewMore} />
        </div>
    )
}