"use client";

export default function TagForm() {
  return (
    <form className="rounded-3xl border border-border bg-card p-8">

      <h2 className="text-2xl font-bold">
        Add Tag
      </h2>

      <p className="mt-2 text-muted-foreground">
        Create a new blog tag.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Tag Name
          </label>

          <input
            type="text"
            placeholder="Next.js"
            className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-blue-600"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Slug
          </label>

          <input
            type="text"
            placeholder="next-js"
            className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-blue-600"
          />

        </div>

      </div>

      <div className="mt-8 flex justify-end gap-4">

        <button
          type="button"
          className="rounded-xl border border-border px-6 py-3"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Save Tag
        </button>

      </div>

    </form>
  );
}