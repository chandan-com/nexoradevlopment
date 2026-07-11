"use client";

import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";
import { useState } from "react";
import DeleteBlogModal from "./DeleteBlogModal";
const blogs = [
  {
    id: 1,
    title: "Why Every Business Needs a Website",
    category: "Business",
    author: "Admin",
    status: "Published",
    views: 1250,
    date: "10 Jul 2026",
  },
  {
    id: 2,
    title: "Next.js Complete Guide",
    category: "Development",
    author: "Admin",
    status: "Draft",
    views: 85,
    date: "08 Jul 2026",
  },
  {
    id: 3,
    title: "Top SEO Tips",
    category: "SEO",
    author: "Admin",
    status: "Published",
    views: 512,
    date: "05 Jul 2026",
  },
];

export default function BlogTable() {
    const [open, setOpen] = useState(false);
const [selected, setSelected] = useState("");
  return (
    <div className="rounded-3xl shadow-xl bg-card">

      {/* Header */}

      <div className="flex flex-col gap-4 border-b border-border p-6 md:flex-row md:items-center md:justify-between">

        <h2 className="text-xl font-bold">
          All Blogs
        </h2>

        <div className="relative w-full md:w-80">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            type="text"
            placeholder="Search blog..."
            className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 outline-none focus:border-blue-600"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-border text-left">

              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Author</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Views</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {blogs.map((blog) => (

              <tr
                key={blog.id}
                className="border-b border-border hover:bg-muted/40"
              >

                <td className="px-6 py-5 font-medium">
                  {blog.title}
                </td>

                <td className="px-6 py-5">
                  {blog.category}
                </td>

                <td className="px-6 py-5">
                  {blog.author}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      blog.status === "Published"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400"
                    }`}
                  >
                    {blog.status}
                  </span>

                </td>

                <td className="px-6 py-5">
                  {blog.views}
                </td>

                <td className="px-6 py-5">
                  {blog.date}
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/blog/${blog.id}`}
                      className="rounded-lg border border-border p-2 hover:bg-muted"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/admin/blog/edit/${blog.id}`}
                      className="rounded-lg border border-border p-2 hover:bg-blue-600 hover:text-white"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
  onClick={() => {
    setSelected(blog.title);
    setOpen(true);
  }}
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
  <DeleteBlogModal
  open={open}
  title={selected}
  onClose={() => setOpen(false)}
  onDelete={() => {
    console.log("Delete");
    setOpen(false);
  }}
/>
}