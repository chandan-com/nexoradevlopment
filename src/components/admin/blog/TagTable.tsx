"use client";

import { Pencil, Trash2 } from "lucide-react";

const tags = [
  {
    id: 1,
    name: "Next.js",
    slug: "next-js",
    blogs: 18,
  },
  {
    id: 2,
    name: "React",
    slug: "react",
    blogs: 14,
  },
  {
    id: 3,
    name: "SEO",
    slug: "seo",
    blogs: 9,
  },
  {
    id: 4,
    name: "MongoDB",
    slug: "mongodb",
    blogs: 7,
  },
];

export default function TagTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">

      <div className="border-b border-border p-6">

        <h2 className="text-xl font-bold">
          All Tags
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-border">

              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Slug
              </th>

              <th className="px-6 py-4 text-left">
                Blogs
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {tags.map((tag) => (

              <tr
                key={tag.id}
                className="border-b border-border hover:bg-muted/40"
              >

                <td className="px-6 py-5 font-medium">
                  {tag.name}
                </td>

                <td className="px-6 py-5">
                  {tag.slug}
                </td>

                <td className="px-6 py-5">
                  {tag.blogs}
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button
                      className="rounded-lg border border-border p-2 hover:bg-blue-600 hover:text-white"
                    >

                      <Pencil size={18} />

                    </button>

                    <button
                      className="rounded-lg border border-border p-2 hover:bg-red-600 hover:text-white"
                    >

                      <Trash2 size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}