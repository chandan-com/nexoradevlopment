"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatPopup from "./ChatPopup";

export default function LiveChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatPopup
        open={open}
        onClose={() => setOpen(false)}
      />

      <ChatButton
        open={open}
        onClick={() => setOpen(!open)}
      />
    </>
  );
}