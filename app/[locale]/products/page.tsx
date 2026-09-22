import { ProductsPage } from "@/components/pages/ProductsPage";
import { type Locale, isPrefixedLocale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isPrefixedLocale(raw)) {
    notFound();
  }
  return buildPageMetadata(raw as Locale, "products");
}

export default async function Page({ params }: Props) {
  const { locale: raw } = await params;
  if (!isPrefixedLocale(raw)) {
    notFound();
  }
  return <ProductsPage />;
}
