import PortfolioCard from "@/src/components/website/portfolio/PortfolioCard";

const projects = [
  {
    id: 1,
    title: "Playbox Arena",
    category: "Website",
    description:
      "Modern sports booking platform with responsive UI and admin dashboard.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    image: "/portfolio/project-1.png",
  },
  {
    id: 2,
    title: "Restaurant App",
    category: "Mobile App",
    description:
      "Online food ordering application with payment integration.",
    technologies: ["Flutter", "Node.js"],
    image: "/portfolio/project-2.png",
  },
  {
    id: 3,
    title: "School ERP",
    category: "Dashboard",
    description:
      "Student, teacher and attendance management dashboard.",
    technologies: ["Next.js", "Express", "MongoDB"],
    image: "/portfolio/project-3.png",
  },
  {
    id: 4,
    title: "E-Commerce",
    category: "Website",
    description:
      "Complete shopping platform with cart and admin panel.",
    technologies: ["Next.js", "Node.js"],
    image: "/portfolio/project-4.png",
  },
];

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mx-auto max-w-3xl text-center">

        

        <h1 className="mt-6 text-4xl font-extrabold md:text-4xl">
          Our Latest Projects
        </h1>

        <p className="mt-6 text-muted-foreground">
          Explore some of our latest websites, mobile apps and dashboard
          projects crafted with modern technologies.
        </p>

      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3">

        <button className="rounded-full bg-blue-600 px-6 py-2 text-white">
          All
        </button>

        <button className="rounded-full border px-6 py-2">
          Website
        </button>

        <button className="rounded-full border px-6 py-2">
          Mobile App
        </button>

        <button className="rounded-full border px-6 py-2">
          Dashboard
        </button>

      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}