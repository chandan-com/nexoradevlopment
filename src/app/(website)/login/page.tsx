import Link from "next/link";
import { Eye, Mail, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Nexora Developers | Login",
    template: "Nexora Developers | Login",
  },
  description:
    "Nexora login page",

};
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-20 mt-10">
      <div className="w-full max-w-md rounded-[32px] shadow-xl bg-card p-8 shadow-xl">

        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-3 text-muted-foreground">
            Sign in to continue to your account.
          </p>
        </div>

        <form className="mt-8 space-y-6">

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
                placeholder="Enter your password"
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

          {/* Options */}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </form>

      </div>
    </main>
  );
}