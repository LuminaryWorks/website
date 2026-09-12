"use client";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import { type ProductCode, getProduct } from "@/lib/products";
import styles from "./ValueChain.module.scss";

const STAGES: readonly { code: ProductCode; index: string; lane: "main" | "branch" | "sink" }[] = [
  { code: "blockyedu", index: "01", lane: "main" },
  { code: "syncrobrain", index: "02", lane: "main" },
  { code: "dataluminary", index: "03", lane: "main" },
  { code: "vistacast", index: "04", lane: "branch" },
  { code: "vistaremote", index: "05", lane: "branch" },
  { code: "doerflow", index: "06", lane: "sink" },
];

function ChainNode({
  code,
  index,
  lane,
}: {
  code: ProductCode;
  index: string;
  lane: "main" | "branch" | "sink";
}) {
  const { m } = useT();
  const product = getProduct(code);
  const item = m.products.items[code];

  return (
    <a
      className={`${styles.node} ${lane === "branch" ? styles.branch : ""} ${lane === "sink" ? styles.sink : ""}`}
      href={`#product-${code}`}
    >
      <span className={styles.index}>{index}</span>
      <span className={styles.role}>{item.role}</span>
      <span className={styles.name}>{product.nameEn}</span>
      <span className={styles.local}>{item.nameLocal}</span>
    </a>
  );
}

export function ValueChain() {
  const { m } = useT();
  const s = m.home.valueChain;

  return (
    <section className="lw-section" aria-label={s.title}>
      <Reveal>
        <div className="lw-container">
          <SectionHeading index={s.index} label={s.label} title={s.title} lead={s.lead} />
          <div className={styles.track} role="img" aria-label={s.diagramAria}>
            {STAGES.map((stage) => (
              <ChainNode key={stage.code} code={stage.code} index={stage.index} lane={stage.lane} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
