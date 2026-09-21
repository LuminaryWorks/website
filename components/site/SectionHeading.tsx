import styles from "./SectionHeading.module.scss";

type Props = {
  index: string | number;
  label: string;
  title: string;
  lead?: string;
  id?: string;
};

export function SectionHeading({ index, label, title, lead, id }: Props) {
  const n = typeof index === "number" ? String(index).padStart(2, "0") : index;

  return (
    <header className={styles.head}>
      <p className={styles.kicker}>
        {n} / {label}
      </p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </header>
  );
}
