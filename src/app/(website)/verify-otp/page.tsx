"use client";

import Link from "next/link";
import { MailCheck } from "lucide-react";
import { useRef } from "react";

export default function VerifyOTPPage() {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "");

    e.target.value = value;

    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !inputs.current[index]?.value &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="w-full max-w-md rounded-[32px] shadow-xl bg-card p-8 shadow-xl">

        {/* Icon */}

        <div className="flex justify-center">
          <div className="rounded-full bg-blue-600/10 p-4 text-blue-600">
            <MailCheck size={40} />
          </div>
        </div>

        {/* Heading */}

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold">
            Verify OTP
          </h1>

          <p className="mt-3 leading-7 text-muted-foreground">
            Enter the 6-digit verification code sent to your email.
          </p>
        </div>

        <form className="mt-8">

          {/* OTP Inputs */}

          <div className="flex justify-center gap-2 sm:gap-3">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="
h-10 w-10
sm:h-12 sm:w-12
md:h-14 md:w-14
rounded-xl
border border-border
bg-background
text-center
text-base
sm:text-lg
md:text-xl
font-bold
outline-none
transition-all
duration-300
focus:border-blue-600
focus:ring-2
focus:ring-blue-600/20
"
              />
            ))}
          </div>

          {/* Button */}

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Verify OTP
          </button>

          {/* Resend */}

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Didn't receive the code?
            </p>

            <button
              type="button"
              className="mt-2 font-semibold text-blue-600 hover:underline"
            >
              Resend OTP
            </button>
          </div>

          {/* Back */}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Wrong email?{" "}
            <Link
              href="/signup"
              className="font-semibold text-blue-600 hover:underline"
            >
              Go Back
            </Link>
          </p>

        </form>

      </div>
    </main>
  );
}