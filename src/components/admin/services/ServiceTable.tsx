"use client";

import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Static Website",
    category: "Website",
    price: 15000,
    popular: false,
  },
  {
    id: 2,
    title: "Dynamic Website",
    category: "Website",
    price: 35000,
    popular: true,
  },
  {
    id: 3,
    title: "E-Commerce",
    category: "E-Commerce",
    price: 65000,
    popular: false,
  },
];

export default function ServiceTable() {
  return (
    <div className="overflow-x-auto rounded-3xl shadow-xl bg-card">

      <table className="w-full">

        <thead className="border-b border-border bg-muted/40">

          <tr>

            <th className="px-6 py-4 text-left">
              Title
            </th>

            <th className="px-6 py-4 text-left">
              Category
            </th>

            <th className="px-6 py-4 text-left">
              Price
            </th>

            <th className="px-6 py-4 text-center">
              Popular
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {services.map((service) => (

            <tr
              key={service.id}
              className="border-b border-border last:border-0"
            >

              <td className="px-6 py-5 font-medium">
                {service.title}
              </td>

              <td className="px-6 py-5">
                {service.category}
              </td>

              <td className="px-6 py-5">
                ₹ {service.price.toLocaleString()}
              </td>

              <td className="px-6 py-5 text-center">

                {service.popular ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Yes
                  </span>
                ) : (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    No
                  </span>
                )}

              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center gap-3">

                  <button className="rounded-lg border border-border p-2 transition hover:bg-muted">
                    <Eye size={18} />
                  </button>

                  <Link
                    href={`/admin/services/edit/${service.id}`}
                    className="rounded-lg border border-border p-2 transition hover:bg-muted"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button className="rounded-lg border border-red-500/30 p-2 text-red-500 transition hover:bg-red-500 hover:text-white">
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