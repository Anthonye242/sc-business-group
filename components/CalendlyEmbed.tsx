"use client";

import { useEffect, useState } from "react";

export default function CalendlyEmbed({ url }: { url?: string }) {
  const [loaded, setLoaded] = useState(false);
  const calendlyUrl =
    url ??
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/placeholder";

  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) {
      setLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, []);

  return (
    <div style={{ width: "100%", minHeight: 700, position: "relative" }}>
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "var(--paper-2)", borderRadius: 4,
        }}>
          <span className="kicker" style={{ color: "var(--muted)" }}>Loading calendar…</span>
        </div>
      )}
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: 320, height: 700, width: "100%" }}
      />
    </div>
  );
}
