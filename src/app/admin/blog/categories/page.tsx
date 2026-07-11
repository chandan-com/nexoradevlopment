import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";


export default function BlogCategoryPage() {
  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Blog Categories
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage blog categories.
        </p>

      </div>

      <CategoryForm />

      <CategoryTable />

    </section>
  );
}