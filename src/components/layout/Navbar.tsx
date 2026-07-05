"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import PaintDripButton from "@/components/ui/PaintDripButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-premium",
        scrolled ? "glass-nav shadow-soft py-3" : "bg-transparent py-6"
      )}
    >
      <nav className="container max-w-content flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none group">
          <span
            className={cn(
              "text-lg font-extrabold tracking-tight transition-colors",
              scrolled ? "text-navy-900" : "text-navy-900"
            )}
          >
            ECO PACIFIC
          </span>
          <span className="text-[11px] font-medium tracking-[0.2em] text-primary-500">
            PAINTING
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-navy-700 hover:text-primary-500 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="btn-outline-navy !py-2.5 !px-5 text-sm"
          >
            <Phone className="w-4 h-4" />
            {SITE.phoneDisplay}
          </a>
          <PaintDripButton
            variant="primary"
            className="!py-2.5 !px-5 text-sm"
            onClick={() =>
              document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Appointment
          </PaintDripButton>
        </div>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 rounded-full text-navy-800 hover:bg-navy-50 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-navy-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-lift px-6 py-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-extrabold text-navy-900">
                  ECO PACIFIC
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-navy-50"
                >
                  <X className="w-6 h-6 text-navy-800" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3.5 text-lg font-medium text-navy-800 border-b border-navy-50"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-navy w-full">
                  <Phone className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </a>
                <PaintDripButton variant="primary" className="w-full" href="#quote">
                  Book Appointment
                </PaintDripButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
