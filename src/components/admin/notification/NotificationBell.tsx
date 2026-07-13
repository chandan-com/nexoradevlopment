"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import NotificationDropdown from "./NotificationDropdown";


export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const unreadCount = 2;

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-xl border border-border p-2 transition hover:bg-muted"
      >
        <Bell size={22} />

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <NotificationDropdown
          onClose={() => setOpen(false)}
        />
      )}

    </div>
  );
}