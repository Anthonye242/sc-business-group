"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm border-b border-cream-dark"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shrink-0">
              <span className="text-white font-heading font-bold text-sm tracking-wide">
                SC
              </span>
            </div>
            <div className="leading-tight">
              <p className="font-heading font-semibold text-brand-black text-base tracking-wide leading-none">
                S & C Business
              </p>
              <p className="text-muted text-xs font-body tracking-widest uppercase leading-none mt-0.5">
                Group LLC
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-sage font-medium"
                    : "text-brand-black hover:text-sage"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-sage hover:bg-sage-dark text-white font-body text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-brand-black hover:text-sage transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cream border-t border-cream-dark px-6 pb-6 pt-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-base py-1 border-b border-cream-dark transition-colors ${
                pathname === link.href
                  ? "text-sage font-medium"
                  : "text-brand-black hover:text-sage"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 bg-sage hover:bg-sage-dark text-white font-body text-sm font-medium px-6 py-3 rounded-full text-center transition-colors duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
