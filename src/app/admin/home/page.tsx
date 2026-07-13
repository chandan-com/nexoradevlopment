export default function HomePage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Home Management
        </h1>

        <p className="text-muted-foreground">
          Manage hero section of your website.
        </p>
      </div>

      <div className="rounded-2xl shadow-xl bg-card p-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-5">

            <div className="grid gap-5">

  <div>
    <label className="mb-2 block text-sm font-medium">
      Hero Title Line 1
    </label>

    <input
      className="w-full rounded-xl border border-border bg-background px-4 py-3"
      placeholder="We Build"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Highlight Word
    </label>

    <input
      className="w-full rounded-xl border border-border bg-background px-4 py-3"
      placeholder="Modern"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Hero Title Line 2
    </label>

    <input
      className="w-full rounded-xl border border-border bg-background px-4 py-3"
      placeholder="Websites & Mobile Apps"
    />
  </div>

</div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Hero pragraphp
              </label>

              <textarea
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none" placeholder="Enter your description"/>
            </div>


          </div>

          <div className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Primary Button
              </label>

              <input
                className="w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="primary button name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Primary Button Link
              </label>

              <input
                className="w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="primary button link"
              />
            </div>
             <div>
              <label className="mb-2 block text-sm font-medium">
                Secondary Button
              </label>

              <input
                className="w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="Secondary button name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Secondary Button Link
              </label>

              <input
                className="w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="Secondary button link"
              />
            </div>

            

          </div>

        </div>

        <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700">
          Save Changes
        </button>

      </div>

    </div>
  );
}