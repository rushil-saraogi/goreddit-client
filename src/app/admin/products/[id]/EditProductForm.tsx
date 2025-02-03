"use client";

import { useMutation } from "@tanstack/react-query";
import InputGroup from "@/components/InputGroup"
import Label from "@/components/Label";
import Button from "@/components/Button";
import { createProduct, updateProduct } from "@/api/products";
import { useState } from "react"
import Alert from "@/components/Alert";
import { Product } from "@/types/Product";
import { Category } from "@/types/Category";
import Dropdown from "@/components/Dropdown";
import { addProductCategory, removeProductCategory } from "@/api/products";
import Pill from "@/components/Pill";
import { MOVEMENT_TYPES, CRYSTAL_TYPES, DIAL_COLORS, CASE_MATERIALS } from "./constants";

export default ({ product, categories }: { product?: Product | null, categories: Category[] }) => {
    const [Name, setName] = useState(product?.Name || "");
    const [Reference, setReference] = useState(product?.Reference || "");
    const [Price, setPrice] = useState(product?.Price.toString() || '0');
    const [CaseSize, setCaseSize] = useState(product?.CaseSize.toString() || '0');
    const [LugToLug, setLugToLug] = useState(product?.LugToLug.toString() || '0');
    const [Thickness, setThickness] = useState(product?.Thickness.toString() || '0');
    const [LugWidth, setLugWidth] = useState(product?.LugWidth.toString() || '0');
    const [Movement, setMovement] = useState(product?.Movement || "");
    const [MovementType, setMovementType] = useState(product?.MovementType || "");
    const [Crystal, setCrystal] = useState(product?.Crystal || "");
    const [DialColor, setDialColor] = useState(product?.DialColor || "");
    const [CaseMaterial, setCaseMaterial] = useState(product?.CaseMaterial || "");
    const [Thumbnail, setThumbnail] = useState(product?.Thumbnail || "");
    const [Categories, setCategories] = useState(product?.Categories || []);

    const getProductObject = () => ({
        Name,
        Reference,
        Price: parseFloat(Price),
        CaseSize: parseFloat(CaseSize),
        LugToLug: parseFloat(LugToLug),
        Thickness: parseFloat(Thickness),
        LugWidth: parseFloat(LugWidth),
        Movement,
        MovementType,
        Crystal,
        DialColor,
        CaseMaterial,
        Thumbnail,
    })

    const saveChanges = async () => {
        if (product) {
            await updateProduct(product.ID, getProductObject());
            return;
        }

        await createProduct(getProductObject());
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

    const hanldeCategoryClick = async (categoryID: number) => {
        if (!product) {
            return;
        }

        if (Categories && Categories.find((c) => c.ID === categoryID)) {
            await removeProductCategory(product.ID, categoryID);
            setCategories(Categories.filter((c) => c.ID !== categoryID));
            return;
        }

        await addProductCategory(product.ID, categoryID);
        setCategories([...Categories, categories.find((c) => c.ID === categoryID)!]);
    }

    return (
        <div className="mx-auto flex flex-col gap-4">
            {
                mutation.isSuccess && (
                    <Alert type="success">
                        {product ? "Product updated" : "Product created"}
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
                    <Label text="Reference">
                        <InputGroup value={Reference} onChange={(e) => setReference(e.target.value)} />
                    </Label>
                    <Label text="Price">
                        <InputGroup value={Price} onChange={(e) => setPrice(e.target.value)} />
                    </Label>
                    <Label text="Case Size">
                        <InputGroup value={CaseSize} type="number" onChange={(e) => setCaseSize(e.target.value)} />
                    </Label>
                    <Label text="Lug To Lug">
                        <InputGroup value={LugToLug} onChange={(e) => setLugToLug(e.target.value)} />
                    </Label>
                    <Label text="Thickness">
                        <InputGroup value={Thickness} onChange={(e) => setThickness(e.target.value)} />
                    </Label>
                    <Label text="Lug Width">
                        <InputGroup value={LugWidth} onChange={(e) => setLugWidth(e.target.value)} />
                    </Label>
                    <Label text="Movement">
                        <InputGroup value={Movement} onChange={(e) => setMovement(e.target.value)} />
                    </Label>
                    <Label text="Movement Type">
                        <Dropdown items={MOVEMENT_TYPES} value={MovementType} onClick={(value) => setMovementType(value)} />
                    </Label>
                    <Label text="Crystal">
                        <Dropdown items={CRYSTAL_TYPES} value={Crystal} onClick={(value) => setCrystal(value)} />
                    </Label>
                    <Label text="Dial Color">
                        <Dropdown items={DIAL_COLORS} value={DialColor} onClick={(value) => setDialColor(value)} />
                    </Label>
                    <Label text="Case Material">
                        <Dropdown items={CASE_MATERIALS} value={CaseMaterial} onClick={(value) => setCaseMaterial(value)} />
                    </Label>
                    <Label text="Thumbnail">
                        <InputGroup value={Thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                    </Label>
                </div>

                <div>
                    <Button onClick={handleClick} loading={mutation.isPending}>
                        {product ? "Update" : "Create"}
                    </Button>
                </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
                <div className="font-semibold">Categories</div>

                <div className="flex gap-3 flex-wrap mt-4">
                    {
                        categories.map((category) => (
                            <Pill
                                key={category.ID}
                                onClick={() => hanldeCategoryClick(category.ID)}
                                type={Categories.find((c) => c.ID === category.ID) ? "success" : "default"}
                            >
                                {category.Name}
                            </Pill>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}