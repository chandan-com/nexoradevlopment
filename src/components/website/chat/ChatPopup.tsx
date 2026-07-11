"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Minus,
  Circle,
  Headphones,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ChatPopup({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: .9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 80,
            scale: .9,
          }}
          transition={{
            duration: .3,
          }}
          className="fixed bottom-28 right-6 z-[999] w-[360px] overflow-hidden rounded-[30px] border border-border bg-background shadow-2xl"
        >

          {/* Header */}

          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-6 text-white">

            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

                  <Headphones size={24} />

                </div>

                <div>

                  <h3 className="font-bold">
                    Nexora Support
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm">

                    <Circle
                      size={10}
                      fill="currentColor"
                    />

                    Online

                  </div>

                </div>

              </div>

              <button
                onClick={onClose}
                className="rounded-xl bg-white/10 p-2 transition hover:bg-white/20"
              >
                <Minus size={18} />
              </button>

            </div>

          </div>

          {/* Chat */}

          <div className="space-y-5 p-6">

            <div className="flex">

              <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-muted px-4 py-3">

                <p className="text-sm leading-7">

                  👋 Hi there!

                  <br />

                  Welcome to Nexora Developers.

                  <br />

                  How can we help you today?

                </p>

                <span className="mt-2 block text-xs text-muted-foreground">
                  Just now
                </span>

              </div>

            </div>

          </div>

          {/* Input */}

          <div className="border-t border-border p-5">

            <div className="flex items-center gap-3">

              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <button className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700">

                <Send size={18} />

              </button>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}