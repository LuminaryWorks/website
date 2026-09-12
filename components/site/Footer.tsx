"use client";

import { useT } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/paths";
import {
  BLOCKYEDU_URL,
  DATALUMINARY_URL,
  DOCS_URL,
  DOERFLOW_URL,
  GITHUB_ORG,
  SYNCROBRAIN_URL,
  VISTACAST_URL,
  VISTAREMOTE_URL,
} from "@/lib/urls";
import Link from "next/link";
import { ExternalLink } from "./ExternalLink";
import styles from "./Footer.module.scss";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Footer() {
  const { locale, m } = useT();

  const products = [
    { href: DATALUMINARY_URL, label: m.common.productNames.dataluminary },
    { href: BLOCKYEDU_URL, label: m.common.productNames.blockyedu },
    { href: SYNCROBRAIN_URL, label: m.common.productNames.syncrobrain },
    { href: VISTACAST_URL, label: m.common.productNames.vistacast },
    { href: VISTAREMOTE_URL, label: m.common.productNames.vistaremote },
    { href: DOERFLOW_URL, label: m.common.productNames.doerflow },
  ];

  const platform = [
    { href: DOCS_URL, label: m.common.footer.developerDocs, external: true },
    {
      href: `${DOCS_URL}/develop/unified-login`,
      label: m.common.footer.unifiedLogin,
      external: true,
    },
    { href: localePath(locale, "/deploy/"), label: m.common.footer.deployKits, external: false },
    { href: GITHUB_ORG, label: m.common.footer.githubOrg, external: true },
  ];

  const ecosystem = [
    {
      href: localePath(locale, "/ecosystem/"),
      label: m.common.footer.ecosystemStory,
      external: false,
    },
    {
      href: `${DOCS_URL}/guide/architecture`,
      label: m.common.footer.architecture,
      external: true,
    },
    { href: localePath(locale, "/about/"), label: m.common.footer.licensing, external: false },
  ];

  const legal = [
    { href: localePath(locale, "/legal/terms/"), label: m.common.footer.terms },
    { href: localePath(locale, "/legal/privacy/"), label: m.common.footer.privacy },
    {
      href: localePath(locale, "/legal/trial-data-deletion/"),
      label: m.common.footer.trialDeletion,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`lw-container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.heading}>{m.common.footer.products}</h3>
            <ul className={styles.list}>
              {products.map((item) => (
                <li key={item.href}>
                  <ExternalLink href={item.href} className={styles.link}>
                    {item.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>{m.common.footer.platform}</h3>
            <ul className={styles.list}>
              {platform.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <ExternalLink href={item.href} className={styles.link}>
                      {item.label}
                    </ExternalLink>
                  ) : (
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>{m.common.footer.ecosystem}</h3>
            <ul className={styles.list}>
              {ecosystem.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <ExternalLink href={item.href} className={styles.link}>
                      {item.label}
                    </ExternalLink>
                  ) : (
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.heading}>{m.common.footer.legal}</h3>
            <ul className={styles.list}>
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.brandRow}>
          <Logo href={localePath(locale, "/")} />
          <p className={styles.brandLine}>{m.common.brandLine}</p>
        </div>

        <div className={styles.metaRow}>
          <p className={styles.license}>{m.common.licenseLine}</p>
          <div className={styles.metaRight}>
            <LanguageSwitcher />
            {/* <!-- ICP placeholder --> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
