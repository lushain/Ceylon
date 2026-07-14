import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Our Story — Ceylon Gemstones",
  description:
    "Trust here isn't inherited. It's proven. The story behind Ceylon Gemstones — direct sourcing, two thousand years of trade, and a promise kept on every stone.",
};

const heritage = [
  {
    n: "I",
    t: "Serendib — The Ancient Name",
    d: "Long before “Sri Lanka” or “Ceylon,” Arab traders knew the island as Serendib — gateway to its legendary gem wealth.",
  },
  {
    n: "II",
    t: "Ratnapura — City of Gems",
    d: "The historic heart of the trade, where gem gravels called illam have been worked by hand for generations.",
  },
  {
    n: "III",
    t: "Marco Polo & Ptolemy — Written Into History",
    d: "Both described the island's gemstones in their writings — among the earliest records of Ceylon's gem wealth reaching the West.",
  },
  {
    n: "IV",
    t: "The Trade Routes — Persia, Rome, China",
    d: "Ceylon stones travelled ancient routes to the courts of Persia, the markets of Rome, and the empires of China.",
  },
];

const timeline = [
  {
    yr: "450 Million Years Ago",
    t: "Formed Beneath Ratnapura",
    d: "A single crystal formed long before the first flowering plant.",
    photo: "/images/story-450million.png",
  },
  {
    yr: "1981 – Present",
    t: "The Royal Engagement Ring",
    d: "The 12-carat Ceylon sapphire in the British royal family's engagement ring — first Princess Diana's, now Catherine, Princess of Wales's.",
    photo: "/images/story-royal-ring.png",
  },
  {
    yr: "October 2025",
    t: "The Louvre Heist",
    d: "When thieves stole France's crown jewels from the Louvre's Apollo Gallery, reporting revealed the diadem worn by Queen Marie-Amélie and Queen Hortense was set with 24 Ceylon sapphires.",
    photo: "/images/story-louvre-heist.png",
  },
];

const promise = [
  { t: "Certification", d: "Every stone is independently verified before it is offered for sale — no exceptions." },
  { t: "Treatment Disclosure", d: "Any enhancement, however minor, is disclosed in plain language on every certificate." },
  { t: "Bespoke by Design", d: "Your setting is built around the stone you choose, never the reverse." },
];

const ethical = [
  { t: "Fair, Direct Pricing", d: "Buying directly from small-scale miners and licensed pit operators in Ratnapura and Elahera, no unpaid middlemen." },
  { t: "Safety First, Always", d: "Funding protective equipment and safer pit practices." },
  { t: "Community Reinvestment", d: "Schooling support and local infrastructure for mining communities." },
  { t: "Zero Tolerance on Child Labour", d: "Working only with operators meeting documented labour standards." },
];

export default function OurStoryPage() {
  return (
    <div className="stage min-h-screen">
      <SiteHeader />

      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-[760px] px-6 pt-36 pb-16 text-center md:px-10 md:pt-44">
        <Reveal as="p" className="eyebrow">
          Our Story
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.1] text-ivory italic">
            Trust here isn&rsquo;t inherited. It&rsquo;s proven.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-[54ch] text-[1.05rem] leading-relaxed text-slate">
            A new name in an old trade — built by people who have spent their lives
            among Ceylon&rsquo;s gem gravels, and who believe the story behind a
            stone is as important as the stone itself.
          </p>
        </Reveal>
      </section>

      {/* ---------- Narrative rows ---------- */}
      <div className="mx-auto max-w-[1160px] px-6 pt-16 pb-8 md:px-10">
        <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden border border-hairline">
            <Image
              src="/images/ourstory-gap-close.png"
              alt="Gem cutter at work, Sri Lanka"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="story-photo object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Why We Exist</p>
            <h2 className="display mt-4 text-[clamp(1.7rem,3.4vw,2.4rem)] text-ivory">
              The gap we close
            </h2>
            <p className="mt-5 max-w-[48ch] text-[1rem] leading-relaxed text-slate">
              For centuries, Ceylon gemstones have travelled the world through
              layers of intermediaries — each one adding cost, and each one
              distancing the buyer from the truth of where a stone came from. We
              exist to close that distance. By sourcing directly, disclosing
              everything, and building each piece around the stone rather than
              the other way around, we make it possible to own a piece of Ceylon
              with total confidence in its origin.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-24 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Origin</p>
            <h2 className="display mt-4 text-[clamp(1.7rem,3.4vw,2.4rem)] text-ivory">
              Direct from the source
            </h2>
            <p className="mt-5 max-w-[48ch] text-[1rem] leading-relaxed text-slate">
              Every gemstone we offer is sourced directly from licensed mines and
              trusted family dealers across Sri Lanka — never through the
              anonymous international lot system that obscures where a stone
              truly began. We know the mine, the miner, and the merchant. Nothing
              about a stone&rsquo;s origin is left to assumption.
            </p>
          </div>
          <div className="order-1 relative aspect-[4/5] overflow-hidden border border-hairline md:order-2">
            <Image
              src="/images/ourstory-direct-source.png"
              alt="Gem gravel washing, Ratnapura"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="story-photo object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* ---------- Heritage ---------- */}
      <div className="mx-auto max-w-[760px] px-6 pt-28 pb-4 text-center md:px-10">
        <Reveal as="p" className="eyebrow">
          Heritage
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] text-ivory italic">
            Two thousand years on the same ground
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-[52ch] text-[1rem] leading-relaxed text-slate">
            Sri Lanka&rsquo;s gem trade is not a modern invention. It is one of the
            oldest continuous trades on earth, and its geography of discovery has
            barely moved in two millennia.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-[820px] px-6 pb-4 md:px-10">
        {heritage.map((row, i) => (
          <Reveal
            key={row.n}
            delay={i * 60}
            className={`grid grid-cols-[56px_1fr] gap-8 border-t border-hairline py-9 text-left ${
              i === heritage.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="display text-[1.9rem] text-accent italic" style={{ color: "var(--accent)" }}>
              {row.n}
            </div>
            <div>
              <h3 className="text-[1.15rem] font-medium text-ivory">{row.t}</h3>
              <p className="mt-2 max-w-[52ch] text-[0.9rem] leading-relaxed text-slate">{row.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ---------- Ceylon, Then and Now ---------- */}
      <div className="mx-auto max-w-[1160px] px-6 pt-28 pb-8 md:px-10">
        <Reveal as="p" className="eyebrow text-center">
          Ceylon, Then and Now
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {timeline.map((row, i) => (
            <Reveal key={row.yr} delay={i * 100} className="border border-hairline">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={row.photo}
                  alt={row.t}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="story-photo object-cover"
                />
              </div>
              <div className="p-6">
                <p className="mono text-[0.7rem] tracking-[0.14em] italic text-slate/80">{row.yr}</p>
                <h3 className="display mt-2 text-[1.2rem] text-ivory">{row.t}</h3>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-slate">{row.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- Promise ---------- */}
      <div className="mx-auto max-w-[900px] px-6 pt-28 pb-4 text-center md:px-10">
        <Reveal as="p" className="eyebrow">
          Promise
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] text-ivory italic">
            What we guarantee, every time
          </h2>
        </Reveal>
        <Reveal delay={140} className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {promise.map((p, i) => (
            <div
              key={p.t}
              className={`px-2 ${i > 0 ? "md:border-l md:border-hairline" : ""}`}
            >
              <h3 className="text-[1.05rem] font-medium text-ivory">{p.t}</h3>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-slate">{p.d}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={200} className="mt-12">
          <Link
            href="/gemstones"
            className="btn-fill inline-block border border-ivory/25 px-8 py-3.5 text-[0.78rem] tracking-[0.16em] text-ivory uppercase transition-colors hover:text-abyss"
          >
            See How We Verify
          </Link>
        </Reveal>
      </div>

      {/* ---------- Quote band ---------- */}
      <Reveal
        as="div"
        className="mx-6 mt-28 border-y border-hairline bg-ink/40 py-24 text-center md:mx-10"
      >
        <p className="display mx-auto max-w-[760px] px-6 text-[clamp(1.4rem,3vw,2.1rem)] leading-[1.5] text-ivory italic">
          &ldquo;The story behind a stone is as important as the stone itself.&rdquo;
        </p>
      </Reveal>

      {/* ---------- Ethical sourcing ---------- */}
      <div className="mx-auto max-w-[820px] px-6 pt-28 pb-8 text-center md:px-10">
        <Reveal as="p" className="eyebrow">
          Our Promise
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-[clamp(1.8rem,3.6vw,2.5rem)] text-ivory italic">
            Sourced with care, not just certified
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-[680px] text-left">
          {ethical.map((row, i) => (
            <Reveal
              key={row.t}
              delay={i * 60}
              className={`grid grid-cols-[20px_1fr] gap-5 border-hairline py-6 ${
                i === 0 ? "border-t" : "border-t"
              } ${i === ethical.length - 1 ? "border-b" : ""}`}
            >
              <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
              <div>
                <h3 className="text-[0.98rem] font-medium text-ivory">{row.t}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-slate">{row.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-[0.78rem] italic text-slate/60">
          Placeholder content — ethical sourcing claims to be verified and
          confirmed by client before publishing.
        </p>
      </div>

      <div className="pb-8" />
      <SiteFooter />
    </div>
  );
}
