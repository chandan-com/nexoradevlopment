import Link from "next/link";
import { Lock, Eye } from "lucide-react";

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="w-full max-w-md rounded-[32px] shadow-xl bg-card p-8 shadow-xl">

        {/* Icon */}

        <div className="flex justify-center">
          <div className="rounded-full bg-blue-600/10 p-4 text-blue-600">
            <Lock size={40} />
          </div>
        </div>

        {/* Heading */}

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">
            Reset Password
          </h1>

          <p className="mt-3 leading-7 text-muted-foreground">
            Create a new password for your account.
          </p>
        </div>

        {/* Form */}

        <form className="mt-8 space-y-6">

          {/* New Password */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              New Password
            </label>

            <div className="flex items-center rounded-xl border border-border px-4">
              <Lock
                size={18}
                className="text-muted-foreground"
              />

              <input
                type="password"
                placeholder="Enter new password"
                className="h-12 w-full bg-transparent px-3 outline-none"
              />

              <button
                type="button"
                className="text-muted-foreground"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>

            <div className="flex items-center rounded-xl border border-border px-4">
              <Lock
                size={18}
                className="text-muted-foreground"
              />

              <input
                type="password"
                placeholder="Confirm new password"
                className="h-12 w-full bg-transparent px-3 outline-none"
              />

              <button
                type="button"
                className="text-muted-foreground"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Reset Password
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Back to{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>

        </form>

      </div>
    </main>
  );
}