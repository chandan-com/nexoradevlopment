"use client";

import { Trash2 } from "lucide-react";

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

export default function TechnologyTable() {
  return (
    <div className="overflow-hidden rounded-3xl shadow-xl bg-card">

      <table className="w-full">

        <thead className="bg-muted/40">

          <tr>

            <th className="px-6 py-4 text-left">
              Technology
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {technologies.map((item) => (

            <tr
              key={item}
              className="border-t border-border"
            >

              <td className="px-6 py-5">
                {item}
              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center">

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