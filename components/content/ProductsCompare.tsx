import { ProductCard } from "@/components/shared/ProductCard";
import { ExternalLink } from "@/components/site/ExternalLink";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatusBadge } from "@/components/site/StatusBadge";
import { useT } from "@/lib/i18n/context";
import { PRODUCTS, type Product } from "@/lib/products";
import type { ReactNode } from "react";
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

function SiteDomain({ site }: { site: string }) {
  return (
    <ExternalLink href={site} className={styles.domainLink}>
      {domainFromSite(site)}
    </ExternalLink>
  );
}

function ProductIdentity({
  product,
  localName,
}: {
  product: Product;
  localName: string;
}) {
  return (
    <a className={styles.productLink} href={`#product-${product.code}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.productLogo} src={product.logo} alt="" width={24} height={24} />
      <span>
        <span className={styles.productName}>{product.nameEn}</span>
        <span className={styles.productLocal}>{localName}</span>
      </span>
    </a>
  );
}

export function ProductJump() {
  const { m } = useT();

  return (
    <nav aria-label={m.products.page.label}>
      <ul className={styles.jumpList}>
        {PRODUCTS.map((product) => {
          const item = m.products.items[product.code];
          return (
            <li key={product.code}>
              <a className={styles.jumpLink} href={`#product-${product.code}`}>
                <span className={styles.jumpRole}>{item.role}</span>
                <span>{product.nameEn}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function ProductsGrid() {
  return (
    <div className={`${shared.cardGrid2} ${styles.grid}`}>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.code} product={product} variant="full" headingLevel={2} />
      ))}
    </div>
  );
}

export function ProductsCompareTable() {
  const { m } = useT();
  const c = m.products.compare;
  const card = m.products.card;

  return (
    <section className={styles.chapter} aria-labelledby="products-compare">
      <SectionHeading
        id="products-compare"
        index={c.index}
        label={c.label}
        title={c.title}
        lead={c.lead}
      />

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
                      <ProductIdentity product={product} localName={item.nameLocal} />
                    </td>
                    <td className={`${shared.mono} ${styles.roleCell}`}>{item.role}</td>
                    <td>{item.audience}</td>
                    <td className={styles.domainCell}>
                      <SiteDomain site={product.site} />
                    </td>
                    <td>
                      <StatusBadge tone={product.status} />
                    </td>
                    <td className={`${shared.mono} ${styles.trialCell}`}>
                      {trialLabel(product, card)}
                    </td>
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
          const fields: { label: string; value: ReactNode; mono: boolean }[] = [
            { label: c.headers.role, value: item.role, mono: true },
            { label: c.headers.audience, value: item.audience, mono: false },
            {
              label: c.headers.domain,
              value: <SiteDomain site={product.site} />,
              mono: true,
            },
            { label: c.headers.trial, value: trialLabel(product, card), mono: true },
          ];
          return (
            <li key={product.code} className={styles.mobileCard}>
              <h3 className={styles.mobileTitle}>
                <ProductIdentity product={product} localName={item.nameLocal} />
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

      <p className={shared.callout}>{c.footnote}</p>
    </section>
  );
}
