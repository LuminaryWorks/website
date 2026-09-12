"use client";

import { LOCALES, LOCALE_LABELS, LOCALE_SHORT, type Locale } from "@/lib/i18n/config";
import { useT } from "@/lib/i18n/context";
import { localePath, unlocalizedPath } from "@/lib/i18n/paths";
import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import styles from "./LanguageSwitcher.module.scss";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, m } = useT();

  const items: MenuProps["items"] = LOCALES.map((code) => ({
    key: code,
    label: LOCALE_LABELS[code],
  }));

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        selectedKeys: [locale],
        onClick: ({ key }) => {
          const next = key as Locale;
          const current = unlocalizedPath(pathname ?? "/");
          router.push(localePath(next, current));
        },
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <button type="button" aria-label={m.common.lang.label} className={styles.button}>
        <GlobalOutlined style={{ fontSize: 15 }} />
        <span>{LOCALE_SHORT[locale]}</span>
      </button>
    </Dropdown>
  );
}
