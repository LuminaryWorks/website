import Link from "next/link";
import styles from "./Logo.module.scss";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className={styles.brand} aria-label="LuminaryWorks">
      <img src="/logo.svg" width={24} height={24} alt="" className={styles.mark} />
      <span className={styles.text}>
        <span className={styles.name}>LuminaryWorks</span>
        <span className={styles.zh}>启明工坊</span>
      </span>
    </Link>
  );
}
