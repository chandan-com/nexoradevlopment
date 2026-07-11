"use client";

import { useEffect, useState } from "react";

type ServiceFormProps = {
  initialData?: {
    title: string;
    slug: string;
    price: number;
    category: string;
    description: string;
    popular: boolean;
  };
};

export default function ServiceForm({
  initialData,
}: ServiceFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [price, setPrice] = useState(initialData?.price ?? 0);
  const [category, setCategory] = useState(
    initialData?.category ?? "Website"
  );
  const [description, setDescription] = useState(
    initialData?.description ?? ""
  );
  const [popular, setPopular] = useState(
    initialData?.popular ?? false
  );

  useEffect(() => {
    if (!initialData) {
      setSlug(
        title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
      );
    }
  }, [title, initialData]);

  return (
    <form className="rounded-3xl shadow-xl bg-card p-8">
      <div className="grid gap-6 md:grid-cols-2">

        {/* Title */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">
            Title
          </label>

          <input
            type="text"
            placeholder="Dynamic Website"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="mb-2 block font-medium">
            Slug
          </label>

          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block font-medium">
            Price
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
          >
            <option>Website</option>
            <option>Web Application</option>
            <option>E-Commerce</option>
            <option>Android App</option>
            <option>iOS App</option>
            <option>UI / UX</option>
          </select>
        </div>

        {/* Popular */}
        <div className="flex items-center gap-3 pt-8">
          <input
            id="popular"
            type="checkbox"
            checked={popular}
            onChange={(e) => setPopular(e.target.checked)}
            className="h-5 w-5"
          />

          <label htmlFor="popular">
            Mark as Popular
          </label>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
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
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Save Service
        </button>
      </div>
    </form>
  );
}