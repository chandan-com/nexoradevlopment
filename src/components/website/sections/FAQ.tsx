"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Rocket,
  Headphones,
  Smartphone,
} from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We build modern websites, web applications, admin dashboards, e-commerce platforms and custom software tailored to your business needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites are delivered within 1–3 weeks. Larger applications depend on the project scope and features.",
  },
  {
    question: "Will my website be mobile friendly?",
    answer:
      "Absolutely. Every project is designed with a mobile-first approach and works perfectly on all screen sizes.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. We provide maintenance, bug fixes and future feature updates after the project is launched.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We primarily work with Next.js, React, Node.js, MongoDB, TypeScript and Tailwind CSS.",
  },
];

const features = [
  {
    icon: Rocket,
    text: "Fast Delivery",
  },
  {
    icon: ShieldCheck,
    text: "Secure Development",
  },
  {
    icon: Smartphone,
    text: "Responsive Design",
  },
  {
    icon: Headphones,
    text: "Lifetime Support",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know before starting your project with
            Nexora Developers.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          {/* Left Card */}

          <div className="rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold">
              Let's Build Something Amazing
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              We help startups and businesses create fast, scalable and
              beautiful digital products.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-4"
                  >
                    <div className="rounded-xl bg-white/20 p-3 backdrop-blur">
                      <Icon size={20} />
                    </div>

                    <span className="font-medium">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:scale-105"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* FAQ */}

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-3xl hover:shadow-xl shadow-sm transition-all duration-300 ${
                  open === index
                    ? "border-blue-500 bg-card shadow-xl"
                    : "border-border bg-card hover:border-blue-500/40"
                }`}
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <h3 className="text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <div
                    className={`rounded-full bg-blue-600 p-2 text-white transition ${
                      open === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-7 py-6">
                      <p className="leading-8 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}