import { Facebook, Instagram, Star } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="container max-w-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <span className="text-xl font-extrabold text-white tracking-tight">
              ECO PACIFIC
            </span>
            <span className="block text-xs tracking-[0.25em] text-primary-400 font-medium mt-1">
              PAINTING
            </span>
            <p className="mt-4 text-sm leading-relaxed max-w-xs text-white/60">
              Bringing colour to life with quality painting you can trust —
              serving homes and businesses across Metro Vancouver.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Star].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-primary-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-primary-400 transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="text-white/60">
                {SITE.address.street}, {SITE.address.region}
              </li>
              <li className="text-white/60">
                {SITE.hours.days}, {SITE.hours.time}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
