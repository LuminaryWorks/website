import styles from "./SectionHeading.module.scss";

type Props = {
  index: string | number;
  label: string;
  title: string;
  lead: string;
};

export function SectionHeading({ index, label, title, lead }: Props) {
  const n = typeof index === "number" ? String(index).padStart(2, "0") : index;

  return (
    <header className={styles.head}>
      <p className={styles.kicker}>
        {n} / {label}
      </p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.lead}>{lead}</p>
    </header>
  );
}
