"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import InputGroup from "@/components/InputGroup"
import Label from "@/components/Label";
import Button from "@/components/Button";
import { useState } from "react"
import Alert from "@/components/Alert";
import Brand from "@/types/Brand";
import { createBrand, updateBrand, CreateBrandRequest } from "@/api/brands";

export default ({ brand }: { brand: Brand | null }) => {
    const router = useRouter();
    const [Name, setName] = useState(brand?.Name || "");
    const [PriceRangeLower, setPriceRangeLower] = useState<string>(brand?.PriceRangeLower.toString() || '0');
    const [PriceRangeUpper, setPriceRangeUpper] = useState<string>(brand?.PriceRangeUpper.toString() || '0');
    const [Thumbnail, setThumbnail] = useState(brand?.Thumbnail || "");


    const getBrandObject = (): CreateBrandRequest => ({
        Name,
        PriceRangeLower: parseInt(PriceRangeLower),
        PriceRangeUpper: parseInt(PriceRangeUpper),
        Thumbnail,
    })

    const saveChanges = async () => {
        if (brand) {
            await updateBrand(brand.ID.toString(), getBrandObject());
            return;
        }

        const brandId = await createBrand(getBrandObject());
        router.push(`/admin/brands/${brandId}`);
    }

    const mutation = useMutation({
        mutationFn: saveChanges,
    });

    const handleClick = async () => {
        if (!Name) {
            return;
        }

        await mutation.mutate();
    }

    return (
        <div className="mx-auto flex flex-col gap-4">
            {
                mutation.isSuccess && (
                    <Alert type="success">
                        {brand ? "Brand updated" : "Brand created"}
                    </Alert>
                )
            }
            {
                mutation.isError && <Alert type="error">An error occurred</Alert>
            }
            <div className="p-4 border border-gray-200 rounded-lg flex flex-col gap-4">
                <div className="font-semibold">Metadata</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Label text="Name">
                        <InputGroup value={Name} onChange={(e) => setName(e.target.value)} />
                    </Label>
                    <Label text="Price Range Lower">
                        <InputGroup value={PriceRangeLower} onChange={(e) => setPriceRangeLower(e.target.value)} />
                    </Label>
                    <Label text="Price Range Upper">
                        <InputGroup value={PriceRangeUpper} onChange={(e) => setPriceRangeUpper(e.target.value)} />
                    </Label>
                    <Label text="Thumbnail">
                        <InputGroup value={Thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                    </Label>
                </div>

                <div>
                    <Button onClick={handleClick} loading={mutation.isPending}>
                        {brand ? "Update" : "Create"}
                    </Button>
                </div>
            </div>
        </div>

    )
}