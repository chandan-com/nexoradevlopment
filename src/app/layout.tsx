import "./globals.css";
import ThemeProvider from "../context/ThemeProvider";
import type { Metadata } from "next";
import OfflineProvider from "../components/common/OfflineProvider";

export const metadata: Metadata = {
  title: {
    default: "Nexora Developers",
    template: "%s Nexora Developers",
  },
  description:
    "Nexora Developers builds modern websites, web applications and mobile apps using Next.js, Node.js and Flutter.",

  icons: {
    icon: "/fav.ico", // or /icon.png
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <OfflineProvider>
          {children}
          </OfflineProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}