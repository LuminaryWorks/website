"use client";

import { useT } from "@/lib/i18n/context";
import styles from "./page.module.scss";

export function AboutPage() {
  const { m } = useT();
  return (
    <main id="main" className={styles.main}>
      <h1>{m.meta.about.title}</h1>
      <p>{m.meta.about.description}</p>
    </main>
  );
}
