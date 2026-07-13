import Link from "next/link";
import { Search, Eye, Trash2 } from "lucide-react";

const messages = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    subject: "Business Website",
    date: "13 Jul 2026",
    status: "New",
  },
  {
    id: 2,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    phone: "+91 9876543211",
    subject: "Android App",
    date: "12 Jul 2026",
    status: "Read",
  },
];

export default function ContactMessagesPage() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Contact Messages
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage customer enquiries from your website.
        </p>

      </div>

      {/* Search */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="relative w-full md:max-w-sm">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            type="text"
            placeholder="Search message..."
            className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 outline-none focus:border-blue-600"
          />

        </div>

        <select className="rounded-xl border border-border bg-card px-4 py-3 outline-none">

          <option>All</option>
          <option>New</option>
          <option>Read</option>

        </select>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-3xl bg-card shadow-xl">

        <table className="min-w-[1000px] w-full">

          <thead className="bg-muted/40">

            <tr>

              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Email
              </th>

              <th className="px-6 py-4 text-left">
                Phone
              </th>

              <th className="px-6 py-4 text-left">
                Subject
              </th>

              <th className="px-6 py-4 text-center">
                Date
              </th>

              <th className="px-6 py-4 text-center">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {messages.map((message) => (

              <tr
                key={message.id}
                className="border-t border-border"
              >

                <td className="px-6 py-5 font-medium">
                  {message.name}
                </td>

                <td className="px-6 py-5">
                  {message.email}
                </td>

                <td className="px-6 py-5">
                  {message.phone}
                </td>

                <td className="px-6 py-5">
                  {message.subject}
                </td>

                <td className="px-6 py-5 text-center">
                  {message.date}
                </td>

                <td className="px-6 py-5 text-center">

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      message.status === "New"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {message.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/admin/contacts/${message.id}`}
                      className="rounded-lg border p-2 hover:bg-muted"
                    >
                      <Eye size={18} />
                    </Link>

                    <button className="rounded-lg border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white">
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}