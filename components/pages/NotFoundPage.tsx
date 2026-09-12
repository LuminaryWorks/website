"use client";

import { ExternalLink } from "@/components/site/ExternalLink";
import { useT } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/paths";
import { DOCS_URL } from "@/lib/urls";
import Link from "next/link";
import styles from "./page.module.scss";

export function NotFoundPage() {
  const { locale, m } = useT();

  return (
    <main id="main" className={styles.notFound}>
      <div className={styles.notFoundInner}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1>{m.common.notFound.title}</h1>
        <p className={styles.notFoundLead}>{m.common.notFound.lead}</p>
        <nav className={styles.notFoundNav} aria-label={m.common.notFound.title}>
          <Link className={styles.notFoundLink} href={localePath(locale, "/")}>
            {m.common.notFound.backHome}
          </Link>
          <ExternalLink href={DOCS_URL} className={styles.notFoundLink}>
            {m.common.notFound.docs}
          </ExternalLink>
        </nav>
      </div>
    </main>
  );
}
