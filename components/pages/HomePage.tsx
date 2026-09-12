import { CallToAction } from "@/components/sections/CallToAction";
import { Deployment } from "@/components/sections/Deployment";
import { FactsStrip } from "@/components/sections/FactsStrip";
import { Hero } from "@/components/sections/Hero";
import { Platform } from "@/components/sections/Platform";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { ValueChain } from "@/components/sections/ValueChain";
import { Why } from "@/components/sections/Why";

export function HomePage() {
  return (
    <main id="main">
      <Hero />
      <FactsStrip />
      <ValueChain />
      <ProductsGrid />
      <Platform />
      <Deployment />
      <Why />
      <CallToAction />
    </main>
  );
}
