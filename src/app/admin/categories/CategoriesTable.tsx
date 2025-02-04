"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import TableComponent from "@/components/TableComponent";
import { Category } from "@/types/Category";
import Header from "@/components/Header";


export default ({ categories }: { categories: Category[] }) => {
    const router = useRouter();

    const handleEditClick = (id: number) => {
        router.push(`/admin/categories/${id}`);
    }

    return (
        <div className="flex flex-col gap-4">
            <Header
                actions={(
                    <Button href="/admin/categories/new" type="secondary">Add Category</Button>
                )}
            >Categories</Header>
            <TableComponent data={categories} onEdit={handleEditClick} />
        </div>
    )
}