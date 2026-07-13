

import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How much does a website cost?",
    answer: "Website pricing depends on your requirements.",
  },
  {
    id: 2,
    question: "How long does development take?",
    answer: "Usually 7 to 30 working days.",
  },
  {
    id: 3,
    question: "Do you provide SEO?",
    answer: "Yes, we provide basic and advanced SEO services.",
  },
];

export default function FAQPage() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            FAQ Control
          </h1>

          <p className="text-muted-foreground">
            Manage frequently asked questions.
          </p>

        </div>

        <Link
          href="/admin/faq/add"
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add FAQ
        </Link>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-3xl bg-card shadow-xl">

        <table className="min-w-[900px] w-full">

          <thead className="bg-muted/40">

            <tr>

              <th className="px-6 py-4 text-left">
                Question
              </th>

              <th className="px-6 py-4 text-left">
                Answer
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {faqs.map((faq) => (

              <tr
                key={faq.id}
                className="border-t border-border"
              >

                <td className="px-6 py-5 font-medium">
                  {faq.question}
                </td>

                <td className="max-w-md px-6 py-5 text-muted-foreground">
                  {faq.answer}
                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/admin/faq/edit/${faq.id}`}
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

    </section>
  );
}