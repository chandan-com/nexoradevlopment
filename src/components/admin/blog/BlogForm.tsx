"use client";

import { useState } from "react";
import { ArrowLeft , Pencil } from "lucide-react";
import Link from "next/link";

type BlogFormProps = {
  initialData?: {
    title: string;
    slug: string;
    shortDescription: string;
    content: string;
    category: string;
    tags: string;
    status: string;
    featured: boolean;
  };
  isEdit?: boolean;
};

export default function BlogForm({
  initialData,
  isEdit = false,
}: BlogFormProps) {

  const [featured, setFeatured] = useState(
    initialData?.featured ?? false
  );

  return (
    
    <form className="space-y-8 rounded-3xl border border-border bg-card p-8">

      {/* Image */}
    
      <div>

        <label className="mb-2 block font-medium">
          Featured Image
        </label>

        <input
          type="file"
          className="w-full rounded-xl border border-border p-3"
        />

      </div>

      {/* Title */}

      <div>

        <label className="mb-2 block font-medium">
          Title
        </label>

        <input
          type="text"
          defaultValue={initialData?.title}
          placeholder="Enter blog title"
          className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-blue-600"
        />

      </div>

      {/* Slug */}

      <div>

        <label className="mb-2 block font-medium">
          Slug
        </label>

        <input
          type="text"
          defaultValue={initialData?.slug}
          placeholder="nextjs-complete-guide"
          className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-blue-600"
        />

      </div>

      {/* Short Description */}

      <div>

        <label className="mb-2 block font-medium">
          Short Description
        </label>

        <textarea
          rows={4}
          defaultValue={initialData?.shortDescription}
          placeholder="Short summary..."
          className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-blue-600"
        />

      </div>

      {/* Content */}

      <div>

        <label className="mb-2 block font-medium">
          Blog Content
        </label>

        <textarea
          rows={12}
          defaultValue={initialData?.content}
          placeholder="Write your blog..."
          className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-blue-600"
        />

      </div>

      {/* Category */}

      <div>

        <label className="mb-2 block font-medium">
          Category
        </label>

        <select
          defaultValue={initialData?.category}
          className="w-full rounded-xl border border-border bg-background p-3"
        >

          <option value="Business">
            Business
          </option>

          <option value="Development">
            Development
          </option>

          <option value="SEO">
            SEO
          </option>

          <option value="Technology">
            Technology
          </option>

        </select>

      </div>

      {/* Tags */}

      <div>

        <label className="mb-2 block font-medium">
          Tags
        </label>

        <input
          type="text"
          defaultValue={initialData?.tags}
          placeholder="Next.js, SEO, React"
          className="w-full rounded-xl border border-border bg-background p-3 outline-none focus:border-blue-600"
        />

      </div>

      {/* Status */}

      <div>

        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          defaultValue={initialData?.status}
          className="w-full rounded-xl border border-border bg-background p-3"
        >

          <option value="Draft">
            Draft
          </option>

          <option value="Published">
            Published
          </option>

        </select>

      </div>

      {/* Featured */}

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />

        <label>
          Featured Blog
        </label>

      </div>

      <div className="flex justify-end gap-4">
        <Link
        href="/admin/blog"
        >
        <button
          type="button"
          className="rounded-xl border border-border px-6 py-3"
        >
          Cancel
        </button>
          </Link>
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {isEdit ? "Update Blog" : "Publish Blog"}
        </button>

      </div>

    </form>
  );
}