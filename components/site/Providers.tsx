"use client";

import type { Locale } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/context";
import { darkTheme } from "@/lib/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import type { ReactNode } from "react";

export function Providers({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={darkTheme} locale={locale === "zh" ? zhCN : enUS}>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </ConfigProvider>
    </AntdRegistry>
  );
}
