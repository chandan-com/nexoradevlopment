"use client";

import Header from "@/src/components/admin/layout/Header";
import Sidebar from "@/src/components/admin/layout/Sidebar";
import { useState } from "react";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
  <Sidebar open={open} setOpen={setOpen} />

  <div className="flex flex-1 flex-col overflow-hidden">
    <Header setOpen={setOpen} />

    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      {children}
    </main>
  </div>
</div>
  );
}