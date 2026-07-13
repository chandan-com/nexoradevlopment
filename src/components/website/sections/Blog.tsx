import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Next.js",
    title: "Why Next.js is the Best Choice for Modern Websites",
    description:
      "Discover why businesses are choosing Next.js for fast, SEO-friendly and scalable web applications.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    date: "12 Jul 2026",
    readTime: "5 min",
  },
  {
    id: 2,
    category: "UI/UX",
    title: "10 UI Design Trends That Will Dominate 2026",
    description:
      "Explore the latest design trends to create beautiful and engaging user experiences.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
    date: "08 Jul 2026",
    readTime: "4 min",
  },
  {
    id: 3,
    category: "Development",
    title: "How We Build Fast & Scalable Web Applications",
    description:
      "A look at our development workflow using Next.js, Node.js and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
    date: "05 Jul 2026",
    readTime: "6 min",
  },
  {
    id: 4,
    category: "Business",
    title: "Why Every Business Needs a Professional Website",
    description:
      "Learn how a modern website can increase trust, generate leads and grow your business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    date: "01 Jul 2026",
    readTime: "3 min",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-14 text-center">
          

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Latest Insights & Articles
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Read our latest articles on web development, UI/UX, technology and
            business growth.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-3xl shadow-xl bg-card transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  {blog.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={15} />
                    {blog.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock3 size={15} />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-xl font-bold transition group-hover:text-blue-600">
                  {blog.title}
                </h3>

                <p className="mt-4 line-clamp-3 leading-7 text-muted-foreground">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                >
                  Read Article

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}

        <div className="mt-14 flex justify-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 rounded-xl shadow-lg px-7 py-3 font-semibold transition hover:bg-blue-600 hover:text-white"
          >
            View All Articles

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}