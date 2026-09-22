import { DEFAULT_LOCALE, LEGAL_LOCALES, LOCALES, type Locale } from "@/lib/i18n/config";
import { PAGE_PATHS, languagesForPath } from "@/lib/i18n/metadata";
import { localePath } from "@/lib/i18n/paths";
import { SITE_URL } from "@/lib/urls";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

function priorityFor(locale: Locale, path: string): number {
  const isHome = path === "/";
  const isLegal = path.startsWith("/legal/");
  if (locale === DEFAULT_LOCALE) {
    if (isHome) {
      return 1;
    }
    return isLegal ? 0.6 : 0.8;
  }
  if (isHome) {
    return 0.7;
  }
  return isLegal ? 0.4 : 0.5;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of Object.values(PAGE_PATHS)) {
    const isLegal = path.startsWith("/legal/");
    const locales: readonly Locale[] = isLegal ? LEGAL_LOCALES : LOCALES;
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}${localePath(locale, path)}`,
        lastModified,
        priority: priorityFor(locale, path),
        alternates: { languages: languagesForPath(path) },
      });
    }
  }

  return entries;
}
