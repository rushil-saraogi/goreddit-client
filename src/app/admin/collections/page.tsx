import Button from "@/components/Button";
import TableComponent from "@/components/TableComponent";
import { Collection } from "@/types/Collection";
import { getCollections } from "@/api/collections";
import { tableDateFormat } from "@/api/util";

export default async function Latest() {
  const collections: Collection[] = await getCollections();
  const collectionsData = collections
    .map((collection: Collection) => ({
        ...collection,
        Created: tableDateFormat(collection.Created),
        Updated: tableDateFormat(collection.Updated),
    }));

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Button type="secondary">Add Collection</Button>
        </div>
        <TableComponent
          data={collectionsData}
        />
      </div>
    </div>
  );
}
