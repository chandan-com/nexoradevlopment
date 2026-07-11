"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    X,
    LayoutDashboard,
    Home,
    User,
    Briefcase,
    FolderKanban,
    Cpu,
    FileText,
    MessageSquare,
    CircleHelp,
    Settings,
    LogOut,
} from "lucide-react";
import Logo from "../../website/layout/Logo";

const menus = [
    {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Home",
        href: "/admin/home",
        icon: Home,
    },
    {
        title: "About",
        href: "/admin/about",
        icon: User,
    },
    {
        title: "Services",
        href: "/admin/services",
        icon: Briefcase,
    },
    {
        title: "Portfolio",
        href: "/admin/portfolio",
        icon: FolderKanban,
    },
    {
        title: "Technologies",
        href: "/admin/technologies",
        icon: Cpu,
    },
    {
        title: "Blogs",
        href: "/admin/blogs",
        icon: FileText,
    },
    {
        title: "Testimonials",
        href: "/admin/testimonials",
        icon: MessageSquare,
    },
    {
        title: "FAQ",
        href: "/admin/faq",
        icon: CircleHelp,
    },
    {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];
type SidebarProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Sidebar({
    open,
    setOpen,
}: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex h-screen w-72 flex-col bg-background shadow-2xl transition-transform duration-300 lg:static lg:translate-x-0 ${
  open ? "translate-x-0" : "-translate-x-full"
}`}
            >
            
    

{/* Logo */ }

<div className="flex h-20 items-center justify-between px-6 mt-2">
  <div>
    <h1 className="text-3xl font-bold">Nexora</h1>
    <p className="text-sm text-muted-foreground">
      Admin Panel
    </p>
  </div>

  <button
    onClick={() => setOpen(false)}
    className="lg:hidden"
  >
    <X size={22} />
  </button>
</div>

{/* Menu */ }

<div className="flex-1 overflow-y-auto px-4 py-6">

    <div className="space-y-2">

        {menus.map((menu) => {
            const Icon = menu.icon;

            return (
                <Link
  key={menu.href}
  href={menu.href}
  onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${pathname === menu.href
                        ? "bg-blue-600 text-white shadow-lg"
                        : "hover:bg-muted"
                        }`}
                >
                    <Icon size={20} />

                    <span>{menu.title}</span>
                </Link>
            );
        })}

    </div>

</div>

      {/* Bottom */}

      <div className=" p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-500/10">
          <LogOut size={20} />
          Logout
        </button>
      </div>

    </aside>
  </>
  );
}
