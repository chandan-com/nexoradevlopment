

import Link from "next/link";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "Playbox Arena",
    review:
      "Nexora Developers delivered our website on time with excellent quality.",
  },
  {
    id: 2,
    name: "Amit Kumar",
    company: "Tech Solutions",
    review:
      "Professional team with great communication throughout the project.",
  },
];

export default function TestimonialPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Testimonials
          </h1>

          <p className="text-muted-foreground">
            Manage client testimonials.
          </p>

        </div>

        <Link
          href="/admin/testimonials/add"
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Testimonial
        </Link>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-3xl bg-card shadow-xl">

        <table className="min-w-[800px] w-full">

          <thead className="bg-muted/40">

            <tr>

              <th className="px-6 py-4 text-left">
                Client Name
              </th>

              <th className="px-6 py-4 text-left">
                Company
              </th>

              <th className="px-6 py-4 text-left">
                Review
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {testimonials.map((item) => (

              <tr
                key={item.id}
                className="border-t border-border"
              >

                <td className="px-6 py-5 font-medium">
                  {item.name}
                </td>

                <td className="px-6 py-5">
                  {item.company}
                </td>

                <td className="max-w-md px-6 py-5 text-muted-foreground">
                  {item.review}
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/admin/testimonials/view/${item.id}`}
                      className="rounded-lg border p-2 transition hover:bg-muted"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/admin/testimonial/edit/${item.id}`}
                      className="rounded-lg border p-2 transition hover:bg-muted"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button className="rounded-lg border border-red-500 p-2 text-red-500 transition hover:bg-red-500 hover:text-white">
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