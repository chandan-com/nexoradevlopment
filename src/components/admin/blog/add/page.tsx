import BlogForm from "../BlogForm";


export default function AddBlogPage() {
  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Add Blog
        </h1>

        <p className="mt-2 text-muted-foreground">
          Create a new blog post.
        </p>

      </div>

      <BlogForm />

    </section>
  );
}