import { isLocale } from "@/lib/i18n/config";
import { localeFromPathname, localePath, unlocalizedPath } from "@/lib/i18n/paths";
import { matchSupportedLocale, resolvePreferredLocale } from "@/lib/i18n/preferred-locale";
import { NextResponse, type NextRequest } from "next/server";

const COOKIE = "lw-locale";

function preferredFromRequest(request: NextRequest): { locale: string; fromLanguage: boolean } {
  const cookie = request.cookies.get(COOKIE)?.value;
  if (cookie && isLocale(cookie)) return { locale: cookie, fromLanguage: true };
  const header = request.headers.get("accept-language") ?? "";
  const languages = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim())
    .filter((part): part is string => Boolean(part));
  const detected = resolvePreferredLocale({ languages });
  return {
    locale: isLocale(detected) ? detected : "en",
    fromLanguage: languages.some((tag) => matchSupportedLocale(tag) !== null),
  };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const current = localeFromPathname(pathname);
  const { locale, fromLanguage } = preferredFromRequest(request);
  if (locale === current) {
    const response = NextResponse.next();
    if (fromLanguage && !request.cookies.get(COOKIE)) {
      response.cookies.set(COOKIE, locale, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    }
    return response;
  }
  const url = request.nextUrl.clone();
  url.pathname = localePath(locale as Parameters<typeof localePath>[0], unlocalizedPath(pathname));
  const response = NextResponse.redirect(url);
  if (fromLanguage) {
    response.cookies.set(COOKIE, locale, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
