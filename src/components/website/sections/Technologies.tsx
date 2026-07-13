import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const technologies = [
  { icon: SiNextdotjs, color: "text-black dark:text-white" },
  { icon: SiReact, color: "text-sky-500" },
  { icon: SiNodedotjs, color: "text-green-600" },
  { icon: SiMongodb, color: "text-green-500" },
  { icon: SiTailwindcss, color: "text-cyan-500" },
  { icon: SiJavascript, color: "text-yellow-400" },
  { icon: SiTypescript, color: "text-blue-500" },
  { icon: SiFlutter, color: "text-sky-400" },
  { icon: SiFirebase, color: "text-orange-500" },
  { icon: SiGit, color: "text-red-500" },
  { icon: SiGithub, color: "text-black dark:text-white" },
  { icon: SiPostman, color: "text-orange-500" },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Powered By Modern Technologies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Building fast, scalable and modern digital products.
          </p>
        </div>

        {/* Animated Icons */}

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="group animate-float rounded-full bg-card/70 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-blue-500/30"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <Icon className={`text-5xl ${tech.color}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}