import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Providers } from "@/components/site/Providers";
import { inter } from "@/lib/fonts";
import { SITE_URL } from "@/lib/urls";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Providers locale="en">
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
