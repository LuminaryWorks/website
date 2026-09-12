import styles from "./PageHeader.module.scss";

type Props = {
  index: string | number;
  label: string;
  title: string;
  lead: string;
};

export function PageHeader({ index, label, title, lead }: Props) {
  const n = typeof index === "number" ? String(index).padStart(2, "0") : index;

  return (
    <header className={styles.head}>
      <p className={styles.kicker}>
        {n} / {label}
      </p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.lead}>{lead}</p>
    </header>
  );
}
