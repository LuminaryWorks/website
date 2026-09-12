import { DeployPage } from "@/components/pages/DeployPage";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return buildPageMetadata("en", "deploy");
}

export default function Page() {
  return <DeployPage />;
}
