"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getAllPostsWithBrandsAndProducts } from "@/api/posts";
import Header from "@/components/Header";
import TableComponent from "@/components/TableComponent";
import Button from "@/components/Button";
import { formatWatchExPostForTable } from "@/util/post";
import { WatchExPostWithBrandAndProduct, WatchExPostWithBrandAndProductTable } from "@/types/WatchExPost";
import Loader from "@/components/Loader";
import { reprocessPosts } from "@/api/posts";
import Tabs from "@/components/Tabs";
import PostCard from "@/components/PostCard";

const PAGE_SIZE = 25;

const VIEW_TABS = [
    { name: "Table", value: 0 },
    { name: "Cards", value: 1 },
];

export default () => {
    const tab = localStorage.getItem("admin-posts-view-tab");
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<WatchExPostWithBrandAndProduct[]>([]);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isReprocessing, setIsReprocessing] = useState(false);
    const [initialPageLoaded, setInitialPageLoaded] = useState(false);
    const [viewTabIndex, setViewTabIndex] = useState(tab ? parseInt(tab) : 0);

    useEffect(() => {
        if (initialPageLoaded && posts.length >= total) {
            setIsLoading(false);
            return;
        }

        getAllPostsWithBrandsAndProducts(page, PAGE_SIZE)
            .then(data => {
                if (data.posts) {
                    setPosts(posts => [...posts, ...data.posts]);
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

    const formattedData: WatchExPostWithBrandAndProductTable[] = formatWatchExPostForTable(posts);

    const handleReprocess = () => {
        setIsReprocessing(true);

        reprocessPosts()
            .then((res) => {
                alert(`${res.rowsAffected} new tags added`);
                setIsReprocessing(false);
            });
    }

    const handlePostClick = (id: number) => {
        router.push(`/admin/posts/${id}`);
    }

    const onTabClick = (tab: number) => {
        setViewTabIndex(tab);
        localStorage.setItem("admin-posts-view-tab", tab.toString());
    }

    return (
        <div>
            <Header
                actions={(
                    <div className="flex gap-4 items-center">
                        <Tabs
                            tabs={VIEW_TABS}
                            type="slim"
                            activeTab={viewTabIndex}
                            handleClick={onTabClick}
                        />
                        <Button type="secondary" onClick={handleReprocess} loading={isReprocessing}>Reprocess posts</Button>
                    </div>
                )}
            >
                Posts <span className="text-gray-400">({total} total)</span>
            </Header>
            {
                isLoading && <Loader />
            }
            {
                !isLoading && viewTabIndex === 0 && (<TableComponent data={formattedData} onViewMore={onViewMore} onClick={handlePostClick} />)
            }
            {
                !isLoading && viewTabIndex === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            formattedData.map((post, index) => (<PostCard key={index} post={post} onClick={handlePostClick} />))
                        }
                        <div />
                    </div>
                )
            }
        </div>
    )
}