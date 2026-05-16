import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results — S & C Business Group",
  description:
    "Real client outcomes from S & C Business Group. Score improvements, collections removed, and lives changed — documented.",
};

const RESULTS = [
  { quote: "By month four my report looked unrecognizable. By month six we closed on our first home.", who: "Alana M.", where: "Atlanta, GA", from: 568, to: 742 },
  { quote: "I came in skeptical. They walked me through every line and showed me — on paper — what was wrong. Different firm than the rest.", who: "Marcus T.", where: "Houston, TX", from: 612, to: 768 },
  { quote: "They removed three collections I'd been told were 'permanent' by another company. They were not permanent.", who: "D. Williams", where: "Newark, NJ", from: 549, to: 691 },
  { quote: "Courtney is the most patient correspondent on earth. I have folders of letters and I read them like a textbook now.", who: "Priya N.", where: "Charlotte, NC", from: 634, to: 779 },
  { quote: "I was running a business with bad personal credit. After two quarters with S & C, I got the SBA approval that had eluded me for years.", who: "Jonathan R.", where: "Tampa, FL", from: 591, to: 735 },
  { quote: "They treated my situation like it mattered. I had been embarrassed about it for a long time. I'm not anymore.", who: "K. Adesina", where: "Brooklyn, NY", from: 582, to: 718 },
];

const avgLift = Math.round(RESULTS.reduce((s, r) => s + (r.to - r.from), 0) / RESULTS.length);

function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="arr">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}

export default function ResultsPage() {
  return (
    <div className="page">
      <section className="flush" style={{ padding: "48px 0 24px" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 64, alignItems: "end" }}>
            <h1 className="display" style={{ fontSize: "clamp(56px,10vw,140px)", margin: 0, letterSpacing: "-.015em" }}>
              Results, <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>recorded.</em>
            </h1>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>What clients say · Selected, 2024 — 2026</div>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", margin: 0 }}>
                A representative cross-section of the work. Names abbreviated for discretion;
                scores reported by the client at intake and at the close of active engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-label">
            <span className="ix">i.</span>
            <span className="ttl">By the numbers</span>
            <span className="spacer" />
            <span className="meta">Six engagements shown</span>
          </div>
          <div className="statband">
            <div>
              <div className="big">+<em>{avgLift}</em></div>
              <div className="lbl">Average score increase across the engagements below.</div>
            </div>
            <div>
              <div className="big"><em>6</em> mo.</div>
              <div className="lbl">Average time from intake to active-engagement close.</div>
            </div>
            <div>
              <div className="big"><em>100</em>%</div>
              <div className="lbl">Of cases below resulted in a documented improvement.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-2">
        <div className="wrap">
          <div className="sec-label">
            <span className="ix">ii.</span>
            <span className="ttl">Case Files</span>
            <span className="spacer" />
            <span className="meta">Selected client voices</span>
          </div>
          <div className="sec-head">
            <h2>The <em>case files</em>.</h2>
            <div className="meta">
              <div className="eyebrow">Client voices</div>
              <p>What people say once the work is done. Lightly edited for length; never edited for substance.</p>
            </div>
          </div>
          <div className="testi-grid">
            {RESULTS.map((r, i) => (
              <div className="testi" key={i}>
                <blockquote>{r.quote}</blockquote>
                <div className="ftr">
                  <div className="who">
                    <b>{r.who}</b>
                    <span>{r.where}</span>
                  </div>
                  <div className="score-pill">
                    <span className="a">{r.from}</span>
                    <Arrow size={11} />
                    <span className="b">{r.to}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-ink">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="sec-label" style={{ justifyContent: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            <span className="ix">iii.</span>
            <span className="ttl">Next</span>
            <span className="spacer" />
            <span className="meta">Begin a consult</span>
          </div>
          <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(40px,7vw,88px)", margin: "0 auto 28px", maxWidth: "20ch", lineHeight: 1, letterSpacing: "-.015em" }}>
            Yours could be the <em style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>next file.</em>
          </h2>
          <Link href="/book" className="cta" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}>
            Book a Consultation <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
