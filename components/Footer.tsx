import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import {
  BUSINESS_NAME,
  NAV_LINKS,
  PHONE,
  EMAIL,
  ADDRESS,
  INSTAGRAM,
  INSTAGRAM_URL,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center shrink-0">
                <span className="text-white font-heading font-bold text-sm">
                  SC
                </span>
              </div>
              <div className="leading-tight">
                <p className="font-heading font-semibold text-white text-base leading-none">
                  S & C Business
                </p>
                <p className="text-sage-light text-xs font-body tracking-widest uppercase leading-none mt-0.5">
                  Group LLC
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Professional credit repair services helping individuals and
              families reclaim their financial freedom — one dispute at a time.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sage-light hover:text-sage transition-colors font-body text-sm"
            >
              <InstagramIcon size={16} />
              {INSTAGRAM}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-sage-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl text-white mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="text-sage shrink-0 mt-0.5"
                />
                <a
                  href={`tel:${PHONE}`}
                  className="font-body text-sm text-white/60 hover:text-sage-light transition-colors"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="text-sage shrink-0 mt-0.5"
                />
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-body text-sm text-white/60 hover:text-sage-light transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-sage shrink-0 mt-0.5"
                />
                <span className="font-body text-sm text-white/60">
                  {ADDRESS}
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-sage hover:bg-sage-dark text-white font-body text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-200"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30 text-center max-w-md">
            {BUSINESS_NAME} is not a law firm and does not provide legal advice.
            Results may vary. Credit repair services are provided pursuant to
            applicable consumer protection laws.
          </p>
        </div>
      </div>
    </footer>
  );
}
