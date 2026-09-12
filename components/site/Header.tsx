"use client";

import { useT } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/paths";
import { COLORS } from "@/lib/theme";
import { CONSOLE_URL, DOCS_URL, GITHUB_ORG } from "@/lib/urls";
import { GithubOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ExternalLink } from "./ExternalLink";
import styles from "./Header.module.scss";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Header() {
  const { locale, m } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const homeHref = localePath(locale, "/");
  const nav = useMemo(
    () => [
      { href: localePath(locale, "/products/"), label: m.common.nav.products, external: false },
      { href: localePath(locale, "/ecosystem/"), label: m.common.nav.ecosystem, external: false },
      { href: localePath(locale, "/deploy/"), label: m.common.nav.deploy, external: false },
      { href: DOCS_URL, label: m.common.nav.docs, external: true },
      { href: localePath(locale, "/about/"), label: m.common.nav.about, external: false },
    ],
    [locale, m],
  );

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#main" className={styles.skip}>
        {m.common.skipToContent}
      </a>
      <div className={`lw-container ${styles.inner}`}>
        <Logo href={homeHref} />

        <nav className={styles.nav} aria-label={m.common.navAria}>
          {nav.map((item) =>
            item.external ? (
              <ExternalLink key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </ExternalLink>
            ) : (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <a
            href={GITHUB_ORG}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={m.common.githubAria}
            className={`${styles.github} ${styles.desktopOnly}`}
          >
            <GithubOutlined />
          </a>
          <Button
            type="primary"
            href={CONSOLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.desktopOnly}
          >
            {m.common.cta.startTrial}
          </Button>
          <Button
            type="text"
            className={styles.menuBtn}
            aria-label={m.common.menuAria}
            icon={<MenuOutlined style={{ color: COLORS.text, fontSize: 20 }} />}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      <Drawer
        title={<Logo href={homeHref} />}
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        styles={{
          body: { background: COLORS.bg },
          header: { background: COLORS.bg },
          wrapper: { width: 300 },
        }}
      >
        <nav className={styles.drawerNav} aria-label={m.common.mobileNavAria}>
          {nav.map((item) =>
            item.external ? (
              <ExternalLink
                key={item.href}
                href={item.href}
                className={styles.drawerLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </ExternalLink>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={styles.drawerLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <div className={styles.drawerDivider} />
          <ExternalLink href={GITHUB_ORG} className={styles.drawerLink}>
            {m.common.footer.githubOrg}
          </ExternalLink>
          <Button block type="primary" href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
            {m.common.cta.startTrial}
          </Button>
        </nav>
      </Drawer>
    </header>
  );
}
