import Link from "next/link";
import { Plus } from "lucide-react";
import ServiceTable from "@/src/components/admin/services/ServiceTable";




export default function ServicesPage() {
  return (
    <section className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Services
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage your website service packages.
          </p>
        </div>

        <Link
          href="/admin/services/add"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Service
        </Link>

      </div>

      <ServiceTable/>

    </section>
  );
}