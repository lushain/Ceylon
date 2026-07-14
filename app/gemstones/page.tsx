import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import GemstoneCatalog from "../components/GemstoneCatalog";

export const metadata: Metadata = {
  title: "Ceylon Gemstones — The Collection",
  description:
    "Every stone independently certified, traceable to its mine, and available to design around.",
};

export default function GemstonesPage() {
  return (
    <div className="stage min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-[760px] px-6 pt-36 pb-16 text-center md:px-10 md:pt-44">
        <Reveal as="p" className="eyebrow">
          The Collection
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)] text-ivory">Ceylon Gemstones</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-[54ch] text-[1.05rem] leading-relaxed text-slate">
            Every stone independently certified, traceable to its mine, and
            available to design around.
          </p>
        </Reveal>
      </section>

      <Suspense fallback={null}>
        <GemstoneCatalog />
      </Suspense>

      <SiteFooter />
    </div>
  );
}
