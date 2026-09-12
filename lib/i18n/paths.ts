import { DEFAULT_LOCALE, type Locale } from "./config";

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
    return "/en/";
  }
  return `/en${normalized}`;
}

export function unlocalizedPath(pathname: string): string {
  const raw = pathname || "/";
  const stripped = raw.replace(/^\/en(?=\/|$)/, "");
  return normalizePath(stripped || "/");
}
