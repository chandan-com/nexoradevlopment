import {
  MessageSquare,
  FileText,
  FolderKanban,
  User,
  Briefcase,
} from "lucide-react";

const activities = [
  {
    icon: MessageSquare,
    title: "New contact message received",
    time: "2 min ago",
    color: "bg-green-500",
  },
  {
    icon: FileText,
    title: "Blog 'Node.js API Guide' published",
    time: "1 hour ago",
    color: "bg-blue-500",
  },
  {
    icon: FolderKanban,
    title: "Portfolio 'Restaurant Website' added",
    time: "Yesterday",
    color: "bg-violet-500",
  },
  {
    icon: User,
    title: "About section updated",
    time: "2 days ago",
    color: "bg-orange-500",
  },
  {
    icon: Briefcase,
    title: "Service 'SEO Optimization' created",
    time: "3 days ago",
    color: "bg-pink-500",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-xl">

      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Recent Activity
        </h2>

        <p className="text-sm text-muted-foreground">
          Latest updates from your website.
        </p>
      </div>

      <div className="space-y-4">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-border p-4 transition hover:bg-muted/50"
            >

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${activity.color} text-white`}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">

                <h3 className="font-medium">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {activity.time}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}