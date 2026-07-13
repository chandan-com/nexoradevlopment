import { LucideIcon, TrendingUp } from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  growth: string;
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
  growth,
}: Props) {
  return (
    <div className="group rounded-2xl shadow-xl bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-1 text-sm text-emerald-600">
            <TrendingUp size={16} />
            {growth} this month
          </div>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon className="text-white" size={26} />
        </div>

      </div>

    </div>
  );
}