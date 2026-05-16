import type { Metadata } from "next";
import {
  Italiana,
  DM_Sans,
  Cormorant_Garamond,
  Manrope,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import TweaksPanel from "@/components/TweaksPanel";
import { ThemeProvider } from "@/lib/theme";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "S & C Business Group LLC | Credit Restoration",
    template: "%s | S & C Business Group LLC",
  },
  description:
    "A boutique credit restoration practice. We dispute, correct, and rebuild — methodically, transparently, and on record.",
  keywords: ["credit repair", "credit restoration", "dispute collections", "FCRA", "financial freedom"],
  openGraph: { siteName: "S & C Business Group LLC", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${dmSans.variable} ${cormorant.variable} ${manrope.variable} ${jetbrains.variable}`}
      style={
        {
          "--font-italiana-loaded": `var(${italiana.variable})`,
          "--font-dm-sans-loaded": `var(${dmSans.variable})`,
          "--font-cormorant-loaded": `var(${cormorant.variable})`,
          "--font-manrope-loaded": `var(${manrope.variable})`,
          "--font-jetbrains-loaded": `var(${jetbrains.variable})`,
        } as React.CSSProperties
      }
    >
      <style>{`
        :root {
          --display: var(--font-italiana), "Cormorant Garamond", serif;
          --body: var(--font-dm-sans), "DM Sans", ui-sans-serif, system-ui, sans-serif;
          --mono: var(--font-jetbrains), ui-monospace, "SF Mono", Menlo, monospace;
        }
        [data-type="editorial"] {
          --display: var(--font-italiana), "Cormorant Garamond", serif;
          --body: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif;
        }
        [data-type="classic"] {
          --display: var(--font-cormorant), "Italiana", serif;
          --body: var(--font-manrope), ui-sans-serif, system-ui, sans-serif;
        }
        [data-type="modern"] {
          --display: var(--font-cormorant), serif;
          --body: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif;
        }
      `}</style>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <ThemeProvider>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <ChatWidget />
          <TweaksPanel />
        </ThemeProvider>
      </body>
    </html>
  );
}
