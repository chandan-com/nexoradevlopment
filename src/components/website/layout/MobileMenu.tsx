"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Technologies", href: "#technologies" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-background"
          >
            <div className="flex items-center justify-between p-6">

              <h2 className="text-xl font-bold">
                Menu
              </h2>

              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>

            </div>

            <nav className="flex h-full flex-col gap-6 bg-background px-6 pt-8">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4">
                <ThemeToggle />
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="rounded-xl border border-border py-3 text-center font-medium"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
                >
                  Sign Up
                </Link>
              </div>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}