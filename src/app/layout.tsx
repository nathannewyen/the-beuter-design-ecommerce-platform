import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { NewsletterModal } from "@/components/newsletter-modal";
import { siteConfig } from "@/lib/site";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const viewport = {
  themeColor: "#f5f3ee",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-foreground focus:text-background focus:px-3 focus:py-2 focus:beuter-eyebrow"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <CartDrawer />
        <NewsletterModal />
      </body>
    </html>
  );
}
