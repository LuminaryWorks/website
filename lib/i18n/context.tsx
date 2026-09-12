"use client";

import { type ReactNode, createContext, useContext, useMemo } from "react";
import type { Locale } from "./config";
import { MESSAGES } from "./messages";
import type { Messages } from "./types";

type LocaleContextValue = {
  locale: Locale;
  m: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo<LocaleContextValue>(() => ({ locale, m: MESSAGES[locale] }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useT(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useT must be used within LocaleProvider");
  }
  return ctx;
}
