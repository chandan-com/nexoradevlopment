"use client";

export default function AddTestimonialPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Add Testimonial
        </h1>

        <p className="text-muted-foreground">
          Add a new client testimonial.
        </p>
      </div>

      {/* Form */}

      <div className="rounded-3xl bg-card p-8 shadow-xl">

        <div className="space-y-6">

          {/* Client Name */}

          <div>

            <label className="mb-2 block font-medium">
              Client Name
            </label>

            <input
              type="text"
              placeholder="Enter client name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
            />

          </div>

          {/* Company */}

          <div>

            <label className="mb-2 block font-medium">
              Company Name
            </label>

            <input
              type="text"
              placeholder="Enter company name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
            />

          </div>

          {/* Client Image */}

          <div>

            <label className="mb-2 block font-medium">
              Client Image
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

          </div>

          {/* Review */}

          <div>

            <label className="mb-2 block font-medium">
              Review
            </label>

            <textarea
              rows={6}
              placeholder="Write client review..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
            />

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4">

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Save Testimonial
            </button>

            <button
              type="reset"
              className="rounded-xl border border-border px-8 py-3 transition hover:bg-muted"
            >
              Reset
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}