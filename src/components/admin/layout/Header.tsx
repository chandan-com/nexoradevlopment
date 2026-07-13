"use client";

import { Bell, Search, Menu } from "lucide-react";
import ThemeToggle from "../../website/layout/ThemeToggle";
import { useState } from "react";
import NotificationDropdown from "../notification/NotificationDropdown";

type HeaderProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setOpen }: HeaderProps) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[999] flex h-20 items-center justify-between bg-background px-3 md:px-3">
      {/* Left */}

      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">

        <button
  onClick={() => setOpen(true)}
  className="rounded-xl p-2 hover:bg-muted lg:hidden"
>
  <Menu size={22} />
</button>

        <div>
          <h1 className="text-1xl font-bold">
            Good Morning
          </h1>
            Chandan, Sir
          <p className="text-sm text-muted-foreground">
             
          </p>
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="hidden items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 lg:flex">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search..."
            className="w-52 bg-transparent outline-none"
          />

        </div>

        {/* Theme */}

        <ThemeToggle/>

        {/* Notification */}

 <div className="static">

  <button
    onClick={() => setNotificationOpen(!notificationOpen)}
    className="relative rounded-xl border border-border p-2 transition hover:bg-muted"
  >
    <Bell size={20} />

    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
      2
    </span>
  </button>

</div>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl border border-border p-2 md:px-2 transition hover:bg-muted flex-shrink-0">

          <div className="flex h-6 w-6 md:h-10 md:w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
  C
</div>

          <div className="hidden xl:block text-left">
  <p className="text-sm font-semibold">
    Chandan
  </p>

  <p className="text-xs text-muted-foreground">
    Administrator
  </p>
</div>

        </button>

      </div>
{notificationOpen && (
  <NotificationDropdown
    onClose={() => setNotificationOpen(false)}
  />
)}
    </header>
  );
}