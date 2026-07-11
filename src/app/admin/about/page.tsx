
export default function AboutPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">About Control</h1>
        <p className="text-muted-foreground">
          Manage your website About section.
        </p>
      </div>

      {/* General Information */}

      <div className="rounded-2xl shadow-xl bg-card p-6">

        <h2 className="mb-6 text-xl font-semibold">
          General Information
        </h2>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block font-medium">
              Heading
            </label>

            <input
              type="text"
              placeholder="We Build Modern Websites & Mobile Apps"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              rows={6}
              placeholder="Write your about description..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

        </div>

      </div>

      {/* Bullet Points */}

      <div className="rounded-2xl shadow-xl bg-card p-6">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            Bullet Points
          </h2>

          <button className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            + Add Point
          </button>

        </div>

        <div className="space-y-4">

          {[1,].map((item) => (
            <div
              key={item}
              className="flex flex-col gap-3 md:flex-row"
            >
              <input
                type="text"
                placeholder={`Bullet Point ${item}`}
                className="flex-1 rounded-xl border border-border bg-background px-4 py-3"
              />

              <button className="rounded-xl bg-red-500 px-5 py-3 text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          ))}

        </div>

      </div>

      {/* Feature Cards */}

      {/* Feature Cards */}

<div className="rounded-2xl bg-card p-6 shadow-xl">

  <div className="mb-6 flex items-center justify-between">

    <div>
      <h2 className="text-2xl font-bold">
        Feature Cards
      </h2>

      <p className="text-sm text-muted-foreground">
        Manage your feature cards.
      </p>
    </div>

    <button className="rounded-xl bg-blue-600 px-4 py-3 text-white hover:bg-blue-700">
      + Add Card
    </button>

  </div>

  <div className="rounded-2xl bg-background p-6">

    <div className="mb-5 flex items-center justify-between">

      <h3 className="text-lg font-semibold">
        Card
      </h3>

      <button className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600">
        Delete Card
      </button>

    </div>

    <div className="space-y-5">

      <div>
        <label className="mb-2 block font-medium">
          Icon
        </label>

        <input
          type="text"
          placeholder="Rocket"
          className="w-full rounded-xl border border-border bg-card px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Title
        </label>

        <input
          type="text"
          placeholder="Fast Performance"
          className="w-full rounded-xl border border-border bg-card px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          rows={4}
          placeholder="Write description..."
          className="w-full rounded-xl border border-border bg-card px-4 py-3"
        />
      </div>

    </div>

  </div>

</div>

      {/* Save Button */}

      <div className="flex justify-start">

        <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
          Save Changes
        </button>

      </div>

    </div>
  );
}