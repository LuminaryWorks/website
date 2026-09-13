"use client";

import { useT } from "@/lib/i18n/context";
import { CONTACT_EMAIL } from "@/lib/urls";
import { useState } from "react";
import styles from "./CopyEmail.module.scss";

export function CopyEmail({ compact = false }: { compact?: boolean }) {
  const { m } = useT();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      const field = document.createElement("textarea");
      field.value = CONTACT_EMAIL;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={styles.wrap}>
      {compact ? null : <p className={styles.hint}>{m.common.email.hint}</p>}
      <div className={styles.row}>
        <span className={styles.address}>{CONTACT_EMAIL}</span>
        <button type="button" className={styles.copy} onClick={copy}>
          {copied ? m.common.email.copied : m.common.email.copy}
        </button>
      </div>
    </div>
  );
}
