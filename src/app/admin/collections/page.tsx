import { Collection } from "@/types/Collection";
import Header from "@/components/Header";
import { getCollections } from "@/api/collections";
import CollectionsTable from "./CollectionsTable"

export default async function Latest() {
  const collections: Collection[] = await getCollections();

  return (
    <>
      <Header>Collections</Header>
      <CollectionsTable collections={collections} />
    </>
  );
}
