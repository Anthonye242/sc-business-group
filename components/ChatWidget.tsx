"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Msg { from: "bot" | "user"; title?: string; body: string; }

const REPLIES: Record<string, string> = {
  "How long does it take?":
    "Most clients see meaningful movement within 30–60 days. A full restoration runs 4–6 months, depending on complexity.",
  "What does it cost?":
    "Initial consult is $50 (30 min). Restoration packages start at $499 with a transparent month-to-month structure — no contracts you can't exit.",
  "Will it hurt my score?":
    "No. We work strictly through documented dispute processes governed by the FCRA. Nothing we do is a shortcut — it's the law working in your favor.",
  "What do I bring to the consult?":
    "Your Experian login (create one at experian.com if needed), a list of any items you already know are inaccurate, and your goals — home, auto, business funding, peace of mind.",
  "Do you serve my state?":
    "We work with clients in 48 states. Schedule a consult and we'll confirm during the call.",
};

function ChatIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function ChatWidget() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      title: "Hello — welcome to S & C.",
      body: "I can answer common questions, share what we cover in a consult, or hand you off to book a call. What would you like to do?",
    },
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, open]);

  const send = (q: string) => {
    const answer = REPLIES[q] ?? "Let me get a specialist to follow up — book a consult below and we'll cover this on the call.";
    setMsgs((m) => [...m, { from: "user", body: q }, { from: "bot", body: answer }]);
  };

  return (
    <>
      {open && (
        <div className="chat-panel">
          <div className="chat-head">
            <div className="l">
              <h4>Concierge</h4>
              <span>Online · replies in &lt; 5 min</span>
            </div>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                {m.title && <strong>{m.title}</strong>}
                {m.body}
              </div>
            ))}
          </div>

          <div className="chat-quicks">
            {Object.keys(REPLIES).map((q) => (
              <button key={q} className="chat-quick" onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className="chat-foot">
            <a className="ghost" href="sms:+10000000000">Text us</a>
            <a
              className="primary"
              onClick={() => { setOpen(false); router.push("/book"); }}
            >
              Book a Consult
            </a>
          </div>
        </div>
      )}

      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        style={{ position: "fixed" }}
      >
        {open ? "✕" : <ChatIcon />}
        {!open && <span className="dot" />}
      </button>
    </>
  );
}
