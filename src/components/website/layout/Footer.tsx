import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  SiInstagram,
  SiWhatsapp,
  SiFacebook,
  SiYoutube,
} from "react-icons/si";

const company = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Website Development",
  "Mobile Apps",
  "UI / UX Design",
  "Admin Dashboard",
];

const resources = [
  "FAQ",
  "Privacy Policy",
  "Terms & Conditions",
  "Support",
];

const socials = [
  { icon: SiFacebook, href: "#", color: "text-blue-600"  },
  { icon: SiInstagram, href: "#", color: "text-pink-600" },
  { icon: SiWhatsapp, href: "#", color: "text-green-600"},
  { icon: SiYoutube, href: "#", color: "text-red-600" },
];

export default function Footer() {
  return (
    <footer className="relative mt-28 overflow-hidden bg-background shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">

      {/* Background */}

     

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* CTA */}

      

        {/* Footer Grid */}

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] mt-10">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-extrabold ">
              Nexora
              <span className="text-blue-600"> Developers</span>
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-muted-foreground">
              We create premium websites, scalable web applications,
              mobile apps and digital experiences that help businesses
              grow faster.
            </p>

            {/* Contact */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-blue-600"
                />

                <span>+977 98XXXXXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-blue-600"
                />

                <span>hello@nexora.dev</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-blue-600"
                />

                <span>Kathmandu, Nepal</span>
              </div>

            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              {socials.map((item, index) => {

                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="rounded-2xl shadow-xl bg-card p-3 transition-all duration-300 hover:-translate-y-1  hover:text-white hover:shadow-xl"
                  >
                    <Icon className={`text-2xl ${item.color}`} />
                  </Link>
                );
              })}

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Company
            </h3>

            <div className="space-y-4">

              {company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block transition hover:translate-x-1 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Services
            </h3>

            <div className="space-y-4">

              {services.map((item) => (
                <p key={item}>{item}</p>
              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Resources
            </h3>

            <div className="space-y-4">

              {resources.map((item) => (
                <p key={item}>{item}</p>
              ))}

            </div>

          </div>

        </div>
               

       

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border py-8 text-sm text-muted-foreground lg:flex-row">

          <p>
            © {new Date().getFullYear()} Nexora Developers. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <Link
              href="/privacy-policy"
              className="transition hover:text-blue-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-condition"
              className="transition hover:text-blue-600"
            >
              Terms & Conditions
            </Link>



          </div>
        </div>

      </div>
    </footer>
  );
}