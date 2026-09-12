import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/lib/i18n/config";
import { marked } from "marked";

export const LEGAL_SLUGS = ["terms", "privacy", "trial-data-deletion"] as const;
export type LegalSlug = (typeof LEGAL_SLUGS)[number];
export const POLICY_VERSION = "lw-legal-v2026-09-07";

export interface LegalDocument {
  title: string;
  html: string;
}

export function isLegalSlug(value: string): value is LegalSlug {
  return (LEGAL_SLUGS as readonly string[]).includes(value);
}

export function readLegalDocument(locale: Locale, slug: LegalSlug): LegalDocument {
  const filePath = path.join(process.cwd(), "content/legal", locale, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");

  const lines = raw.split("\n");
  let title = "";
  let bodyStart = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line?.startsWith("# ")) {
      title = line.slice(2).trim();
      bodyStart = i + 1;
      break;
    }
  }

  const bodyMd = lines.slice(bodyStart).join("\n").trimStart();
  const html = marked.parse(bodyMd, { async: false }) as string;

  if (!title) {
    title = slug;
  }

  return { title, html };
}

export const LEGAL_NAV: { slug: LegalSlug; key: "terms" | "privacy" | "trialDeletion" }[] = [
  { slug: "terms", key: "terms" },
  { slug: "privacy", key: "privacy" },
  { slug: "trial-data-deletion", key: "trialDeletion" },
];
