import type { Locale } from "@/lib/i18n/config";
import { MESSAGES } from "@/lib/i18n/messages";
import { localePath } from "@/lib/i18n/paths";
import { LEGAL_NAV, type LegalSlug, POLICY_VERSION, readLegalDocument } from "@/lib/legal";
import Link from "next/link";
import styles from "./LegalDocument.module.scss";

export function LegalDocument({ locale, slug }: { locale: Locale; slug: LegalSlug }) {
  const m = MESSAGES[locale].legal;
  const { title, html } = readLegalDocument(locale, slug);

  return (
    <main id="main" className={styles.main}>
      <header className={styles.header}>
        <p className={styles.kicker}>LEGAL</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.version}>
          {m.policyVersionLabel}: {POLICY_VERSION}
        </p>
      </header>

      <aside className={styles.disclaimer}>
        <strong>{m.disclaimer}</strong>
        <p>{m.disclaimerLead}</p>
      </aside>

      <article
        className={styles.prose}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted legal markdown synced from spec/legal
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <footer className={styles.footer}>
        <h2>{m.relatedHeading}</h2>
        <ul className={styles.nav}>
          {LEGAL_NAV.map((item) => (
            <li key={item.slug}>
              <Link href={localePath(locale, `/legal/${item.slug}/`)}>{m.nav[item.key]}</Link>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
