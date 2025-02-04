"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Button from "@/components/Button";
import Header from "@/components/Header";
import TableComponent from "@/components/TableComponent";
import { Collection } from "@/types/Collection";
import { deleteCollection } from "@/api/collections";


export default ({ collections }: { collections: Collection[] }) => {
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: deleteCollection
    })

    const handleDeleteClick = async (collectionId: number) => {
        if (!confirm('Are you sure you want to delete this collection?')) {
            return;
        }

        await mutation.mutate(collectionId);
        router.refresh();
    }

    const handleEditClick = (collectionId: number) => {
        router.push(`/admin/collections/${collectionId}`);
    }

    return (
        <div className="flex flex-col gap-2">
            <Header
                actions={(
                    <Button href="/admin/collections/new" type="secondary">Add Collection</Button>
                )}
            >Collections</Header>
            <TableComponent data={collections} onEdit={handleEditClick} onDelete={handleDeleteClick} />
        </div>
    )
}