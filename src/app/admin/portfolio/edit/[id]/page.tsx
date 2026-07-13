import PortfolioForm from "@/src/components/admin/portfolio/PortfolioForm";




export default function EditPortfolioPage() {
  const project = {
    title: "Nexora Corporate Platform",
    slug: "nexora-corporate-platform",
    category: "Business Website",
    description:
      "Modern corporate website with admin dashboard, authentication and SEO optimization.",
    projectUrl: "https://nexora.com",
    githubUrl: "https://github.com/chandan-com/nexora",
    featured: true,
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  };

  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Project
        </h1>

        <p className="mt-2 text-muted-foreground">
          Update portfolio project details.
        </p>

      </div>

      <PortfolioForm initialData={project} />

    </section>
  );
}