import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FAQForm from "@/src/components/admin/faq/FAQForm";

export default function EditFAQPage() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Edit FAQ
          </h1>

          <p className="mt-2 text-muted-foreground">
            Update your frequently asked question.
          </p>

        </div>

        <Link
          href="/admin/faq"
          className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:bg-muted"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      <FAQForm />

    </section>
  );
}