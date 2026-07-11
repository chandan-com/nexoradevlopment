import {
  ArrowRight,
  Check,
  Code2,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  "Custom Website Development",
  "Modern UI/UX Design",
  "SEO & Performance Optimized",
  "Long-Term Maintenance",
];

const cards = [
  {
    icon: Code2,
    title: "Modern Tech",
    desc: "Next.js, React, Node.js",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    desc: "Mobile First Design",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "Optimized Workflow",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Best Practices",
  },
];

export default function About() {
  return (
  <section
    id="about"
    className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24"
  >
    {/* Background Glow */}

    <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

    <div className="mx-auto max-w-7xl px-6">

      {/* Heading */}

      <div className="mb-20 max-w-2xl">

        {/* <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600">
          About Nexora Developers
        </span> */}

        <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-5xl">
          Building Digital Products
          <br />
          That Help Businesses Grow.
        </h2>

      </div>

      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="text-lg leading-8 text-muted-foreground">

            We create premium websites and web applications
            focused on speed, scalability and exceptional user
            experience.

            Every project is designed to strengthen your brand,
            increase conversions and support long-term business
            growth.

          </p>

          {/* Feature List */}

          <div className="mt-10 space-y-5">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">

                  <Check size={18} />

                </div>

                <span className="text-lg font-medium">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* Button */}

          

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className={`rounded-3xl shadow-xl bg-card p-7 transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-xl ${
                  index % 2 !== 0 ? "lg:mt-12" : ""
                }`}
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">

                  <Icon size={28} />

                </div>

                <h3 className="mt-6 text-xl font-semibold">

                  {card.title}

                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">

                  {card.desc}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </div>

  </section>
);
}