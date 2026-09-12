"use client";

import { useT } from "@/lib/i18n/context";
import styles from "./StatusBadge.module.scss";

export type StatusTone = "sellable" | "preview" | "planned";

export function StatusBadge({ tone }: { tone: StatusTone }) {
  const { m } = useT();
  return (
    <span className={`${styles.badge} ${styles[tone]}`}>
      <span className={styles.dot} aria-hidden="true" />
      {m.common.status[tone]}
    </span>
  );
}
