import { ProductsPage } from "@/components/pages/ProductsPage";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return buildPageMetadata("zh", "products");
}

export default function Page() {
  return <ProductsPage />;
}
