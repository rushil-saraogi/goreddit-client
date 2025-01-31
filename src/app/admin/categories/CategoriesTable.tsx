"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import TableComponent from "@/components/TableComponent";
import { Category } from "@/types/Category";


export default ({ categories }: { categories: Category[] }) => {
    const router = useRouter();

    const handleEditClick = (id: number) => {
        router.push(`/admin/categories/${id}`);
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-end">
                <Button href="/admin/collections/new" type="secondary">Add Category</Button>
            </div>
            <TableComponent data={categories} onEdit={handleEditClick} />
        </div>
    )
}