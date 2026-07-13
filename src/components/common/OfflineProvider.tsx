"use client";

import { useEffect, useState } from "react";
import OfflineScreen from "./OfflineScreen";

export default function OfflineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);

    const onlineHandler = () => setOnline(true);
    const offlineHandler = () => setOnline(false);

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return (
    <>
      {!online && <OfflineScreen />}
      {children}
    </>
  );
}