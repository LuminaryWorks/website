import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatusBadge } from "@/components/site/StatusBadge";
import { useT } from "@/lib/i18n/context";
import { PRODUCTS, type Product } from "@/lib/products";
import styles from "./ProductsCompare.module.scss";
import shared from "./shared.module.scss";

function domainFromSite(site: string): string {
  try {
    return new URL(site).hostname;
  } catch {
    return site;
  }
}

function trialLabel(product: Product, card: ReturnType<typeof useT>["m"]["products"]["card"]) {
  if (product.status === "preview") return card.notSellable;
  return product.trial === "trial7d" ? card.trial7d : card.noTrial;
}

export function ProductsGrid() {
  return (
    <div className={shared.cardGrid2}>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.code} product={product} variant="full" />
      ))}
    </div>
  );
}

export function ProductsCompareTable() {
  const { m } = useT();
  const c = m.products.compare;
  const card = m.products.card;

  return (
    <section className={shared.section} aria-labelledby="products-compare">
      <SectionHeading index={c.index} label={c.label} title={c.title} lead={c.lead} />

      <div className={styles.desktop}>
        <div className={shared.tableWrap}>
          <table className={shared.table}>
            <thead>
              <tr>
                <th scope="col">{c.headers.product}</th>
                <th scope="col">{c.headers.role}</th>
                <th scope="col">{c.headers.audience}</th>
                <th scope="col">{c.headers.domain}</th>
                <th scope="col">{c.headers.status}</th>
                <th scope="col">{c.headers.trial}</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((product) => {
                const item = m.products.items[product.code];
                return (
                  <tr key={product.code}>
                    <td>
                      <span className={styles.productName}>{product.nameEn}</span>
                      <span className={styles.productLocal}>{item.nameLocal}</span>
                    </td>
                    <td className={shared.mono}>{item.role}</td>
                    <td>{item.audience}</td>
                    <td className={shared.mono}>{domainFromSite(product.site)}</td>
                    <td>
                      <StatusBadge tone={product.status} />
                    </td>
                    <td className={shared.mono}>{trialLabel(product, card)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ul className={styles.mobile}>
        {PRODUCTS.map((product) => {
          const item = m.products.items[product.code];
          const fields = [
            { label: c.headers.role, value: item.role, mono: true },
            { label: c.headers.audience, value: item.audience, mono: false },
            { label: c.headers.domain, value: domainFromSite(product.site), mono: true },
            { label: c.headers.trial, value: trialLabel(product, card), mono: true },
          ];
          return (
            <li key={product.code} className={styles.mobileCard}>
              <h3 className={styles.mobileTitle}>
                {product.nameEn}
                <span className={styles.mobileLocal}>{item.nameLocal}</span>
              </h3>
              <dl className={styles.mobileDl}>
                <div className={styles.mobileRow}>
                  <dt>{c.headers.status}</dt>
                  <dd>
                    <StatusBadge tone={product.status} />
                  </dd>
                </div>
                {fields.map((row) => (
                  <div key={row.label} className={styles.mobileRow}>
                    <dt>{row.label}</dt>
                    <dd className={row.mono ? shared.mono : undefined}>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          );
        })}
      </ul>

      <p className={shared.footnote}>{c.footnote}</p>
    </section>
  );
}
