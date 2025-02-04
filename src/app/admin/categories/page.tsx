import { getCategories } from "@/api/categories";
import CategoriesTable from "./CategoriesTable"
import { Category } from "@/types/Category";

export default async function Latest() {
  const categories: Category[] = await getCategories();

  return (
    <>
      <CategoriesTable categories={categories} />
    </>
  );
}
