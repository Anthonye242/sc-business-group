"use client";

import { useState } from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="arr">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export default function BookPage() {
  return (
    <div className="page">
      <section className="flush" style={{ padding: "48px 0 80px" }}>
        <div className="wrap">
          <div className="book">
            <div className="left">
              <div className="eyebrow" style={{ marginBottom: 18 }}>Step 01 · Select a date &amp; time</div>
              <h1 className="display">
                <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>Personal</em><br />&amp; Business<br />Consultation.
              </h1>
              <p style={{ marginTop: 28 }}>
                A thirty-minute phone call to walk through your reports, discuss what we see, and decide together
                whether — and how — we should work together.
              </p>
              <div className="detail">
                <div className="detail-row"><b>Duration</b><span>30 minutes</span></div>
                <div className="detail-row"><b>Format</b><span>Phone call</span></div>
                <div className="detail-row"><b>Fee</b><span>$50 USD · charged at booking</span></div>
                <div className="detail-row"><b>Bring</b><span style={{ maxWidth: "24ch", textAlign: "right" }}>Experian login &amp; your goals for the call</span></div>
                <div className="detail-row"><b>Availability</b><span>M–F · same-day appts. not offered</span></div>
              </div>
            </div>

            <div className="calendly">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>

      <section className="surface-2">
        <div className="wrap">
          <div className="sec-label">
            <span className="ix">ii.</span>
            <span className="ttl">Before the call</span>
            <span className="spacer" />
            <span className="meta">Four short items</span>
          </div>
          <div className="sec-head">
            <h2>Before the <em>call</em>.</h2>
            <div className="meta">
              <div className="eyebrow">Preparation</div>
              <p>A short list of what to have ready. None of it is required — but the consult is more useful when you&apos;ve gathered these.</p>
            </div>
          </div>
          <div className="process">
            {[
              ["i.", "Experian login", "Create an account at experian.com and have your credentials handy. We'll pull your three-bureau report on the call."],
              ["ii.", "Known inaccuracies", "Items you already know shouldn't be there — accounts you didn't open, late payments you can document otherwise."],
              ["iii.", "Your goals", "Home, auto, business funding, peace of mind. Knowing the destination helps us pick the route."],
              ["iv.", "Questions", "Anything you've been told before, or that's confused you. We answer plainly."],
            ].map(([n, t, p]) => (
              <div className="step" key={String(n)}>
                <div className="n">{n}</div>
                <h4>{t}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
