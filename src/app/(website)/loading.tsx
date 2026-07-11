"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">

        <div className="relative h-20 w-20">

          {/* Outer Ring */}

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600 dark:border-purple-900 dark:border-t-purple-500" />

          {/* Inner Ring */}

          <div className="absolute inset-3 animate-spin rounded-full border-4 border-transparent border-t-violet-500 [animation-direction:reverse] [animation-duration:1.2s]" />

        </div>

      </div>
    );
  }

  return <>{children}</>;
}