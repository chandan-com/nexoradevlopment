"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  title?: string;
};

export default function DeleteBlogModal({
  open,
  onClose,
  onDelete,
  title = "this blog",
}: Props) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl">

        <h2 className="text-2xl font-bold">
          Delete Blog
        </h2>

        <p className="mt-4 text-muted-foreground">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-foreground">
            {title}
          </span>
          ? This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border border-border px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}