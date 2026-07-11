"use client";

import { useState } from "react";

const tabs = [
  "Profile",
  "Security",
  "Website",
  "Social Links",
  "SEO",
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-muted-foreground">
          Manage your website settings.
        </p>
      </div>

      {/* Tabs */}

      <div className="overflow-x-auto">

        <div className="inline-flex min-w-full mb-5 gap-2 rounded-2xl shadow-xl bg-card p-2">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-xl px-5 py-3 text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-muted"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

      </div>

      {/* Content */}

      <div className=" rounded-2xl shadow-xl bg-card p-6">

        {/* ================= Profile ================= */}

        {activeTab === "Profile" && (
          <div className="space-y-5">

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Chandan Mishra"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="admin@nexora.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="+977..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none"
                />
              </div>

            </div>

            <button className="rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
              Save Changes
            </button>

          </div>
        )}

        {/* ================= Security ================= */}

        {activeTab === "Security" && (
          <div className="space-y-5">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

            <button className="rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
              Update Password
            </button>

          </div>
        )}

        {/* ================= Website ================= */}

        {activeTab === "Website" && (
          <div className="grid gap-5 md:grid-cols-2">

            <input
              placeholder="Website Name"
              className="rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              placeholder="Website URL"
              className="rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              placeholder="Support Email"
              className="rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              placeholder="Support Phone"
              className="rounded-xl border border-border bg-background px-4 py-3"
            />

            <textarea
              rows={4}
              placeholder="Office Address"
              className="md:col-span-2 rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              placeholder="Footer Copyright"
              className="md:col-span-2 rounded-xl border border-border bg-background px-4 py-3"
            />

            <button className="w-fit rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
              Save Changes
            </button>

          </div>
        )}

        {/* ================= Social ================= */}

        {activeTab === "Social Links" && (
          <div className="grid gap-5 md:grid-cols-2">

            <input placeholder="Facebook" className="rounded-xl border border-border bg-background px-4 py-3" />

            <input placeholder="Instagram" className="rounded-xl border border-border bg-background px-4 py-3" />

            <input placeholder="LinkedIn" className="rounded-xl border border-border bg-background px-4 py-3" />

            <input placeholder="GitHub" className="rounded-xl border border-border bg-background px-4 py-3" />

            <input placeholder="YouTube" className="rounded-xl border border-border bg-background px-4 py-3" />

            <input placeholder="Twitter / X" className="rounded-xl border border-border bg-background px-4 py-3" />

            <button className="w-fit rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
              Save Changes
            </button>

          </div>
        )}

        {/* ================= SEO ================= */}

        {activeTab === "SEO" && (
          <div className="space-y-5">

            <input
              placeholder="Meta Title"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

            <textarea
              rows={4}
              placeholder="Meta Description"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              placeholder="Keywords"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              placeholder="Google Analytics ID"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

            <input
              placeholder="Google Search Console Verification"
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
            />

            <button className="rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
              Save Changes
            </button>

          </div>
        )}

      </div>

    </div>
  );
}