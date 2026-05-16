"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Palette = "cream" | "blush" | "champagne" | "sage";
type TypeStyle = "editorial" | "classic" | "modern";
type HeroVariant = "editorial" | "stack" | "marquee";

interface ThemeCtx {
  palette: Palette;
  setPalette: (p: Palette) => void;
  dark: boolean;
  setDark: (d: boolean) => void;
  typeStyle: TypeStyle;
  setTypeStyle: (t: TypeStyle) => void;
  heroVariant: HeroVariant;
  setHeroVariant: (h: HeroVariant) => void;
}

const ThemeContext = createContext<ThemeCtx>({
  palette: "cream", setPalette: () => {},
  dark: false, setDark: () => {},
  typeStyle: "editorial", setTypeStyle: () => {},
  heroVariant: "editorial", setHeroVariant: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [palette, setPalette] = useState<Palette>("sage");
  const [dark, setDark] = useState(false);
  const [typeStyle, setTypeStyle] = useState<TypeStyle>("editorial");
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("editorial");

  useEffect(() => {
    const el = document.documentElement;
    if (palette === "cream") {
      el.removeAttribute("data-palette");
    } else {
      el.setAttribute("data-palette", palette);
    }
    el.setAttribute("data-dark", String(dark));
    el.setAttribute("data-type", typeStyle);
  }, [palette, dark, typeStyle]);

  return (
    <ThemeContext.Provider value={{ palette, setPalette, dark, setDark, typeStyle, setTypeStyle, heroVariant, setHeroVariant }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
