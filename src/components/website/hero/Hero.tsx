import HeroBackground from "./HeroBackground";
import HeroCodeWindow from "./HeroCodeWindow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background"
    >
      <HeroBackground />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-4  pt-24 pb-8 lg:flex-row lg:justify-between">

        {/* LEFT */}
        <div className="max-w-2xl lg:text-left">

          {/* <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            🚀 Building Digital Products Since 2025
          </span> */}

          <h1 className="mt-8 text-4xl py-2 font-extrabold leading-tight text-foreground sm:text-5xl lg:text-4xl">
            We Build
            <span className="text-blue-600"> Modern</span>
            <br />
            Websites & Mobile Apps
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground lg:text-lg">
            Nexora Developers creates beautiful websites,
            scalable admin panels and powerful web applications
            using modern technologies like Next.js, Node.js and
            MongoDB.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#portfolio"
              className="rounded-sm border border-border px-5 py-3 font-semibold transition hover:bg-muted"
            >
              View Portfolio
            </Link>

          </div>

          {/* Bottom */}

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground lg:justify-start">

            <div>
              <h3 className="text-2xl font-bold text-foreground">
                150+
              </h3>

              Projects
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground">
                120+
              </h3>

              Clients
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground">
                99%
              </h3>

              Satisfaction
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex w-full justify-center lg:w-auto">
          <HeroCodeWindow />
        </div>

      </div>
    </section>
  );
}