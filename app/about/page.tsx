import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — S & C Business Group",
  description:
    "Meet the founders of S & C Business Group — a two-woman credit restoration practice built on diligence, discretion, and the law.",
};

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="arr">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="page">
      <section className="flush" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="about-hero">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Founders · Est. 2021</div>
              <h1>Two partners.<br /><em>One</em> roster.</h1>
            </div>
            <p style={{ fontSize: 18, color: "var(--ink-soft)", maxWidth: "44ch", margin: 0, paddingBottom: 18 }}>
              S &amp; C Business Group was founded on a simple frustration: credit repair, done well, is
              detailed and patient work — and almost nobody was doing it that way. So we built the firm we
              wished our clients had been able to call.
            </p>
          </div>
        </div>
      </section>

      <section className="flush" style={{ paddingTop: 0, paddingBottom: "clamp(120px, 14vw, 192px)" }}>
        <div className="wrap">
          <div className="sec-label" style={{ marginBottom: 64 }}>
            <span className="ix">i.</span>
            <span className="ttl">The Founders</span>
            <span className="spacer" />
            <span className="meta">Two partners · One roster</span>
          </div>
          <div className="partners">
            <div className="partner">
              <div className="photo">
                <Image
                  src="/images/partner-courtney.png"
                  alt="Courtney B., Co-Founder"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 900px) 100vw, 440px"
                />
                <div className="tag">Courtney B.</div>
              </div>
              <div>
                <div className="kicker" style={{ color: "var(--accent-ink)" }}>Co-Founder · Credit Strategy</div>
                <h3 style={{ marginTop: 10 }}>Courtney B.</h3>
                <div className="role">The &ldquo;C&rdquo; in S &amp; C</div>
                <p>
                  Courtney leads our dispute strategy and creditor correspondence. A meticulous reader
                  of fine print and a patient correspondent, she built the dispute protocols the firm
                  runs on — and personally signs every escalation letter that leaves our office.
                </p>
                <div className="sig">— Courtney</div>
              </div>
            </div>

            <div className="partner">
              <div className="photo">
                <Image
                  src="/images/partner-unknown.png"
                  alt="S., Co-Founder"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 900px) 100vw, 440px"
                />
                <div className="tag">S.</div>
              </div>
              <div>
                <div className="kicker" style={{ color: "var(--accent-ink)" }}>Co-Founder · Client Practice</div>
                <h3 style={{ marginTop: 10 }}>S.</h3>
                <div className="role">The &ldquo;S&rdquo; in S &amp; C</div>
                <p>
                  S. runs the client side of the practice — consultations, onboarding, and the long-arc
                  rebuilding work that follows a clean report. Her clients describe her, often, as the
                  reason they finally bought the house.
                </p>
                <div className="sig">— S.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-2">
        <div className="wrap">
          <div className="sec-label">
            <span className="ix">ii.</span>
            <span className="ttl">Principles</span>
            <span className="spacer" />
            <span className="meta">Four ideas</span>
          </div>
          <div className="sec-head">
            <h2>What we <em>believe</em>.</h2>
            <div className="meta">
              <div className="eyebrow">Principles</div>
              <p>Four ideas the practice is built on. They keep us honest with each other, and with you.</p>
            </div>
          </div>
          <div className="process">
            {[
              ["i.", "Diligence, not drama.", "Credit repair is paperwork — meticulous, repeatable, lawful. We do that work. We don't sell shortcuts."],
              ["ii.", "Discretion is default.", "Your financial life isn't anyone else's business. We hold it accordingly — written, encrypted, and never shared."],
              ["iii.", "Honest answers first.", "If we can't help, we'll say so on the consult. If we can, we'll tell you exactly what it will take."],
              ["iv.", "Small by design.", "We take a deliberately limited number of clients per quarter so every file gets the attention it deserves."],
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

      <section className="surface-ink">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="sec-label" style={{ justifyContent: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            <span className="ix">iii.</span>
            <span className="ttl">Begin</span>
            <span className="spacer" />
            <span className="meta">30 min · $50</span>
          </div>
          <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(40px,7vw,88px)", margin: "0 auto 28px", maxWidth: "18ch", lineHeight: 1, letterSpacing: "-.015em" }}>
            Meet us on a <em style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>consult.</em>
          </h2>
          <Link href="/book" className="cta" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}>
            Book a Consultation <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
