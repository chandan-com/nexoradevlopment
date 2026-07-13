import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

export default function ViewTestimonialPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            View Testimonial
          </h1>

          <p className="text-muted-foreground">
            Client testimonial details.
          </p>

        </div>

        <div className="flex gap-3">

          <Link
            href="/admin/testimonials"
            className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:bg-muted"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <Link
            href="/admin/testimonials/edit/1"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <Pencil size={18} />
            Edit
          </Link>

        </div>

      </div>

      {/* Card */}

      <div className="rounded-3xl bg-card p-8 shadow-xl">

        <div className="flex flex-col items-center">

          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="Client"
            className="h-28 w-28 rounded-full object-cover"
          />

          <h2 className="mt-5 text-2xl font-bold">
            Rahul Sharma
          </h2>

          <p className="text-muted-foreground">
            Playbox Arena
          </p>

        </div>

        <div className="mt-10 rounded-2xl bg-muted p-6">

          <h3 className="mb-4 text-lg font-semibold">
            Client Review
          </h3>

          <p className="leading-8 text-muted-foreground">
            Nexora Developers created our website exactly as we
            wanted. The design is modern, responsive, and the
            development process was smooth. Highly recommended for
            professional web development services.
          </p>

        </div>

      </div>

    </div>
  );
}