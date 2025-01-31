"use client";

import { useRouter } from 'next/navigation'
import { useMutation } from "@tanstack/react-query";
import InputGroup from "@/components/InputGroup"
import Label from "@/components/Label";
import Button from "@/components/Button";
import { createCollection, updateCollection, addProductToCollection, removeProductFromCollection } from "@/api/collections";
import { useState } from "react"
import Alert from "@/components/Alert";
import { Collection } from "@/types/Collection";
import { Product } from "@/types/Product";
import ProductSelectionDialog from "./ProductSelectionDialog";
import TableComponent from '@/components/TableComponent';

export default ({ collection, products }: { collection?: Collection | null, products?: Product[] }) => {
    const router = useRouter()
    const [Name, setName] = useState(collection?.Name || "");
    const [Thumbnail, setThumbnail] = useState(collection?.Thumbnail || "");
    const [productSelectionOpen, setProductSelectionOpen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>(collection?.Products || []);

    const handleProductSelection = async (product: Product) => {
        if (!collection) {
            return;
        }

        if (selectedProducts.some((selectedProduct) => selectedProduct.ID === product.ID)) {
            await removeProductFromCollection(collection.ID, product.ID);
            setSelectedProducts(selectedProducts.filter((selectedProduct) => selectedProduct.ID !== product.ID));
            return;
        }

        await addProductToCollection(collection.ID, product.ID);
        setSelectedProducts([...selectedProducts, product]);
    }

    const saveChanges = async () => {
        if (collection) {
            await updateCollection(collection.ID, { Name, Thumbnail });
            return;
        }

        const newCollection = await createCollection({ Name, Thumbnail });
        router.push(`/admin/collections/${newCollection.ID}`);
    }

    const mutation = useMutation({
        mutationFn: saveChanges,
    });

    const handleClick = async () => {
        if (!Name) {
            return;
        }

        await mutation.mutate();

        setName("");
        setThumbnail("");
    }

    return (
        <div className="mx-auto flex flex-col gap-4">
            {
                mutation.isSuccess && (
                    <Alert type="success">
                        {collection ? "Collection updated" : "Collection created"}
                    </Alert>
                )
            }
            {
                mutation.isError && <Alert type="error">An error occurred</Alert>
            }
            <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex-1 flex flex-col gap-4">
                    <Label text="Name">
                        <InputGroup value={Name} onChange={(e) => setName(e.target.value)} />
                    </Label>
                    <Label text="Thumbnail">
                        <InputGroup value={Thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                    </Label>
                    <div>
                        <Button onClick={handleClick} loading={mutation.isPending}>
                            {collection ? "Update" : "Create"}
                        </Button>
                    </div>
                </div>

                {
                    collection && (
                        <div className='mt-4 flex flex-col gap-4'>
                            <div className='flex justify-between items-end'>
                                <div className="font-semibold">Selected References</div>
                                <Button type="secondary" onClick={() => setProductSelectionOpen(true)}>Toggle Products</Button>
                            </div>
                            <TableComponent data={selectedProducts} />
                            <ProductSelectionDialog
                                isOpen={productSelectionOpen}
                                onClose={() => setProductSelectionOpen(false)}
                                onSelect={handleProductSelection}
                                products={products ?? []}
                                selectedProducts={selectedProducts || []}
                            />
                        </div>
                    )
                }
            </div>
        </div>

    )
}