import { SITE_URL } from "@/lib/urls";
import type { Metadata } from "next";
import type { Locale } from "./config";
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

export function buildPageMetadata(locale: Locale, pageKey: PageKey): Metadata {
  const { title, description } = MESSAGES[locale].meta[pageKey];
  const path = PAGE_PATHS[pageKey];

  const zhUrl = `${SITE_URL}${localePath("zh", path)}`;
  const enUrl = `${SITE_URL}${localePath("en", path)}`;
  const url = locale === "zh" ? zhUrl : enUrl;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "zh-CN": zhUrl,
        zh: zhUrl,
        en: enUrl,
        "x-default": zhUrl,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "LuminaryWorks",
      title,
      description,
      locale: locale === "zh" ? "zh_CN" : "en_US",
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
