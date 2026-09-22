"use client";

import { PageHeader } from "@/components/content/PageHeader";
import {
  ProductJump,
  ProductsCompareTable,
  ProductsGrid,
} from "@/components/content/ProductsCompare";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import styles from "./page.module.scss";

export function ProductsPage() {
  const { m } = useT();
  const p = m.products.page;

  return (
    <main id="main" className={styles.main}>
      <Reveal>
        <div className={styles.catalog}>
          <PageHeader index={p.index} label={p.label} title={p.title} lead={p.lead} />
          <ProductJump />
        </div>
      </Reveal>
      <Reveal>
        <ProductsGrid />
      </Reveal>
      <Reveal>
        <ProductsCompareTable />
      </Reveal>
    </main>
  );
}
