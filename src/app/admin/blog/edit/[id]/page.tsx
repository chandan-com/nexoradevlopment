import BlogForm from "@/src/components/admin/blog/BlogForm";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBlogPage({
  params,
}: Props) {

  const { id } = await params;

  const blog = {
    id,
    title: "Why Every Business Needs a Website",
    slug: "why-every-business-needs-a-website",
    shortDescription:
      "Professional website helps businesses grow online.",
    content:
      "This is demo blog content.",
    category: "Business",
    tags: "Website, Business",
    status: "Published",
    featured: true,
  };

  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Blog
        </h1>

        <p className="mt-2 text-muted-foreground">
          Update blog details.
        </p>

      </div>

      <BlogForm
        initialData={blog}
        isEdit
      />

    </section>
  );
}