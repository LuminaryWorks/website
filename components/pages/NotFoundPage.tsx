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
      <p className={styles.code}>404</p>
      <h1>{m.common.notFound.title}</h1>
      <p>{m.common.notFound.lead}</p>
      <div className={styles.links}>
        <Link href={localePath(locale, "/")}>{m.common.notFound.backHome}</Link>
        <ExternalLink href={DOCS_URL}>{m.common.notFound.docs}</ExternalLink>
      </div>
    </main>
  );
}
