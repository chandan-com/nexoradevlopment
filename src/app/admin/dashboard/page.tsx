import AnalyticsChart from "@/src/components/admin/dashboard/AnalyticsChart";
import StatsCard from "@/src/components/admin/dashboard/StatsCard";
import {
  FileText,
  FolderKanban,
  Briefcase,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Stats */}

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Blogs"
          value="25"
          growth="+12%"
          icon={FileText}
          color="bg-blue-600"
        />

        <StatsCard
          title="Portfolio"
          value="18"
          growth="+8%"
          icon={FolderKanban}
          color="bg-violet-600"
        />

        <StatsCard
          title="Services"
          value="6"
          growth="+4%"
          icon={Briefcase}
          color="bg-orange-500"
        />

        <StatsCard
          title="Messages"
          value="42"
          growth="+18%"
          icon={Mail}
          color="bg-emerald-600"
        />

      </section>

      {/* Analytics + Quick Actions */}

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Analytics */}

        <div className="rounded-2xl shadow-xl bg-card p-4 sm:p-6 xl:col-span-2">

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-lg font-bold sm:text-xl">
                Website Analytics
              </h2>

              <p className="text-sm text-muted-foreground">
                Last 30 Days
              </p>
            </div>

            <Link href="/admin/analytics">
  <button className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted">
    View Report
  </button>
</Link>

          </div>

          <div className="h-72 sm:h-72">
  <AnalyticsChart/>
</div>

        </div>

        {/* Quick Actions */}

        <div className="rounded-2xl shadow-xl bg-card p-4 sm:p-6">

          <h2 className="mb-6 text-lg font-bold">
            Quick Actions
          </h2>

          <div className="space-y-3">

            <button className="w-full rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700">
              + Add Blog
            </button>

            <button className="w-full rounded-xl border border-border py-3 transition hover:bg-muted">
              + Add Portfolio
            </button>

            <button className="w-full rounded-xl border border-border py-3 transition hover:bg-muted">
              + Add Service
            </button>

            <button className="w-full rounded-xl border border-border py-3 transition hover:bg-muted">
              View Messages
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}