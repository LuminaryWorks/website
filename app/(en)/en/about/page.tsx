import { AboutPage } from "@/components/pages/AboutPage";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return buildPageMetadata("en", "about");
}

export default function Page() {
  return <AboutPage />;
}
