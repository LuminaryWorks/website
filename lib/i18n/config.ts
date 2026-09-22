export const LOCALES = ["zh-CN", "en", "zh-TW", "es", "pt", "nl", "it", "ja", "ko"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh-CN";

/** Locales that use a URL prefix (`/en/...`). Default locale stays at `/`. */
export const PREFIXED_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  es: "Español",
  pt: "Português",
  nl: "Nederlands",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  "zh-CN": "简",
  en: "EN",
  "zh-TW": "繁",
  es: "ES",
  pt: "PT",
  nl: "NL",
  it: "IT",
  ja: "JA",
  ko: "KO",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  "zh-CN": "zh-CN",
  en: "en",
  "zh-TW": "zh-TW",
  es: "es",
  pt: "pt",
  nl: "nl",
  it: "it",
  ja: "ja",
  ko: "ko",
};

export const LOCALE_OG: Record<Locale, string> = {
  "zh-CN": "zh_CN",
  en: "en_US",
  "zh-TW": "zh_TW",
  es: "es_ES",
  pt: "pt_PT",
  nl: "nl_NL",
  it: "it_IT",
  ja: "ja_JP",
  ko: "ko_KR",
};

/** Locales with dedicated legal markdown under content/legal/. */
export const LEGAL_LOCALES = ["zh-CN", "en"] as const;
export type LegalLocale = (typeof LEGAL_LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isPrefixedLocale(value: string): value is Locale {
  return isLocale(value) && value !== DEFAULT_LOCALE;
}

export function isLegalLocale(value: string): value is LegalLocale {
  return (LEGAL_LOCALES as readonly string[]).includes(value);
}

/** Legal body locale: only zh-CN and en; everyone else reads English. */
export function legalContentLocale(locale: Locale): LegalLocale {
  return locale === "zh-CN" ? "zh-CN" : "en";
}

/** URL locale for legal links (footer etc.). */
export function legalLinkLocale(locale: Locale): LegalLocale {
  return locale === "zh-CN" ? "zh-CN" : "en";
}
