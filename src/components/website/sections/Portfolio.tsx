import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-15 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Featured Project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            A glimpse of one of our recent projects crafted with modern
            technologies and exceptional user experience.
          </p>
        </div>

        {/* Card */}

        <div className="overflow-hidden rounded-[32px]  bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div className="p-8 lg:p-12">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-600">
                Business Website
              </span>

              <h3 className="mt-6 text-3xl font-bold lg:text-5xl">
                Nexora Corporate Platform
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                A modern corporate website designed with clean UI,
                responsive layout, admin dashboard and SEO optimized
                architecture for maximum performance.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                View Details
                <ExternalLink size={18} />
              </button>
            </div>

            {/* Right */}

            <div className="p-3">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-5">

                {/* Browser */}

                <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900">

                  {/* Top Bar */}

                  <div className="flex items-center gap-2 border-b border-border px-5 py-4">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />

                    <div className="ml-4 h-8 flex-1 rounded-full bg-muted" />
                  </div>

                  {/* Website */}

                  <div className="space-y-6 p-6">

                    <div className="h-5 md:h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400" />

                    <div className="grid grid-cols-3 gap-4">

                      <div className="h-24 rounded-xl bg-muted" />
                      <div className="h-24 rounded-xl bg-muted" />
                      <div className="h-24 rounded-xl bg-muted" />

                    </div>

                    <div className="h-28 rounded-2xl bg-muted" />

                  </div>
                </div>

                {/* Floating Cards */}

                <div className="absolute -right-5 top-12 h-24 w-24 rounded-2xl bg-white/20 backdrop-blur-md" />

                <div className="absolute -bottom-5 left-10 h-20 w-20 rounded-full bg-cyan-300/30 blur-2xl" />
              </div>
            </div>

          </div>
        </div>

        {/* Button */}

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-xl border border-border px-7 py-3 font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-xl"
          >
            View All Projects

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}