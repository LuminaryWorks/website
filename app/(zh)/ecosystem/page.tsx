import { EcosystemPage } from "@/components/pages/EcosystemPage";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return buildPageMetadata("zh-CN", "ecosystem");
}

export default function Page() {
  return <EcosystemPage />;
}
