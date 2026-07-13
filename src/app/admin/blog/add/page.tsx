import BlogForm from "@/src/components/admin/blog/BlogForm";
import { ArrowLeft , Pencil } from "lucide-react";
import Link from "next/link";

export default function AddBlogPage() {
  return (
    <section className="space-y-8">

  {/* Header */}

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    <div>

      <h1 className="text-3xl font-bold">
        Add Blog
      </h1>

      <p className="mt-2 text-muted-foreground">
        Create a new blog post.
      </p>

    </div>

    <div className="flex gap-3">

      <Link
        href="/admin/blog"
        className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:bg-muted"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <Link
        href="/admin/blog/edit/1"
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
      >
        <Pencil size={18} />
        Edit
      </Link>

    </div>

  </div>

  <BlogForm />

</section>
  );
}