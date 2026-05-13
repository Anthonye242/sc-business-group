"use client";

import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url?: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
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
    <div className="w-full min-h-[700px] relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream-dark animate-pulse rounded-2xl">
          <p className="font-body text-muted text-sm">Loading calendar…</p>
        </div>
      )}
      <div
        className="calendly-inline-widget w-full"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
