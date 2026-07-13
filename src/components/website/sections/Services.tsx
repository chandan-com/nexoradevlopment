"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const packages = [
  {
    name: "Static Website",
    price: "15,000",
    popular: false,
    description:
      "Perfect for startups, portfolios and business websites.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "SEO Friendly",
      "Contact Form",
      "Fast Loading",
      "Free Deployment",
    ],
  },
  {
    name: "Dynamic Website",
    price: "35,000",
    popular: true,
    description:
      "Ideal for businesses needing an admin panel and dynamic content.",
    features: [
      "Unlimited Pages",
      "Admin Dashboard",
      "Authentication",
      "Blog System",
      "Database",
      "API Integration",
      "SEO Optimized",
    ],
  },
  {
    name: "E-Commerce",
    price: "65,000",
    popular: false,
    description:
      "Complete online store with payment and order management.",
    features: [
      "Shopping Cart",
      "Payment Gateway",
      "Order Management",
      "Inventory",
      "Customer Dashboard",
      "Admin Panel",
      "Reports",
    ],
  },
  {
    name: "Android & ISO",
    price: "65,000",
    popular: false,
    description:
      "Complete online store with payment and order management.",
    features: [
      "Shopping Cart",
      "Payment Gateway",
      "Order Management",
      "Inventory",
      "Customer Dashboard",
      "Admin Panel",
      "Reports",
    ],
  },
];

export default function Packages() {
  return (
   <section
  id="services"
  className="overflow-hidden py-20 lg:py-24"
>
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-4xl font-bold lg:text-5xl">
            Choose the Right Package
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Transparent pricing with everything you need to launch your
            business online.
          </p>

        </div>

        {/* Slider */}

        <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  }}
  className="!overflow-visible pb-14"
>
          {packages.map((pkg) => (
            <SwiperSlide
  key={pkg.name}
  className="!h-auto py-4 mb-5"
>

              <div
  className={`relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-lg ${
  pkg.popular ? "border-blue-600 ring-2 ring-blue-600/20" : ""
}`}
>

                {pkg.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white mb-10">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="mt-6 text-2xl font-bold">
                  {pkg.name}
                </h3>

                <p className="mt-6 text-muted-foreground">
                  {pkg.description}
                </p>

                <div className="mt-6">

                  <span className="text-4xl font-bold">
                    ₹ {pkg.price}
                  </span>

                  <span className="ml-2 text-muted-foreground">
                    starting
                  </span>

                </div>

                <div className="my-6 h-px bg-border" />

                <div className="flex-1 space-y-2">

                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">

                        <Check size={12} />

                      </div>

                      <span>{feature}</span>

                    </div>
                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <Link
                    href="#"
                    className="flex-1 rounded-xl border border-border py-3 text-center font-semibold transition hover:bg-muted"
                  >
                    Details
                  </Link>

                  <Link
                    href="#contact"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Buy Now

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}