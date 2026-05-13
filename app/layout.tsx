import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "S & C Business Group LLC | Credit Repair Services",
    template: "%s | S & C Business Group LLC",
  },
  description:
    "Professional credit repair services in the United States. We dispute collections, remove charge-offs, and help you reclaim your financial freedom.",
  keywords: [
    "credit repair",
    "dispute collections",
    "remove charge-offs",
    "credit score",
    "financial freedom",
    "credit restoration",
  ],
  openGraph: {
    siteName: "S & C Business Group LLC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
