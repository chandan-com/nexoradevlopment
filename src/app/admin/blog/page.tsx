import Link from "next/link";
import { Plus } from "lucide-react";
import BlogTable from "@/src/components/admin/blog/BlogTable";


export default function BlogPage() {
  return (
    <section className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Blogs
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage all blog posts.
          </p>
        </div>

        <Link
          href="/admin/blog/add"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Blog
        </Link>

      </div>

      <BlogTable />

    </section>
  );
}