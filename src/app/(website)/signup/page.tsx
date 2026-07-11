import Link from "next/link";
import {
  Eye,
  User,
  Mail,
  Lock,
} from "lucide-react";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="w-full max-w-md rounded-[32px] shadow-xl bg-card p-8 shadow-xl">

        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-3 text-muted-foreground">
            Join Nexora Developers today.
          </p>
        </div>

        <form className="mt-8 space-y-6">

          {/* Name */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-border px-4">
              <User
                size={18}
                className="text-muted-foreground"
              />

              <input
                type="text"
                placeholder="Enter your name"
                className="h-12 w-full bg-transparent px-3 outline-none"
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-border px-4">
              <Mail
                size={18}
                className="text-muted-foreground"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full bg-transparent px-3 outline-none"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-border px-4">
              <Lock
                size={18}
                className="text-muted-foreground"
              />

              <input
                type="password"
                placeholder="Create a password"
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
                placeholder="Confirm your password"
                className="h-12 w-full bg-transparent px-3 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
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