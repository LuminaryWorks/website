"use client";

import { ProductCard } from "@/components/shared/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { useT } from "@/lib/i18n/context";
import { PRODUCTS } from "@/lib/products";
import styles from "./ProductsGrid.module.scss";

export function ProductsGrid() {
  const { m } = useT();
  const s = m.home.products;

  return (
    <section className="lw-section lw-section-alt" aria-label={s.title}>
      <Reveal>
        <div className="lw-container">
          <header className={styles.head}>
            <p className={styles.kicker}>
              {s.index} / {s.label}
            </p>
            <h2 className={styles.title}>{s.title}</h2>
          </header>
          <div className={styles.grid}>
            {PRODUCTS.map((product) => (
              <ProductCard key={product.code} product={product} variant="compact" />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
