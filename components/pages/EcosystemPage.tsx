"use client";

import { useT } from "@/lib/i18n/context";
import styles from "./page.module.scss";

export function EcosystemPage() {
  const { m } = useT();
  return (
    <main id="main" className={styles.main}>
      <h1>{m.meta.ecosystem.title}</h1>
      <p>{m.meta.ecosystem.description}</p>
    </main>
  );
}
