import { HomePage } from "@/components/pages/HomePage";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return buildPageMetadata("zh", "home");
}

export default function Page() {
  return <HomePage />;
}
