"use client";

export default function FAQForm() {
  return (
    <form className="space-y-8 rounded-3xl bg-card p-8 shadow-xl">

      {/* Question */}

      <div>

        <label className="mb-2 block font-medium">
          Question
        </label>

        <input
          type="text"
          placeholder="Enter question..."
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
        />

      </div>

      {/* Answer */}

      <div>

        <label className="mb-2 block font-medium">
          Answer
        </label>

        <textarea
          rows={6}
          placeholder="Write the answer..."
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
        />

      </div>

      {/* Buttons */}

      <div className="flex gap-4">

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Save FAQ
        </button>

        <button
          type="reset"
          className="rounded-xl border border-border px-8 py-3 transition hover:bg-muted"
        >
          Reset
        </button>

      </div>

    </form>
  );
}