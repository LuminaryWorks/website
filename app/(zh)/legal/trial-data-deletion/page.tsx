import { LegalDocument } from "@/components/content/LegalDocument";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return buildPageMetadata("zh", "legal/trial-data-deletion");
}

export default function Page() {
  return <LegalDocument locale="zh" slug="trial-data-deletion" />;
}
