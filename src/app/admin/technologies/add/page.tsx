import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";
import TechnologyForm from "@/src/components/admin/technologies/TechnologyForm";

export default function AddTechnologyPage() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Add Technology
          </h1>

          <p className="mt-2 text-muted-foreground">
            Add a technology to display on your website.
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            href="/admin/technologies"
            className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:bg-muted"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

      </div>

      <TechnologyForm />

    </section>
  );
}