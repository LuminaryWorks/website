import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Providers } from "@/components/site/Providers";
import { inter } from "@/lib/fonts";
import type { ReactNode } from "react";
import "@/styles/globals.scss";

export default function NotFound(): ReactNode {
  return (
    <html lang="zh" className={inter.variable}>
      <body>
        <Providers locale="zh">
          <Header />
          <NotFoundPage />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
