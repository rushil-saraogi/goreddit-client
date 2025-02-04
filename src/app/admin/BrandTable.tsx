"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Button from "@/components/Button";
import TableComponent from "@/components/TableComponent";
import Brand from "@/types/Brand";
import { deleteBrand } from "@/api/brands";

export default function BrandTable({ data }: { data: Brand[] }) {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: deleteBrand
  })

  const handleEditClick = (id: number) => {
    router.push(`/admin/brands/${id}`);
  }

  const handleRowClick = (id: number) => {
    router.push(`/admin/brands/${id}`);
  }

  const handleDeleteClick = async (id: number) => {
    if (!confirm('Are you sure you want to delete this brand?')) {
      return;
    }

    await mutation.mutate(id.toString());
    router.refresh();
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button type="secondary" href="/admin/brands/new">Add Brand</Button>
      </div>
      <TableComponent
        data={data}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
        onClick={handleRowClick}
      />
    </div>
  );
}
