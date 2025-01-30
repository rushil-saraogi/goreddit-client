import { Collection } from "@/types/Collection";
import { getCollections } from "@/api/collections";
import CollectionsTable from "./CollectionsTable"

export default async function Latest() {
  const collections: Collection[] = await getCollections();

  return (
    <div className="flex justify-center w-full">
      <CollectionsTable collections={collections} />
    </div>
  );
}
