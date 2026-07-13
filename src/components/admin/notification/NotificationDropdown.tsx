"use client";

import Link from "next/link";
import { CheckCheck, Trash2 } from "lucide-react";

type Props = {
    onClose: () => void;
};

const notifications = [
    {
        id: 1,
        title: "New Contact Message",
        description: "Rahul Sharma sent a message.",
        time: "2 min ago",
        href: "/admin/contacts/1",
        unread: true,
    },
    {
        id: 2,
        title: "New Contact Message",
        description: "Amit Kumar sent a message.",
        time: "15 min ago",
        href: "/admin/contacts/2",
        unread: true,
    },
];

export default function NotificationDropdown({
    onClose,
}: Props) {
    return (
        <div className="
fixed
top-20
left-1/2
-translate-x-1/2
md:left-auto
md:right-6
md:translate-x-0
w-[95vw]
max-w-sm
md:w-96
z-[9999]
overflow-hidden
rounded-3xl
bg-background
shadow-2xl
">

            <div className="flex items-center justify-between border-b border-border p-5">

                <h2 className="text-lg font-bold">
                    Notifications
                </h2>

                <div className="flex gap-2">

                    <button className="rounded-lg p-2 hover:bg-muted">
                        <CheckCheck size={18} />
                    </button>

                    <button className="rounded-lg p-2 hover:bg-muted">
                        <Trash2 size={18} />
                    </button>

                </div>

            </div>

            <div className="max-h-96 overflow-y-auto">

                {notifications.map((item) => (

                    <Link
                        key={item.id}
                        href={item.href}
                        onClick={onClose}
                        className="flex gap-3 border-b border-border p-5 transition hover:bg-muted"
                    >

                        <div
                            className={`mt-2 h-3 w-3 rounded-full ${item.unread
                                    ? "bg-blue-600"
                                    : "bg-gray-300"
                                }`}
                        />

                        <div className="flex-1">

                            <h3 className="font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                {item.description}
                            </p>

                            <span className="mt-2 block text-xs text-muted-foreground">
                                {item.time}
                            </span>

                        </div>

                    </Link>

                ))}

            </div>

            <div className="p-4">

                <Link
                    href="/admin/contacts"
                    className="block rounded-xl bg-blue-600 py-3 text-center font-medium text-white hover:bg-blue-700"
                >
                    View All Notifications
                </Link>

            </div>

        </div>
    );
}