import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gem from "../../components/Gem";
import Reveal from "../../components/Reveal";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { catalog, slugify, findBySlug, type CatalogType } from "../../gemstones-catalog";

const typePhoto: Record<CatalogType, string> = {
  Sapphire: "/images/sapphire-foremost.png",
  Spinel: "/images/spinel-preview.png",
  Alexandrite: "/images/alexandrite-preview.png",
  Moonstone: "/images/moonstone-preview.png",
};

export function generateStaticParams() {
  return catalog.map((g) => ({ slug: slugify(g.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gem = findBySlug(slug);
  if (!gem) return {};
  return {
    title: `${gem.name} — Ceylon Gemstones`,
    description: `${gem.specs} · ${gem.price}. ${gem.story[0].body}`,
  };
}

export default async function GemstoneDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gem = findBySlug(slug);
  if (!gem) notFound();

  const related = catalog.filter((g) => g.name !== gem.name && g.type === gem.type).slice(0, 3);
  const filler = catalog.filter((g) => g.name !== gem.name && g.type !== gem.type).slice(0, 3 - related.length);
  const more = [...related, ...filler];

  return (
    <div
      className="stage min-h-screen"
      style={{ "--stone-1": gem.tone.c1, "--stone-hi": gem.tone.hi } as CSSProperties}
    >
      <SiteHeader />

      {/* ---------- Breadcrumb ---------- */}
      <nav className="mx-auto max-w-[1240px] px-6 pt-32 text-[0.76rem] text-slate md:px-10 md:pt-40">
        <Link href="/gemstones" className="link-underline hover:text-ivory">
          Gemstones
        </Link>
        <span className="mx-2 text-slate/50">/</span>
        <Link href={`/gemstones?type=${gem.type}`} className="link-underline hover:text-ivory">
          {gem.type}
        </Link>
        <span className="mx-2 text-slate/50">/</span>
        <span className="text-ivory/80">{gem.name}</span>
      </nav>

      {/* ---------- PDP ---------- */}
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-6 pt-10 pb-8 md:grid-cols-[1fr_1fr] md:gap-16 md:px-10">
        {/* ---- Gallery ---- */}
        <Reveal className="relative flex aspect-square items-center justify-center">
          <div className="stone-occluder pointer-events-none absolute aspect-square w-[94%] rounded-full" aria-hidden />
          <div className="stone-halo pointer-events-none absolute aspect-square w-[86%] rounded-full" aria-hidden />
          <div className="relative w-[min(74%,380px)]">
            <Gem tone={gem.tone} className="gem-float" />
          </div>
          <div className="specimen-tag absolute right-2 bottom-2 h-24 w-24 overflow-hidden rounded-md border border-hairline shadow-lg sm:h-28 sm:w-28">
            <Image
              src={typePhoto[gem.type]}
              alt={`A real ${gem.type.toLowerCase()} specimen`}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* ---- Info ---- */}
        <Reveal delay={80}>
          <p className="eyebrow" style={{ color: "color-mix(in srgb, var(--stone-hi) 55%, var(--color-ivory))" }}>
            {gem.type} · {gem.origin.split(",")[0]}
          </p>
          <h1 className="display mt-4 text-[clamp(2rem,4vw,2.8rem)] leading-[1.1] text-ivory">{gem.name}</h1>
          <p className="mono mt-4 text-[0.82rem] tracking-[0.02em] text-slate">
            {gem.carat} · {gem.cut} Cut · {gem.colourName} · {gem.treatment.split(" ")[0]}
          </p>
          <p className="display mt-5 text-[2rem] text-ivory">{gem.price}</p>

          <div className="mt-4 flex items-center gap-2.5 text-[0.82rem]" style={{ color: "color-mix(in srgb, var(--stone-hi) 55%, var(--color-ivory))" }}>
            <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden className="shrink-0">
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
              <path d="M6 10.2l2.6 2.6L14.2 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Independently certified by {gem.cert.replace(" Certified", "")} — treatment disclosed
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/bespoke"
              className="btn-fill border border-ivory/25 px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-ivory uppercase transition-colors hover:text-abyss"
            >
              Design Around This Stone
            </Link>
            <a
              href="mailto:hello@ceylon.gems"
              className="link-underline py-3.5 text-[0.8rem] tracking-[0.16em] text-slate uppercase hover:text-ivory"
            >
              Ask a Concierge
            </a>
          </div>
          <p className="mono mt-4 text-[0.7rem] tracking-[0.04em] text-slate/60">
            Certificate available on request · {gem.certNumber}
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-x-8 border-t border-hairline pt-6 sm:max-w-[440px]">
            {[
              ["Weight", gem.carat],
              ["Colour", gem.colourName],
              ["Cut", gem.cut],
              ["Origin", gem.origin],
              ["Treatment", gem.treatment],
              ["Certification", gem.certNumber],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-hairline/60 py-2.5">
                <dt className="mono text-[0.64rem] tracking-[0.14em] text-slate/70 uppercase">{k}</dt>
                <dd className="mono text-right text-[0.74rem] text-ivory/85">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* ---------- Story ---------- */}
      <div className="mx-auto max-w-[1240px] px-6 pt-24 pb-8 md:px-10">
        <Reveal as="p" className="eyebrow">
          The Story of This Stone
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-[clamp(1.7rem,3.4vw,2.4rem)] text-ivory">
            Where It Came From, and Why It Matters
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {gem.story.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 80}
              className="relative overflow-hidden border border-hairline p-8"
              style={{
                background: `color-mix(in srgb, ${gem.tone.c1} 7%, var(--color-ink))`,
              }}
            >
              <span
                className="display absolute top-5 right-6 text-[2.1rem] opacity-25"
                style={{ color: "color-mix(in srgb, var(--stone-hi) 55%, var(--color-ivory))" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.05rem] font-medium text-ivory">{s.title}</h3>
              <p className="mt-3 max-w-[42ch] text-[0.88rem] leading-relaxed text-slate">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- More from this collection ---------- */}
      {more.length > 0 && (
        <div className="mx-auto max-w-[1240px] px-6 pt-24 pb-24 md:px-10">
          <Reveal as="p" className="eyebrow">
            More From The Collection
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {more.map((g, i) => (
              <Reveal key={g.name} delay={i * 80}>
                <Link
                  href={`/gemstones/${slugify(g.name)}`}
                  className="group block border border-hairline bg-ink/30 p-0! m-0! transition-colors hover:border-ivory/25"
                >
                  <div className="relative aspect-square overflow-hidden border-b border-hairline p-8">
                    <Gem tone={g.tone} className="gem-float transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="display text-[1.05rem] text-ivory">{g.name}</h3>
                    <p className="mt-1 text-[0.78rem] text-slate">{g.specs}</p>
                    <p className="mono mt-2 text-[0.86rem] text-ivory">{g.price}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
