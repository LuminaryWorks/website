import { DEFAULT_LOCALE, type Locale, isPrefixedLocale } from "./config";

function ensureLeadingSlash(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

function ensureTrailingSlash(path: string): string {
  if (path === "/") {
    return path;
  }
  return path.endsWith("/") ? path : `${path}/`;
}

export function normalizePath(path: string): string {
  if (!path || path === "/") {
    return "/";
  }
  return ensureTrailingSlash(ensureLeadingSlash(path));
}

export function localePath(locale: Locale, path = "/"): string {
  const normalized = normalizePath(path);
  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }
  if (normalized === "/") {
    return `/${locale}/`;
  }
  return `/${locale}${normalized}`;
}

export function unlocalizedPath(pathname: string): string {
  const raw = pathname || "/";
  const match = raw.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)/);
  if (match?.[1] && isPrefixedLocale(match[1])) {
    const stripped = raw.slice(match[0].length);
    return normalizePath(stripped || "/");
  }
  return normalizePath(raw);
}

export function localeFromPathname(pathname: string): Locale {
  const raw = pathname || "/";
  const match = raw.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)/);
  if (match?.[1] && isPrefixedLocale(match[1])) {
    return match[1];
  }
  return DEFAULT_LOCALE;
}
