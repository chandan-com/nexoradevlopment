import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";
import FAQForm from "@/src/components/admin/faq/FAQForm";


export default function AddFAQPage() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Add FAQ
          </h1>

          <p className="mt-2 text-muted-foreground">
            Add a new frequently asked question.
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            href="/admin/faq"
            className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:bg-muted"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href="/admin/faq/edit/1"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <Pencil size={18} />
            Edit
          </Link>

        </div>

      </div>

      <FAQForm />

    </section>
  );
}