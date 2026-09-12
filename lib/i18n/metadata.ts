import { SITE_URL } from "@/lib/urls";
import type { Metadata } from "next";
import type { Locale } from "./config";
import { LOCALES } from "./config";
import { MESSAGES } from "./messages";
import { localePath } from "./paths";
import type { Messages } from "./types";

export const PAGE_PATHS = {
  home: "/",
  products: "/products/",
  ecosystem: "/ecosystem/",
  deploy: "/deploy/",
  about: "/about/",
} as const;

export type PageKey = keyof Messages["meta"];

export function buildPageMetadata(locale: Locale, pageKey: PageKey): Metadata {
  const { title, description } = MESSAGES[locale].meta[pageKey];
  const path = PAGE_PATHS[pageKey];

  const languages: Record<string, string> = {};
  for (const code of LOCALES) {
    languages[code] = `${SITE_URL}${localePath(code, path)}`;
  }
  languages["x-default"] = `${SITE_URL}${localePath("zh", path)}`;

  const url = `${SITE_URL}${localePath(locale, path)}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "LuminaryWorks",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
  };
}
