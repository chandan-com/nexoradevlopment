import {
  Users,
  Eye,
  MousePointerClick,
  MessageSquare,
} from "lucide-react";

const cards = [
  {
    title: "Total Visitors",
    value: "18,540",
    growth: "+12%",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    title: "Page Views",
    value: "42,185",
    growth: "+8%",
    icon: Eye,
    color: "bg-violet-600",
  },
  {
    title: "Unique Visitors",
    value: "12,430",
    growth: "+15%",
    icon: MousePointerClick,
    color: "bg-emerald-600",
  },
  {
    title: "Contact Messages",
    value: "326",
    growth: "+4%",
    icon: MessageSquare,
    color: "bg-orange-500",
  },
];

export default function OverviewCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl bg-card p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted-foreground">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>

                <p className="mt-2 text-sm font-medium text-green-600">
                  {card.growth} this month
                </p>

              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.color} text-white`}
              >
                <Icon size={28} />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}