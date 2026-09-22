import { SITE_URL } from "@/lib/urls";
import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  LEGAL_LOCALES,
  LOCALES,
  LOCALE_OG,
  type Locale,
  isLegalLocale,
} from "./config";
import { MESSAGES } from "./messages";
import { localePath } from "./paths";

export const PAGE_PATHS = {
  home: "/",
  products: "/products/",
  ecosystem: "/ecosystem/",
  deploy: "/deploy/",
  about: "/about/",
  "legal/terms": "/legal/terms/",
  "legal/privacy": "/legal/privacy/",
  "legal/trial-data-deletion": "/legal/trial-data-deletion/",
} as const;

export type PageKey = keyof typeof PAGE_PATHS;

export function languagesForPath(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  const isLegal = path.startsWith("/legal/");
  const locales = isLegal ? LEGAL_LOCALES : LOCALES;

  for (const locale of locales) {
    languages[locale] = `${SITE_URL}${localePath(locale, path)}`;
  }

  // Broad zh tag for simplified Chinese root
  languages.zh = languages["zh-CN"];
  languages["x-default"] = languages[DEFAULT_LOCALE];
  return languages;
}

export function buildPageMetadata(locale: Locale, pageKey: PageKey): Metadata {
  const { title, description } = MESSAGES[locale].meta[pageKey];
  const path = PAGE_PATHS[pageKey];
  const isLegal = path.startsWith("/legal/");

  if (isLegal && !isLegalLocale(locale)) {
    throw new Error(`Legal pages are only published for zh-CN and en (got ${locale})`);
  }

  const url = `${SITE_URL}${localePath(locale, path)}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: languagesForPath(path),
    },
    openGraph: {
      type: "website",
      url,
      siteName: "LuminaryWorks",
      title,
      description,
      locale: LOCALE_OG[locale],
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
