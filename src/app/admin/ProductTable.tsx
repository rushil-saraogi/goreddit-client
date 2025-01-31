"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Button from "@/components/Button";
import TableComponent from "@/components/TableComponent";
import IconButton from "@/components/IconButton";
import { tableDateFormat } from "@/api/util";
import { Product } from "@/types/Product";
import { deleteProduct } from "@/api/products";

export default function ProductTable({ data }: { data: Product[] }) {
  const router = useRouter();
  const formattedData = data.map((product) => ({
    ...product,
    Created: tableDateFormat(product.Created),
    Updated: tableDateFormat(product.Updated),
  }));

  const mutation = useMutation({
    mutationFn: deleteProduct
  })

  const handleEditClick = (id: number) => {
    router.push(`/admin/products/${id}`);
  }

  const handleDeleteClick = async (id: number) => {
    if (!confirm('Are you sure you want to delete this collection?')) {
      return;
    }

    await mutation.mutate(id);
    router.refresh();
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button type="secondary" href="/admin/products/new">Add Product</Button>
      </div>
      <TableComponent
        data={formattedData.map((product: Product) => ({
          Actions: (
            <div className="flex gap-2">
              <IconButton onClick={() => handleEditClick(product.ID)} icon="edit" tooltip="Edit" />
              <IconButton onClick={() => handleDeleteClick(product.ID)} icon="delete" tooltip="Delete" />
            </div>
          ),
          ...product,
        }))}
      />
    </div>
  );
}
