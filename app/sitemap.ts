import { PAGE_PATHS } from "@/lib/i18n/metadata";
import { localePath } from "@/lib/i18n/paths";
import { SITE_URL } from "@/lib/urls";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

function languagesFor(path: string): Record<string, string> {
  const zh = `${SITE_URL}${localePath("zh", path)}`;
  const en = `${SITE_URL}${localePath("en", path)}`;
  return {
    "zh-CN": zh,
    zh,
    en,
    "x-default": zh,
  };
}

function priorityFor(locale: "zh" | "en", path: string): number {
  const isHome = path === "/";
  const isLegal = path.startsWith("/legal/");
  if (locale === "zh") {
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
    for (const locale of ["zh", "en"] as const) {
      entries.push({
        url: `${SITE_URL}${localePath(locale, path)}`,
        lastModified,
        priority: priorityFor(locale, path),
        alternates: { languages: languagesFor(path) },
      });
    }
  }

  return entries;
}
