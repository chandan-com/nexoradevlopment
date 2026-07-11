"use client";

import { useEffect, useState } from "react";

type PortfolioFormProps = {
  initialData?: {
    title: string;
    slug: string;
    category: string;
    description: string;
    projectUrl: string;
    githubUrl: string;
    featured: boolean;
    technologies: string[];
  };
};

export default function PortfolioForm({
  initialData,
}: PortfolioFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [category, setCategory] = useState(
    initialData?.category ?? "Business Website"
  );
  const [description, setDescription] = useState(
    initialData?.description ?? ""
  );
  const [projectUrl, setProjectUrl] = useState(
    initialData?.projectUrl ?? ""
  );
  const [githubUrl, setGithubUrl] = useState(
    initialData?.githubUrl ?? ""
  );
  const [featured, setFeatured] = useState(
    initialData?.featured ?? false
  );

  const [technologies, setTechnologies] = useState<string[]>(
    initialData?.technologies ?? []
  );

  const [tech, setTech] = useState("");

  useEffect(() => {
    if (!initialData) {
      setSlug(
        title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
      );
    }
  }, [title, initialData]);

  const addTechnology = () => {
    if (!tech.trim()) return;

    setTechnologies([...technologies, tech]);

    setTech("");
  };

  const removeTechnology = (index: number) => {
    setTechnologies(
      technologies.filter((_, i) => i !== index)
    );
  };

  return (
    <form className="rounded-3xl shadow-xl bg-card p-8">

      <div className="grid gap-6 md:grid-cols-2">

        {/* Title */}

        <div className="md:col-span-2">

          <label className="mb-2 block font-medium">
            Project Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
          />

        </div>

        {/* Slug */}

        <div>

          <label className="mb-2 block font-medium">
            Slug
          </label>

          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
          />

        </div>

        {/* Category */}

        <div>

          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3"
          >
            <option>Business Website</option>
            <option>E-Commerce</option>
            <option>Dashboard</option>
            <option>Android App</option>
            <option>iOS App</option>
          </select>

        </div>

        {/* Live URL */}

        <div>

          <label className="mb-2 block font-medium">
            Live URL
          </label>

          <input
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full rounded-xl border border-border bg-background px-4 py-3"
          />

        </div>

        {/* Github */}

        <div>

          <label className="mb-2 block font-medium">
            Github URL
          </label>

          <input
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="https://github.com/..."
            className="w-full rounded-xl border border-border bg-background px-4 py-3"
          />

        </div>

        {/* Description */}

        <div className="md:col-span-2">

          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3"
          />

        </div>

        {/* Technology */}

        <div className="md:col-span-2">

          <label className="mb-2 block font-medium">
            Technologies
          </label>

          <div className="flex gap-3">

            <input
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              placeholder="Next.js"
              className="flex-1 rounded-xl border border-border bg-background px-4 py-3"
            />

            <button
              type="button"
              onClick={addTechnology}
              className="rounded-xl bg-blue-600 px-5 text-white"
            >
              Add
            </button>

          </div>

          <div className="mt-4 flex flex-wrap gap-3">

            {technologies.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-muted px-4 py-2"
              >

                {item}

                <button
                  type="button"
                  onClick={() => removeTechnology(index)}
                  className="text-red-500"
                >
                  ×
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* Featured */}

        <div className="md:col-span-2 flex items-center gap-3">

          <input
            type="checkbox"
            checked={featured}
            onChange={(e) =>
              setFeatured(e.target.checked)
            }
          />

          <label>
            Featured Project
          </label>

        </div>

      </div>

      <div className="mt-8 flex justify-end gap-4">

        <button
          type="button"
          className="rounded-xl border border-border px-6 py-3"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Save Project
        </button>

      </div>

    </form>
  );
}