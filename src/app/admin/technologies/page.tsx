import Link from "next/link";
import { Plus } from "lucide-react";
import TechnologyTable from "@/src/components/admin/technologies/TechnologyTable";




export default function TechnologiesPage() {
  return (
    <section className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Technologies
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage website technologies.
          </p>
        </div>

        <Link
          href="/admin/technologies/add"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Technology
        </Link>

      </div>

      <TechnologyTable />

    </section>
  );
}