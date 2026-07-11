import {
  SiFacebook,
  SiInstagram,
} from "react-icons/si";
import { Search,
        Globe,
 } from "lucide-react";
const sources = [
  {
    icon: Search,
    name: "Google Search",
    visitors: "58%",
    color: "bg-blue-600",
  },
  {
    icon: Globe,
    name: "Direct",
    visitors: "22%",
    color: "bg-green-600",
  },
  {
    icon: SiFacebook,
    name: "Facebook",
    visitors: "12%",
    color: "bg-indigo-600",
  },
  {
    icon: SiInstagram,
    name: "Instagram",
    visitors: "8%",
    color: "bg-pink-600",
  },
];

export default function TrafficSources() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-xl">

      <h2 className="mb-6 text-xl font-bold">
        Traffic Sources
      </h2>

      <div className="space-y-5">

        {sources.map((source) => {
          const Icon = source.icon;

          return (
            <div key={source.name}>

              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className={`${source.color} rounded-lg p-2 text-white`}>
                    <Icon size={18} />
                  </div>

                  <span>{source.name}</span>

                </div>

                <span className="font-semibold">
                  {source.visitors}
                </span>

              </div>

              <div className="h-2 rounded-full bg-muted">

                <div
                  style={{ width: source.visitors }}
                  className={`${source.color} h-full rounded-full`}
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}