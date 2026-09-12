import type { ComponentProps } from "react";
import styles from "./ExternalLink.module.scss";

export function ExternalLink({ children, className, ...props }: ComponentProps<"a">) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={[styles.link, className].filter(Boolean).join(" ")}
    >
      {children}
      <span className={styles.hint} aria-hidden="true">
        {" "}
        ↗
      </span>
    </a>
  );
}
