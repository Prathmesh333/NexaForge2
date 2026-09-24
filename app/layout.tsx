import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://prathmesh333.github.io/NexaForge2/"),
  title: "AIRA — AI & Software Product Studio",
  description: "AIRA builds AI products, web applications, automation, MVPs and custom software from idea to launch.",
  icons: { icon: "/NexaForge2/assets/aira-favicon.svg" },
  openGraph: { title: "AIRA — Built for the AI era", description: "AI products, software, automation and digital experiences built from idea to launch.", type: "website", images: [{ url: "/NexaForge2/assets/aira-social.png", width: 1200, height: 630, alt: "AIRA — Built for the AI era" }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${body.variable} ${display.variable}`}><body>{children}</body></html>;
}
