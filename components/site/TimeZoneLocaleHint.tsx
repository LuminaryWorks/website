"use client";

import { localePath } from "@/lib/i18n/paths";
import { detectClientPreferredLocale, matchSupportedLocale } from "@/lib/i18n/preferred-locale";
import { useEffect } from "react";

const COOKIE = "lw-locale";

/** When Accept-Language missed every supported tag, apply the time zone hint once. */
export function TimeZoneLocaleHint() {
  useEffect(() => {
    if (document.cookie.split(";").some((part) => part.trim().startsWith(`${COOKIE}=`))) return;
    const languages = [...(navigator.languages ?? []), navigator.language].filter(Boolean);
    if (languages.some((tag) => matchSupportedLocale(tag))) return;
    const next = detectClientPreferredLocale(null);
    if (next === "en") return;
    const path = `${window.location.pathname}${window.location.search}`;
    window.location.replace(localePath(next, path));
  }, []);
  return null;
}
