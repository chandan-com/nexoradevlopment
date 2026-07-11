"use client";

import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

type Props = {
  open: boolean;
  onClick: () => void;
};

export default function ChatButton({
  open,
  onClick,
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl"
    >
      <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />

      {open ? (
        <X size={28} className="relative z-10" />
      ) : (
        <MessageCircle
          size={28}
          className="relative z-10"
        />
      )}
    </motion.button>
  );
}