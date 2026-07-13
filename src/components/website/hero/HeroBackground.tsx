"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-24 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Grid */}
      <div
  className="absolute inset-0 opacity-[0.02] dark:opacity-[0.08]"
  style={{
    backgroundImage: `
      linear-gradient(to right, currentColor 1px, transparent 1px),
      linear-gradient(to bottom, currentColor 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",

    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",

    maskImage:
      "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
  }}
/>

      {/* Floating Dot */}
      {/* <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-20 top-44 h-4 w-4 rounded-full bg-blue-500"
      /> */}

      {/* <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute right-20 top-72 h-6 w-6 rounded-full border border-blue-500"
      /> */}

      {/* <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-24 left-1/4 h-12 w-12 rounded-xl border border-blue-500/30"
      /> */}
    </>
  );
}