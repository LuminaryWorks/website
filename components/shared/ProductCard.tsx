"use client";

/**
 * 六产品共用卡片（首页 §03 与 /products 共用，定稿组件）。
 *
 * 规范：spec/website-design.md §3「卡片」与 §5「六大产品」。
 * - hover 只改描边 / 底色 / translateY(-2px)，不加发光阴影
 * - 不给产品配 accent 色：差异化只靠 Logo + 名称 + 角色标签
 * - 商业化状态与 Trial 文案必须来自 lib/products.ts，不得在页面里另写
 */
import { Chip } from "@/components/site/Chip";
import { ExternalLink } from "@/components/site/ExternalLink";
import { StatusBadge } from "@/components/site/StatusBadge";
import { useT } from "@/lib/i18n/context";
import type { Product } from "@/lib/products";
import styles from "./ProductCard.module.scss";

export function ProductCard({
  product,
  variant = "compact",
  headingLevel = 3,
}: {
  product: Product;
  variant?: "compact" | "full";
  /** 产品总览页的卡片就是该页的一级分区，用 h2 以免标题层级跳级 */
  headingLevel?: 2 | 3;
}) {
  const { m } = useT();
  const item = m.products.items[product.code];
  const card = m.products.card;
  const Heading = headingLevel === 2 ? "h2" : "h3";

  const commercial =
    product.status === "sellable"
      ? product.trial === "trial7d"
        ? card.trial7d
        : card.noTrial
      : card.notSellable;

  return (
    <article className={`${styles.card} ${styles[variant]}`} id={`product-${product.code}`}>
      <header className={styles.head}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} src={product.logo} alt="" width={32} height={32} />
        <div className={styles.names}>
          <Heading className={styles.nameEn}>{product.nameEn}</Heading>
          <p className={styles.nameLocal}>{item.nameLocal}</p>
        </div>
        <span className={styles.role}>{item.role}</span>
      </header>

      <p className={styles.oneLiner}>{item.oneLiner}</p>

      <ul className={styles.chips}>
        {item.chips.map((chip) => (
          <li key={chip}>
            <Chip>{chip}</Chip>
          </li>
        ))}
      </ul>

      {variant === "full" && (
        <p className={styles.audience}>
          <span className={styles.audienceLabel}>{card.audienceLabel}</span>
          {item.audience}
        </p>
      )}

      <footer className={styles.foot}>
        <span className={styles.statusGroup}>
          <StatusBadge tone={product.status} />
          <span className={styles.commercial}>{commercial}</span>
        </span>
        <span className={styles.links}>
          <ExternalLink href={product.site} className={styles.siteLink}>
            {card.visitSite}
          </ExternalLink>
          <ExternalLink href={product.repo} className={styles.secondaryLink}>
            {card.viewSource}
          </ExternalLink>
        </span>
      </footer>
    </article>
  );
}
