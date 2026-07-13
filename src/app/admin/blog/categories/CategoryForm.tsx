"use client";

export default function CategoryForm() {
  return (
    <form className="rounded-3xl border border-border bg-card p-8">

      <h2 className="text-2xl font-bold">
        Add Category
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Category Name
          </label>

          <input
            type="text"
            placeholder="Development"
            className="w-full rounded-xl border border-border bg-background p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Slug
          </label>

          <input
            type="text"
            placeholder="development"
            className="w-full rounded-xl border border-border bg-background p-3"
          />
        </div>

      </div>

      <div className="mt-6">

        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          rows={4}
          placeholder="Category description..."
          className="w-full rounded-xl border border-border bg-background p-3"
        />
      </div>

      <div className="mt-8 flex justify-end">

        <button
          className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Save Category
        </button>

      </div>

    </form>
  );
}