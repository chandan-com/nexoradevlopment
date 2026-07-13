const pages = [
  {
    page: "/",
    title: "Home",
    visitors: 4520,
  },
  {
    page: "/services",
    title: "Services",
    visitors: 2310,
  },
  {
    page: "/portfolio",
    title: "Portfolio",
    visitors: 1875,
  },
  {
    page: "/about",
    title: "About",
    visitors: 1320,
  },
  {
    page: "/contact",
    title: "Contact",
    visitors: 845,
  },
];

export default function TopPages() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-xl">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Top Pages
        </h2>

        <p className="text-sm text-muted-foreground">
          Most visited pages this month.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-border">

              <th className="py-3 text-left">
                Page
              </th>

              <th className="py-3 text-left">
                URL
              </th>

              <th className="py-3 text-right">
                Visitors
              </th>

            </tr>

          </thead>

          <tbody>

            {pages.map((page) => (

              <tr
                key={page.page}
                className="border-b border-border last:border-none"
              >

                <td className="py-4 font-medium">
                  {page.title}
                </td>

                <td className="py-4 text-muted-foreground">
                  {page.page}
                </td>

                <td className="py-4 text-right font-semibold">
                  {page.visitors.toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}