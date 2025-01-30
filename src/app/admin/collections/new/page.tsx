"use client";

import { useMutation } from "@tanstack/react-query";
import InputGroup from "@/components/InputGroup"
import Label from "@/components/Label";
import Button from "@/components/Button";
import { createCollection } from "@/api/collections";
import { useState } from "react"
import Alert from "@/components/Alert";

export default () => {
    const [Name, setName] = useState("");
    const [Thumbnail, setThumbnail] = useState("");

    const mutation = useMutation({
        mutationFn: createCollection
    })

    const handleClick = async () => {
        if (!Name) {
            return;
        }

        await mutation.mutate({ Name, Thumbnail });

        setName("");
        setThumbnail("");
    }

    return (
        <div className="max-w-lg mx-auto flex flex-col gap-4">
            {
                mutation.isSuccess && <Alert type="success">Collection created</Alert>
            }
            {
                mutation.isError && <Alert type="error">An error occurred</Alert>
            }
            <div className="p-4 border border-gray-200 rounded-lg flex flex-col gap-4">
                <Label text="Name">
                    <InputGroup value={Name} onChange={(e) => setName(e.target.value)} />
                </Label>
                <Label text="Thumbnail">
                    <InputGroup value={Thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                </Label>
            <Button onClick={handleClick} loading={mutation.isPending}>Create Collection</Button>
            </div>
        </div>

    )
}