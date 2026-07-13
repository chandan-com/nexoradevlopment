import OverviewCards from "@/src/components/analytics/OverviewCards";
import TopPages from "@/src/components/analytics/TopPages";
import TrafficSources from "@/src/components/analytics/TrafficSources";


export default function AnalyticsPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Website Analytics
        </h1>

        <p className="text-muted-foreground">
          Track your website performance and visitor insights.
        </p>
      </div>

      <OverviewCards />

      <div className="grid gap-6 xl:grid-cols-1">


        <TrafficSources />

      </div>

      <TopPages />

    </div>
  );
}