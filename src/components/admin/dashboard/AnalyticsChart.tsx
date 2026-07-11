"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "1", visitors: 120 },
  { day: "2", visitors: 145 },
  { day: "3", visitors: 132 },
  { day: "4", visitors: 168 },
  { day: "5", visitors: 182 },
  { day: "6", visitors: 195 },
  { day: "7", visitors: 210 },
  { day: "8", visitors: 198 },
  { day: "9", visitors: 225 },
  { day: "10", visitors: 240 },
  { day: "11", visitors: 255 },
  { day: "12", visitors: 230 },
  { day: "13", visitors: 265 },
  { day: "14", visitors: 280 },
  { day: "15", visitors: 295 },
  { day: "16", visitors: 310 },
  { day: "17", visitors: 300 },
  { day: "18", visitors: 325 },
  { day: "19", visitors: 340 },
  { day: "20", visitors: 360 },
  { day: "21", visitors: 345 },
  { day: "22", visitors: 370 },
  { day: "23", visitors: 385 },
  { day: "24", visitors: 395 },
  { day: "25", visitors: 410 },
  { day: "26", visitors: 425 },
  { day: "27", visitors: 440 },
  { day: "28", visitors: 430 },
  { day: "29", visitors: 455 },
  { day: "30", visitors: 480 },
];

export default function AnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

        <XAxis
          dataKey="day"
          tick={{ fontSize: 12 }}
        />

        <YAxis
          tick={{ fontSize: 12 }}
        />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="visitors"
          stroke="#2563eb"
          strokeWidth={3}
          fill="url(#visitorsGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}