"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingBar from "./LoadingBar";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "border-b border-slate-200/60 bg-background shadow-lg dark:border-slate-800"
          : "bg-transparent"
        }`}
    >
      <LoadingBar />
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${isScrolled ? "h-16" : "h-20"
          }`}
      >
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="rounded-xl border border-border px-5 py-2.5 font-medium transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg"
            >
              Sign Up

            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}