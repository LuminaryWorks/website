"use client";

import { useT } from "@/lib/i18n/context";
import styles from "./page.module.scss";

export function HomePage() {
  const { m } = useT();
  return (
    <main id="main" className={styles.main}>
      <h1>{m.meta.home.title}</h1>
      <p>{m.meta.home.description}</p>
    </main>
  );
}
