"use client";

import { WifiOff, RefreshCcw } from "lucide-react";

export default function OfflineScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background px-6">

      <div className="max-w-md text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">

          <WifiOff
            size={50}
            className="text-blue-600"
          />

        </div>

        <h1 className="mt-8 text-4xl font-bold">
          You're Offline
        </h1>

        <p className="mt-4 text-muted-foreground">
          Please check your internet connection and
          try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <RefreshCcw size={18} />
          Retry
        </button>

      </div>

    </div>
  );
}