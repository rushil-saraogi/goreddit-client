"use client";

import InputGroup from "@/components/InputGroup"
import Label from "@/components/Label";
import Button from "@/components/Button";
import { createCollection, getCollections } from "@/api/collections";
import { useState } from "react"

export default () => {
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    const handleClick = async () => {
        if (!name) {
            return;
        }

        await createCollection({
            Name: name,
            Thumbnail: thumbnail
        });

        setName("");
        setThumbnail("");
    }

    return (
        <div className="max-w-lg mx-auto p-4 border border-gray-200 rounded-lg flex flex-col gap-4">
            <Label text="Name">
                <InputGroup value={name} onChange={(e) => setName(e.target.value)} />
            </Label>
            <Label text="Thumbnail">
                <InputGroup value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </Label>
            <Button onClick={handleClick}>Create Collection</Button>
        </div>
    )
}