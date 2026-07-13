import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    image: string;
  };
};

export default function PortfolioCard({ project }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-card transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-64 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="space-y-5 p-6">

        <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-600">
          {project.category}
        </span>

        <h2 className="text-2xl font-bold">
          {project.title}
        </h2>

        <p className="text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-muted px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}

        </div>

        <Link
          href={`/portfolio/${project.id}`}
          className="flex items-center gap-2 font-semibold text-blue-600"
        >
          View Project
          <ArrowUpRight size={18} />
        </Link>

      </div>

    </div>
  );
}