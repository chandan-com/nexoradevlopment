"use client";

import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nexora Corporate",
    category: "Business Website",
    featured: true,
  },
  {
    id: 2,
    title: "Playbox Arena",
    category: "Sports",
    featured: false,
  },
];

export default function PortfolioTable() {
  return (
    <div className="overflow-hidden rounded-3xl shadow-xl bg-card">

      <table className="w-full">

        <thead className="bg-muted/40">

          <tr>

            <th className="px-6 py-4 text-left">
              Project
            </th>

            <th className="px-6 py-4 text-left">
              Category
            </th>

            <th className="px-6 py-4 text-center">
              Featured
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (

            <tr
              key={project.id}
              className="border-t border-border"
            >

              <td className="px-6 py-5 font-medium">
                {project.title}
              </td>

              <td className="px-6 py-5">
                {project.category}
              </td>

              <td className="px-6 py-5 text-center">

                {project.featured ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    Yes
                  </span>
                ) : (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    No
                  </span>
                )}

              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center gap-3">

                  <button className="rounded-lg border p-2 hover:bg-muted">
                    <Eye size={18} />
                  </button>

                  <Link
                    href={`/admin/portfolio/edit/${project.id}`}
                    className="rounded-lg border p-2 hover:bg-muted"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button className="rounded-lg border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white">
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