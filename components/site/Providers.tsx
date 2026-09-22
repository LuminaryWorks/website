"use client";

import type { Locale } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/context";
import { darkTheme } from "@/lib/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import esES from "antd/locale/es_ES";
import itIT from "antd/locale/it_IT";
import jaJP from "antd/locale/ja_JP";
import koKR from "antd/locale/ko_KR";
import nlNL from "antd/locale/nl_NL";
import ptPT from "antd/locale/pt_PT";
import zhCN from "antd/locale/zh_CN";
import zhTW from "antd/locale/zh_TW";
import type { ReactNode } from "react";

const ANTD_LOCALES: Record<Locale, typeof enUS> = {
  "zh-CN": zhCN,
  en: enUS,
  "zh-TW": zhTW,
  es: esES,
  pt: ptPT,
  nl: nlNL,
  it: itIT,
  ja: jaJP,
  ko: koKR,
};

export function Providers({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={darkTheme} locale={ANTD_LOCALES[locale]}>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </ConfigProvider>
    </AntdRegistry>
  );
}
