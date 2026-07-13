"use client";

import { Pencil, Trash2 } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Development",
    slug: "development",
    blogs: 12,
  },
  {
    id: 2,
    name: "Business",
    slug: "business",
    blogs: 8,
  },
  {
    id: 3,
    name: "SEO",
    slug: "seo",
    blogs: 5,
  },
];

export default function CategoryTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">

      <table className="w-full">

        <thead className="border-b border-border">

          <tr>

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

          {categories.map((item) => (

            <tr
              key={item.id}
              className="border-b border-border"
            >

              <td className="px-6 py-5">
                {item.name}
              </td>

              <td className="px-6 py-5">
                {item.slug}
              </td>

              <td className="px-6 py-5">
                {item.blogs}
              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center gap-3">

                  <button className="rounded-lg border border-border p-2 hover:bg-blue-600 hover:text-white">

                    <Pencil size={18} />

                  </button>

                  <button className="rounded-lg border border-border p-2 hover:bg-red-600 hover:text-white">

                    <Trash2 size={18} />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}