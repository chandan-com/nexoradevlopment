"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Link href="/" >
    <Image
      src={
        resolvedTheme === "dark"
          ? "/logo-dark.png"
          : "/logo-light.png"
      }
      alt="Nexora Developers"
      width={140}
      height={30}
      priority
    />
    </Link>
  );
}