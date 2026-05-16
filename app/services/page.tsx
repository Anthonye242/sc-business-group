import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — S & C Business Group",
  description:
    "Eight focused credit restoration practice areas — from dispute collections to identity restoration. FCRA-aligned, documented, and built to move.",
};

const SERVICES = [
  { num: "01", title: "Dispute Collections", desc: "Methodical, paper-trail-driven challenges against unverifiable collection accounts under the FCRA and FDCPA.", time: "30–90 days", scope: "Per-account dispute, escalation, and validation requests" },
  { num: "02", title: "Charge-Off Removal", desc: "Strategic dispute and goodwill correspondence designed to remove or restructure charge-offs on your behalf.", time: "45–120 days", scope: "Direct creditor negotiation + bureau-level dispute" },
  { num: "03", title: "Late Payment Corrections", desc: "Targeted disputes and goodwill letters to remove or repaint reported late payments where evidence supports it.", time: "30–60 days", scope: "Goodwill advocacy + bureau correction" },
  { num: "04", title: "Repossession Challenges", desc: "Forensic review of repossession reporting — surplus, deficiency, and verification — to surface what shouldn't stand.", time: "60–120 days", scope: "Document review + dispute strategy" },
  { num: "05", title: "Bankruptcy Guidance", desc: "Post-discharge clean-up: making sure every included account is reporting correctly and zeroing where required.", time: "60–90 days", scope: "Audit + line-item correction" },
  { num: "06", title: "Medical Debt Assistance", desc: "Itemized challenges, HIPAA-aware disputes, and validation of medical collections that often shouldn't be there.", time: "30–60 days", scope: "Collection review + dispute" },
  { num: "07", title: "Student Loan Review", desc: "Auditing federal and private student loan reporting — duplicate accounts, status errors, and rehabilitation paths.", time: "30–90 days", scope: "Reporting audit + servicer correspondence" },
  { num: "08", title: "Identity Restoration", desc: "Suspect fraud or mixed files? We freeze, document, and dispute — restoring your file and your peace of mind.", time: "Varies", scope: "FTC report + dispute + monitoring" },
];

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="arr">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className="page">
      <section className="services-hero flush">
        <div className="wrap">
          <div className="grid">
            <h1>What we <em>restore</em>.</h1>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Practice areas · 01 — 08</div>
              <p>
                Eight things we do, and very few we don&apos;t. Every engagement begins with a paid consultation —
                we won&apos;t take work we can&apos;t move, and we won&apos;t accept a client we can&apos;t serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flush" style={{ paddingTop: 24, paddingBottom: "clamp(120px, 14vw, 192px)" }}>
        <div className="wrap">
          <div className="sec-label">
            <span className="ix">i.</span>
            <span className="ttl">Practice Areas</span>
            <span className="spacer" />
            <span className="meta">01 — 08</span>
          </div>
          {SERVICES.map((s) => (
            <div className="service-detail" key={s.num}>
              <div className="num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p className="desc">{s.desc}</p>
              </div>
              <div className="meta">
                <div className="meta-row"><b>Typical timeline</b><span>{s.time}</span></div>
                <div className="meta-row"><b>Scope</b><span style={{ maxWidth: "26ch", textAlign: "right" }}>{s.scope}</span></div>
                <div className="meta-row"><b>Documented</b><span>FCRA / FDCPA-aligned</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-2">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <div className="sec-label" style={{ justifyContent: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            <span className="ix">ii.</span>
            <span className="ttl">Beyond the list</span>
            <span className="spacer" />
            <span className="meta">By exception</span>
          </div>
          <div className="kicker" style={{ color: "var(--muted)" }}>Don&apos;t see what you need?</div>
          <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(40px,6vw,72px)", margin: "16px 0 24px", lineHeight: 1 }}>
            Bring it to the <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>consultation.</em>
          </h2>
          <p style={{ color: "var(--ink-soft)", maxWidth: 540, margin: "0 auto 28px" }}>
            Our scope is deliberate, but our judgment isn&apos;t rigid. If your situation sits at the edge of what
            we usually take on, the consult is where we figure that out — together.
          </p>
          <Link href="/book" className="cta">Book a Consultation <Arrow /></Link>
        </div>
      </section>
    </div>
  );
}
