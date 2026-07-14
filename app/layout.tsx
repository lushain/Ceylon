import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import CursorGem from "./components/CursorGem";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ceylon — Gemstones & Bespoke Fine Jewellery",
  description:
    "Ethically sourced Ceylon sapphire, spinel, alexandrite and moonstone, cut for the light and set by hand into heirlooms. Mine-to-hand traceability from Ratnapura, Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${hanken.variable} ${plexMono.variable}`}
      >
        {children}
        <CursorGem />
      </body>
    </html>
  );
}
