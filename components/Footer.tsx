"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Arrow() {
  return (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="arr" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <h2>
              Restore. <em style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>Reclaim.</em>
            </h2>
            <p>
              A boutique credit restoration practice for clients who expect
              discretion, precision, and tangible results.
            </p>
          </div>

          <div>
            <h5>Practice</h5>
            <div className="links">
              <Link href="/services">Services</Link>
              <Link href="/about">About the Founders</Link>
              <Link href="/results">Results</Link>
              <Link href="/book">Book a Consult</Link>
            </div>
          </div>

          <div>
            <h5>Contact</h5>
            <div className="links">
              {/* TODO: Replace with real phone/email/address */}
              <a href="tel:+10000000000">(000) 000-0000</a>
              <a href="mailto:hello@scbusinessgroupllc.com">hello@scbusinessgroupllc.com</a>
              <a>By appointment · M–F, 10–6 ET</a>
              <a>Serving clients nationwide</a>
            </div>
          </div>

          <div>
            <h5>Elsewhere</h5>
            <div className="links">
              <a href="https://instagram.com/scbusinessgroupllc" target="_blank" rel="noreferrer">
                @scbusinessgroupllc
              </a>
              <a href="https://instagram.com/couture242" target="_blank" rel="noreferrer">
                @couture242
              </a>
              <a>Privacy Policy</a>
              <a>Client Agreement</a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {year} S &amp; C Business Group, LLC · All rights reserved</span>
          <span>Bonded · Insured · CROA Compliant</span>
        </div>
      </div>
    </footer>
  );
}
