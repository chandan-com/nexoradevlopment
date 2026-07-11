import TagForm from "@/src/components/admin/blog/TagForm";
import TagTable from "@/src/components/admin/blog/TagTable";


export default function BlogTagPage() {
  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Blog Tags
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage blog tags.
        </p>

      </div>

      <TagForm />

      <TagTable />

    </section>
  );
}