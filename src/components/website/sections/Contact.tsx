import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Let's Build Your Next Project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Have an idea? We'd love to hear about it. Send us a message and
            we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_420px]">
          {/* Contact Form */}

          <div className="rounded-[30px] shadow-xl bg-card p-8">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-xl border border-border bg-background px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-border bg-background px-5 py-4 outline-none focus:border-blue-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-border bg-background px-5 py-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-border bg-background px-5 py-4 outline-none focus:border-blue-500"
              />

              <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}

           <div className="space-y-6 self-start">
            <div className="rounded-[30px] shadow-xl bg-card p-7">

              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="mt-2 text-muted-foreground">
                    +977 98XXXXXXXX
                  </p>
                  <p className="text-muted-foreground">
                    +91 9XXXXXXXXX
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <Mail className="mt-1 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="mt-2 text-muted-foreground">
                    hello@nexora.dev
                  </p>
                  <p className="text-muted-foreground">
                    support@nexora.dev
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <MapPin className="mt-1 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="mt-2 text-muted-foreground">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <Clock className="mt-1 text-blue-600" />
                <div>
                  <h4 className="font-semibold">
                    Business Hours
                  </h4>

                  <p className="mt-2 text-muted-foreground">
                    Sunday - Friday
                  </p>

                  <p className="text-muted-foreground">
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map

            <div className="overflow-hidden rounded-[30px] border border-border">
              <iframe
                src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
                className="h-[300px] w-full"
                loading="lazy"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}