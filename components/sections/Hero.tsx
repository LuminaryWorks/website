"use client";

import { BlueprintGrid } from "@/components/site/BlueprintGrid";
import { ExternalLink } from "@/components/site/ExternalLink";
import { useT } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/paths";
import { type ProductCode, getProduct } from "@/lib/products";
import { DOCS_URL } from "@/lib/urls";
import Link from "next/link";
import styles from "./Hero.module.scss";

const HERO_PRODUCTS: ProductCode[] = [
  "dataluminary",
  "blockyedu",
  "syncrobrain",
  "vistacast",
  "vistaremote",
  "doerflow",
];

function productDotClass(code: ProductCode): string {
  return getProduct(code).status === "sellable" ? styles.dotMint : styles.dotAmber;
}

export function Hero() {
  const { locale, m } = useT();
  const h = m.home.hero;

  return (
    <section className={`lw-section lw-section-lg ${styles.hero}`}>
      <BlueprintGrid />
      <div className={styles.beam} aria-hidden="true" />
      <div className={`lw-container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{h.eyebrow}</p>
          <h1 className={styles.title}>{h.title}</h1>
          <p className={styles.lead}>{h.lead}</p>
          <div className={styles.actions}>
            <Link href={localePath(locale, "/products/")} className={styles.btnPrimary}>
              {h.primaryCta}
            </Link>
            <Link href={localePath(locale, "/deploy/")} className={styles.btnSecondary}>
              {h.secondaryCta}
            </Link>
            <ExternalLink href={DOCS_URL} className={styles.docs}>
              {h.docs}
            </ExternalLink>
          </div>
        </div>
        <div className={styles.diagram} role="img" aria-label={h.diagramAria}>
          <div className={styles.diagramInner} aria-hidden="true">
            <p className={styles.planeLabel}>
              {h.controlPlane}
              <span className={styles.planeNote}> · {h.controlNote}</span>
            </p>
            <div className={styles.control}>
              <div className={styles.node}>
                <span className={styles.dotMint} />
                <span className={styles.nodeLabel}>
                  {h.identity}
                  <span className={styles.sep}> · {h.identityProto}</span>
                </span>
              </div>
              <div className={styles.node}>
                <span className={styles.dotMint} />
                <span className={styles.nodeLabel}>{h.entitlement}</span>
              </div>
              <div className={styles.node}>
                <span className={styles.dotAmber} />
                <span className={styles.nodeLabel}>{h.aiGateway}</span>
                <span className={styles.lab}>{h.lab}</span>
              </div>
            </div>
            <div className={styles.connectors}>
              <span className={styles.dash} />
              <span className={styles.dash} />
              <span className={styles.dash} />
            </div>
            <p className={styles.planeLabel}>
              {h.productPlanes}
              <span className={styles.planeNote}> · {h.productNote}</span>
            </p>
            <div className={styles.products}>
              {HERO_PRODUCTS.map((code) => (
                <div key={code} className={styles.node}>
                  <span className={productDotClass(code)} />
                  <span className={styles.nodeLabel}>{getProduct(code).nameEn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
