"use client";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/lib/i18n/context";
import { type ProductCode, getProduct } from "@/lib/products";
import styles from "./ValueChain.module.scss";

const MAIN = {
  create: "blockyedu",
  connect: "syncrobrain",
  see: "dataluminary",
} as const satisfies Record<string, ProductCode>;
const BRANCH = {
  watch: "vistacast",
  control: "vistaremote",
} as const satisfies Record<string, ProductCode>;
const SINK: ProductCode = "doerflow";

function ChainNode({ code, className }: { code: ProductCode; className: string }) {
  const { m } = useT();
  const product = getProduct(code);
  const item = m.products.items[code];

  return (
    <a className={`${styles.node} ${className}`} href={`#product-${code}`}>
      <span className={styles.role}>{item.role}</span>
      <span className={styles.name}>{product.nameEn}</span>
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
          <p className={styles.srOnly}>{s.diagramAria}</p>
          <div className={styles.diagram}>
            <ChainNode code={MAIN.create} className={styles.create} />
            <span className={`${styles.lineMain} ${styles.hCreate}`} aria-hidden="true" />
            <ChainNode code={MAIN.connect} className={styles.connect} />
            <span className={`${styles.lineMain} ${styles.hConnect}`} aria-hidden="true" />
            <ChainNode code={MAIN.see} className={styles.see} />
            <span className={`${styles.lineV} ${styles.vSeeWatch}`} aria-hidden="true" />
            <ChainNode code={BRANCH.watch} className={styles.watch} />
            <span className={`${styles.lineV} ${styles.vWatchControl}`} aria-hidden="true" />
            <ChainNode code={BRANCH.control} className={styles.control} />
            <span className={`${styles.lineV} ${styles.vControlEarn}`} aria-hidden="true" />
            <span className={styles.spine} aria-hidden="true" />
            <ChainNode code={SINK} className={styles.earn} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
