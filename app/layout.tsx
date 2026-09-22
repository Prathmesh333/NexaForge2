import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://prathmesh333.github.io/NexaForge2/"),
  title: "NexaForge Labs | From idea to working product",
  description: "NexaForge Labs turns ambitious ideas into AI products, web applications and intelligent workflows.",
  openGraph: { title: "NexaForge Labs | You imagine it. We build it.", description: "An AI-native product studio for ambitious founders and teams.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${body.variable} ${display.variable}`}><body>{children}</body></html>;
}
