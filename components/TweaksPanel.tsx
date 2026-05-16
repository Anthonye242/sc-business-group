"use client";

import { useState } from "react";
import { useTheme } from "@/lib/theme";

const PALETTES = [
  { key: "cream", color: "#f5f0e8", label: "Cream" },
  { key: "blush", color: "#f7eee9", label: "Blush" },
  { key: "champagne", color: "#f4ece0", label: "Champagne" },
  { key: "sage", color: "#eef0e8", label: "Sage" },
] as const;

const TYPES = [
  { key: "editorial", label: "Italiana" },
  { key: "classic", label: "Cormorant" },
  { key: "modern", label: "Tenor" },
] as const;

const HEROES = [
  { key: "editorial", label: "Editorial" },
  { key: "stack", label: "Numbered Stack" },
  { key: "marquee", label: "Marquee" },
] as const;

export default function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const { palette, setPalette, dark, setDark, typeStyle, setTypeStyle, heroVariant, setHeroVariant } = useTheme();

  return (
    <>
      {open && (
        <div className="tweaks-panel">
          <div>
            <h6>Palette</h6>
            <div className="palette-swatches">
              {PALETTES.map((p) => (
                <button
                  key={p.key}
                  className={`palette-swatch ${palette === p.key ? "active" : ""}`}
                  style={{ background: p.color }}
                  title={p.label}
                  onClick={() => setPalette(p.key)}
                />
              ))}
            </div>
          </div>

          <div>
            <h6>Dark Mode</h6>
            <div className="dark-toggle">
              <span>{dark ? "On" : "Off"}</span>
              <button className={dark ? "on" : ""} onClick={() => setDark(!dark)} />
            </div>
          </div>

          <div>
            <h6>Typography</h6>
            <div className="type-btns">
              {TYPES.map((t) => (
                <button
                  key={t.key}
                  className={`type-btn ${typeStyle === t.key ? "active" : ""}`}
                  onClick={() => setTypeStyle(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h6>Home Hero</h6>
            <div className="hero-btns">
              {HEROES.map((h) => (
                <button
                  key={h.key}
                  className={`hero-btn ${heroVariant === h.key ? "active" : ""}`}
                  onClick={() => setHeroVariant(h.key)}
                >
                  {h.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button className="tweaks-btn" onClick={() => setOpen((o) => !o)} title="Design tweaks" aria-label="Toggle tweaks panel">
        ⚙
      </button>
    </>
  );
}
