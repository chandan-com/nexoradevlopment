import Link from "next/link";
import { Plus } from "lucide-react";
import PortfolioTable from "@/src/components/admin/portfolio/PortfolioTable";




export default function PortfolioPage() {
  return (
    <section className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Portfolio
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage portfolio projects.
          </p>
        </div>

        <Link
          href="/admin/portfolio/add"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Project
        </Link>

      </div>

      <PortfolioTable/>

    </section>
  );
}