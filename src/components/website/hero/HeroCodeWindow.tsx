"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Terminal,
  GitBranch,
  Globe,
} from "lucide-react";

const codeLines = [
  "const app = new Nexora();",
  "",
  "app.use(NextJS);",
  "app.use(NodeJS);",
  "app.use(TypeScript);",
  "",
  "app.deploy();",
];

export default function HeroCodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8 }}
      whileHover={{
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
      }}
      className="relative w-full max-w-[520px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="overflow-hidden rounded-3xl  bg-background shadow-2xl"
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-5 py-4">

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="text-sm font-medium text-muted-foreground">
            Nexora Developers
          </div>

          <GitBranch size={18} />
        </div>

        {/* Code */}
        <div className="space-y-3 p-6 font-mono text-sm">

          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * .15,
              }}
              className="flex gap-4"
            >
              <span className="w-5 text-muted-foreground">
                {index + 1}
              </span>

              <span>{line}</span>
            </motion.div>
          ))}

          {/* Cursor */}
          <motion.div
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: .8,
            }}
            className="ml-9 h-5 w-[2px] bg-blue-500"
          />
        </div>

        {/* Terminal */}
        <div className="border-t  bg-muted/40 p-5">

          <div className="mb-3 flex items-center gap-2">
            <Terminal size={16} />
            <span className="text-sm font-medium">
              Terminal
            </span>
          </div>

          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="font-mono text-sm text-green-500"
          >
            ✔ Project compiled successfully...
          </motion.p>

          <div className="mt-4 flex items-center justify-between">

            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2
                size={16}
                className="text-green-500"
              />
              Live
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Globe
                size={16}
                className="text-blue-500"
              />
              nexora.dev
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}