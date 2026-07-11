import Link from "next/link";
import { Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="w-full max-w-md rounded-[32px] border border-border bg-card p-8 shadow-xl">

        {/* Icon */}

        <div className="flex justify-center">
          <div className="rounded-full bg-blue-600/10 p-4 text-blue-600">
            <Mail size={40} />
          </div>
        </div>

        {/* Heading */}

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">
            Forgot Password?
          </h1>

          <p className="mt-3 leading-7 text-muted-foreground">
            Enter your registered email address and we'll send you a
            verification code to reset your password.
          </p>
        </div>

        {/* Form */}

        <form className="mt-8 space-y-6">

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

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Send OTP
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Remember your password?{" "}
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