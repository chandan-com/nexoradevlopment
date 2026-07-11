"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Something went wrong!</h1>

      <p className="text-gray-500">{error.message}</p>

      <button
        onClick={reset}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}