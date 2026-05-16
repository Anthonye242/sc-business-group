"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/results", label: "Results" },
  { href: "/book", label: "Book" },
];

function Arrow() {
  return (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="arr">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">
            S<span style={{ fontSize: 11, margin: "0 1px", color: "var(--accent-soft)" }}>&amp;</span>C
          </div>
          <div className="brand-name">
            <b>S &amp; C Business Group</b>
            <span>Credit Restoration · Est. 2021</span>
          </div>
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/book" className="cta">
          Book a Consult <Arrow />
        </Link>
      </div>

      {/* Mobile menu — simple toggle */}
      {open && (
        <div style={{
          background: "var(--paper)", borderTop: ".5px solid var(--line)",
          padding: "20px var(--gutter) 28px", display: "flex", flexDirection: "column", gap: 18,
        }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: 15, fontFamily: "var(--body)" }} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/book" className="cta" style={{ justifyContent: "center" }} onClick={() => setOpen(false)}>
            Book a Consult <Arrow />
          </Link>
        </div>
      )}
    </nav>
  );
}
