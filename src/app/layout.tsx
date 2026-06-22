import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { SiteSidebar } from "@/components/site-sidebar";
import { TopUtility } from "@/components/top-utility";
import { MobileTopBar } from "@/components/mobile-top-bar";
import { SiteFooter } from "@/components/site-footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { NewsletterModal } from "@/components/newsletter-modal";
import { siteConfig } from "@/lib/site";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}`,
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations("nav");

  return (
    <html lang={locale} className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-foreground focus:text-background focus:px-3 focus:py-2 bd-eyebrow"
          >
            {t("skip")}
          </a>
          <SiteSidebar />
          <TopUtility />
          <MobileTopBar />
          <div className="md:pl-[var(--sidebar-width)] flex flex-col min-h-screen">
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
          <CartDrawer />
          <NewsletterModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
