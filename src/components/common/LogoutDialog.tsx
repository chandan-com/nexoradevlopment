"use client";

type LogoutDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function LogoutDialog({
  open,
  onClose,
  onConfirm,
}: LogoutDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 px-4">

      <div className="w-full max-w-md rounded-3xl bg-card p-8 shadow-2xl">

        <h2 className="text-2xl font-bold">
          Logout
        </h2>

        <p className="mt-3 text-muted-foreground">
          Are you sure you want to logout?
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          You will need to sign in again to access the admin panel.
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border border-border px-6 py-3 transition hover:bg-muted"
          >
            No
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Yes, Logout
          </button>

        </div>

      </div>

    </div>
  );
}