"use client";

import { useMemo, useState } from "react";
import { Search, Check } from "lucide-react";

import { technologies } from "../../../data/technologies";

export default function TechnologyForm() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const filteredTechnologies = useMemo(() => {
    return technologies.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selected) {
      alert("Please select a technology.");
      return;
    }

    console.log({
      technology: selected,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl shadow-xl bg-card p-8 shadow-sm"
    >
      <h2 className="text-2xl font-bold">
        Add Technology
      </h2>

      <p className="mt-2 text-muted-foreground">
        Search and select a technology for your website.
      </p>

      {/* Search */}

      <div className="relative mt-8">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <input
          type="text"
          placeholder="Search technology..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-border bg-background py-3 pl-12 pr-4 outline-none transition focus:border-blue-600"
        />
      </div>

      {/* Technologies */}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTechnologies.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelected(item.name)}
              className={`relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selected === item.name
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40"
                  : "border-border bg-background"
              }`}
            >
              {selected === item.name && (
                <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Check size={16} />
                </div>
              )}

              <Icon
                className={`mx-auto text-5xl ${item.color}`}
              />

              <p className="mt-5 text-center font-semibold">
                {item.name}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected */}

      <div className="mt-8 rounded-2xl border border-border bg-background p-4">
        <p className="text-sm text-muted-foreground">
          Selected Technology
        </p>

        <p className="mt-1 text-lg font-semibold">
          {selected || "None"}
        </p>
      </div>

      {/* Buttons */}

      <div className="mt-10 flex justify-end gap-4">
        <button
          type="button"
          className="rounded-xl border border-border px-6 py-3 transition hover:bg-muted"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={!selected}
          className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Save Technology
        </button>
      </div>
    </form>
  );
}