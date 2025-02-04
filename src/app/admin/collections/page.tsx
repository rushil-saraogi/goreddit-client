import { Collection } from "@/types/Collection";
import { getCollections } from "@/api/collections";
import CollectionsTable from "./CollectionsTable"

export default async function Latest() {
  const collections: Collection[] = await getCollections();

  return (
    <>
      <CollectionsTable collections={collections} />
    </>
  );
}
