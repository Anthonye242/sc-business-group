"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme";

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="arr">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

const SERVICES = [
  { num: "01", title: "Dispute Collections", desc: "Methodical, paper-trail-driven challenges against unverifiable collection accounts under the FCRA and FDCPA." },
  { num: "02", title: "Charge-Off Removal", desc: "Strategic dispute and goodwill correspondence designed to remove or restructure charge-offs on your behalf." },
  { num: "03", title: "Late Payment Corrections", desc: "Targeted disputes and goodwill letters to remove or repaint reported late payments where evidence supports it." },
  { num: "04", title: "Repossession Challenges", desc: "Forensic review of repossession reporting — surplus, deficiency, and verification — to surface what shouldn't stand." },
  { num: "05", title: "Bankruptcy Guidance", desc: "Post-discharge clean-up: making sure every included account is reporting correctly and zeroing where required." },
  { num: "06", title: "Medical Debt Assistance", desc: "Itemized challenges, HIPAA-aware disputes, and validation of medical collections that often shouldn't be there." },
];

function HeroEditorial() {
  return (
    <section className="hero hero-editorial flush">
      <div className="wrap">
        <div className="eyebrow">A boutique credit restoration practice · Est. 2021</div>
        <div className="row">
          <h1 className="display">
            Restore your<br />credit.<br /><em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>Reclaim</em> your<br />financial freedom.
          </h1>
          <div className="right">
            <div className="hero-rule" />
            <p className="lede">
              We work with a small roster of clients each quarter — disputing the inaccurate,
              correcting the misreported, and rebuilding what&apos;s been broken. Quietly. Precisely. On record.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <Link href="/book" className="cta">Book a Consult <Arrow /></Link>
              <Link href="/services" className="cta ghost">Our Services</Link>
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 32, paddingTop: 24, borderTop: ".5px solid var(--line)", width: "100%" }}>
              <div>
                <div className="display" style={{ fontSize: 38 }}>2,400<span style={{ color: "var(--accent-ink)" }}>+</span></div>
                <div className="kicker" style={{ color: "var(--muted)", marginTop: 6 }}>Clients served</div>
              </div>
              <div>
                <div className="display" style={{ fontSize: 38 }}>+118<span style={{ color: "var(--accent-ink)" }}>pts</span></div>
                <div className="kicker" style={{ color: "var(--muted)", marginTop: 6 }}>Avg. score lift</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStack() {
  return (
    <section className="hero hero-stack flush">
      <div className="wrap">
        <div className="stack-eyebrow">
          <span className="kicker">S &amp; C Business Group · Est. 2021</span>
          <span style={{ flex: 1, height: ".5px", background: "var(--line)" }} />
          <span className="kicker">Credit Restoration · Nationwide</span>
        </div>
        <h1 className="display">
          <div className="h1-row"><span className="num">i.</span> Restore</div>
          <div className="h1-row"><span className="num">ii.</span> <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>Rebuild</em></div>
          <div className="h1-row"><span className="num">iii.</span> Reclaim.</div>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, marginTop: 56, alignItems: "end" }}>
          <p className="lede" style={{ fontSize: 19, maxWidth: "52ch" }}>
            A two-woman credit restoration practice, working with a deliberately small roster of clients
            each quarter. We dispute what&apos;s inaccurate, correct what&apos;s misreported, and put the law to
            work on your behalf — file by file, line by line.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <Link href="/book" className="cta">Book a Consult <Arrow /></Link>
            <Link href="/about" className="cta ghost">Meet the Founders</Link>
          </div>
        </div>
        <div className="stats">
          {[
            { n: <>2,400<span style={{ color: "var(--accent-ink)" }}>+</span></>, l: "Clients served" },
            { n: <>+118<span style={{ color: "var(--accent-ink)" }}>pts</span></>, l: "Avg. score lift, 6 mo." },
            { n: <>94<span style={{ color: "var(--accent-ink)" }}>%</span></>, l: "Dispute success rate" },
            { n: <>48</>, l: "States served" },
          ].map((s, i) => (
            <div key={i}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroMarquee() {
  const items = ["Restore Your Credit", "Reclaim Your Freedom", "Bonded & Insured", "CROA Compliant", "Est. 2021", "By Appointment"];
  return (
    <section className="hero hero-marquee flush">
      <div className="mq">
        <div className="mq-track">
          {[...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 28 }}>S &amp; C Business Group · Credit Restoration</div>
            <h1 className="display">The quiet<br />work of <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>repair</em>.</h1>
            <p className="lede" style={{ marginTop: 28, maxWidth: "44ch" }}>
              We don&apos;t promise miracles. We promise method — a deliberate, documented restoration
              process built on the same federal protections every consumer is entitled to.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <Link href="/book" className="cta">Book a Consult <Arrow /></Link>
              <Link href="/services" className="cta ghost">Our Services</Link>
            </div>
          </div>
          <div className="meta">
            {[
              { k: "Practice", v: <>Two partners. <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>One roster.</em></> },
              { k: "Method", v: <>FCRA. FDCPA. <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>Paperwork.</em></> },
              { k: "Result", v: <>+118 pts <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>average.</em></> },
            ].map((b) => (
              <div key={b.k} className="meta-block">
                <div className="kicker" style={{ color: "var(--muted)" }}>{b.k}</div>
                <div style={{ fontFamily: "var(--display)", fontSize: 34, marginTop: 8, lineHeight: 1.05 }}>{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { heroVariant } = useTheme();
  const Hero = heroVariant === "stack" ? HeroStack : heroVariant === "marquee" ? HeroMarquee : HeroEditorial;

  return (
    <div className="page">
      <Hero />

      {/* Services */}
      <section>
        <div className="wrap">
          <div className="sec-label">
            <span className="ix">i.</span>
            <span className="ttl">Practice</span>
            <span className="spacer" />
            <span className="meta">01 — 08</span>
          </div>
          <div className="sec-head">
            <h2>What we <em>restore</em>.</h2>
            <div className="meta">
              <div className="eyebrow">Services · 01 — 08</div>
              <p>Eight focused practice areas. We don&apos;t dabble — every service is documented, FCRA-aligned, and built around the kind of evidence that holds up at the bureau.</p>
            </div>
          </div>
          <div className="services">
            {SERVICES.map((s) => (
              <Link href="/services" key={s.num} className="service">
                <div className="num">{s.num}</div>
                <div className="body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="arr"><Arrow size={18} /></div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "flex-end" }}>
            <Link href="/services" className="cta ghost">All eight services <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="surface-2">
        <div className="wrap">
          <div className="sec-label">
            <span className="ix">ii.</span>
            <span className="ttl">Method</span>
            <span className="spacer" />
            <span className="meta">Four phases</span>
          </div>
          <div className="sec-head">
            <h2>How the work <em>moves</em>.</h2>
            <div className="meta">
              <div className="eyebrow">Process</div>
              <p>A four-phase restoration. We move methodically, communicate openly, and never promise what we can&apos;t document.</p>
            </div>
          </div>
          <div className="process">
            {[
              ["i.", "Consult", "A 30-minute call. We pull your report, audit what we see, and tell you — honestly — whether we can help."],
              ["ii.", "Audit", "A line-by-line forensic review of all three bureaus. We mark every inaccuracy, every weak link, every leverage point."],
              ["iii.", "Dispute", "Round-by-round disputes, validation requests, and direct correspondence — escalated until items move or are verified."],
              ["iv.", "Rebuild", "Once your report is clean, we coach you on the habits and instruments that turn 700s into 800s — for good."],
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

      {/* Stats */}
      <section>
        <div className="wrap">
          <div className="sec-label">
            <span className="ix">iii.</span>
            <span className="ttl">Record</span>
            <span className="spacer" />
            <span className="meta">As of Q2 / 2026</span>
          </div>
          <div className="statband">
            <div>
              <div className="big"><em>2,400</em>+</div>
              <div className="lbl">Clients served since 2021, by appointment only.</div>
            </div>
            <div>
              <div className="big">+<em>118</em></div>
              <div className="lbl">Average score improvement over six months of active work.</div>
            </div>
            <div>
              <div className="big"><em>94</em>%</div>
              <div className="lbl">Dispute success rate across the items we take on.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-ink">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="sec-label" style={{ justifyContent: "center", maxWidth: 640, margin: "0 auto 56px" }}>
            <span className="ix">iv.</span>
            <span className="ttl">Begin</span>
            <span className="spacer" />
            <span className="meta">30 min · $50</span>
          </div>
          <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(48px,8vw,108px)", margin: "0 auto 32px", maxWidth: "16ch", lineHeight: .98, letterSpacing: "-.015em" }}>
            The first <em style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>thirty minutes</em> are everything.
          </h2>
          <p style={{ color: "rgba(245,240,232,.7)", maxWidth: "56ch", margin: "0 auto 36px", fontSize: 17 }}>
            Bring your Experian login and your questions. We&apos;ll tell you — plainly — what we see, what&apos;s possible,
            and what it will cost. Same-day appointments aren&apos;t available; thoughtful work isn&apos;t rushed.
          </p>
          <Link href="/book" className="cta" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}>
            Book a Consultation <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
