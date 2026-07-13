import Link from "next/link";
import { ArrowLeft, CheckCircle, Trash2 } from "lucide-react";

export default function ViewContactPage() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Contact Message
          </h1>

          <p className="mt-2 text-muted-foreground">
            View customer enquiry details.
          </p>

        </div>

        <Link
          href="/admin/contacts"
          className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:bg-muted"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

      </div>

      {/* Card */}

      <div className="rounded-3xl bg-card p-8 shadow-xl">

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="text-sm text-muted-foreground">
              Name
            </label>

            <p className="mt-2 font-semibold">
              Rahul Sharma
            </p>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Email
            </label>

            <p className="mt-2 font-semibold">
              rahul@gmail.com
            </p>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Phone
            </label>

            <p className="mt-2 font-semibold">
              +91 9876543210
            </p>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Subject
            </label>

            <p className="mt-2 font-semibold">
              Business Website
            </p>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Date
            </label>

            <p className="mt-2 font-semibold">
              13 Jul 2026
            </p>

          </div>

          <div>

            <label className="text-sm text-muted-foreground">
              Status
            </label>

            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              New
            </span>

          </div>

        </div>

        {/* Message */}

        <div className="mt-8">

          <label className="text-sm text-muted-foreground">
            Message
          </label>

          <div className="mt-3 rounded-2xl border border-border bg-muted/30 p-6 leading-8">

            Hello Nexora Developers,

            <br /><br />

            I need a responsive business website with an admin panel.
            Please share your pricing and estimated delivery time.

            <br /><br />

            Thank you.

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700">
            <CheckCircle size={18} />
            Mark as Read
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700">
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>

    </section>
  );
}