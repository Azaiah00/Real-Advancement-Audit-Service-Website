import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Real Advancement — Audits that move real estate forward",
  description:
    "An audit-and-install firm for real estate teams, contractors, and home service companies adapting to the AI era. CMAs, smart profiles, renderings, virtual staging.",
  metadataBase: new URL("https://realadvancement.example"),
  openGraph: {
    title: "Real Advancement",
    description:
      "We audit your operation, then install the AI tools that put time back on the clock.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="grain min-h-[100dvh] bg-bone-50 text-ink-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
