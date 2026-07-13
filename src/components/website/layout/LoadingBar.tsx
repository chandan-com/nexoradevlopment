"use client";

import { useEffect, useState } from "react";

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(15);

    const timer1 = setTimeout(() => setProgress(45), 150);
    const timer2 = setTimeout(() => setProgress(70), 350);
    const timer3 = setTimeout(() => setProgress(100), 700);
    const timer4 = setTimeout(() => setProgress(0), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="absolute left-0 top-0 h-[3px] w-full">
      <div
        className="h-full bg-blue-600 transition-all duration-300"
        style={{
          width: `${progress}%`,
          opacity: progress === 0 ? 0 : 1,
        }}
      />
    </div>
  );
}