import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Providers } from "@/components/site/Providers";
import { inter } from "@/lib/fonts";
import {
  LOCALE_HTML_LANG,
  type Locale,
  PREFIXED_LOCALES,
  isPrefixedLocale,
} from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/urls";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isPrefixedLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;

  return (
    <html lang={LOCALE_HTML_LANG[locale]} className={inter.variable} suppressHydrationWarning>
      <body>
        <Providers locale={locale}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
