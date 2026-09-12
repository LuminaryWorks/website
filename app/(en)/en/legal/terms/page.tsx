import { LegalDocument } from "@/components/content/LegalDocument";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return buildPageMetadata("en", "legal/terms");
}

export default function Page() {
  return <LegalDocument locale="en" slug="terms" />;
}
