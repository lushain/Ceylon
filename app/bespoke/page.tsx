import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Gem from "../components/Gem";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { stones } from "../stones";

export const metadata: Metadata = {
  title: "Bespoke Design — Ceylon Gemstones",
  description:
    "Every commission begins with a gemstone, not a catalogue setting. The design is shaped around what makes your stone singular.",
};

const toneOf = (name: string) => stones.find((s) => s.name === name)!.tone;

const showcase = [
  { name: "Cornflower Solitaire", specs: "2.3ct sapphire, platinum", tone: toneOf("Sapphire") },
  { name: "Colour-Change Pendant", specs: "1.1ct alexandrite, 18k gold", tone: toneOf("Alexandrite") },
  { name: "Adularescent Drops", specs: "Paired moonstones, rose gold", tone: toneOf("Moonstone") },
];

export default function BespokePage() {
  return (
    <div className="stage min-h-screen">
      <SiteHeader />

      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-[760px] px-6 pt-36 pb-12 text-center md:px-10 md:pt-44">
        <Reveal as="p" className="eyebrow">
          Bespoke Design
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)] text-ivory">The Stone Comes First</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-[54ch] text-[1.05rem] leading-relaxed text-slate">
            Every commission begins with a gemstone, not a catalogue setting. The
            design is shaped around what makes your stone singular.
          </p>
        </Reveal>
      </section>

      {/* ---------- 01 Begin With the Gem ---------- */}
      <div className="mx-auto max-w-[1160px] px-6 pt-16 md:px-10">
        <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="mono text-[0.85rem] tracking-[0.1em]" style={{ color: "var(--accent)" }}>
              01
            </span>
            <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ivory">Begin With the Gem</h2>
            <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-slate">
              Browse our certified collection, or let a concierge source a stone
              matched to your brief — carat, colour, and character.
            </p>
            <Link href="/gemstones" className="link-underline mt-5 inline-block text-[0.85rem] font-medium text-ivory">
              Browse the collection →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-hairline">
            <Image
              src="/images/bespoke-begin-gem.png"
              alt="Selecting a certified stone by hand"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="step-photo object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* ---------- 02 A Setting Built for Your Stone (card) ---------- */}
      <div className="mx-auto mt-24 max-w-[1160px] px-6 md:px-10">
        <Reveal className="grid grid-cols-1 items-center gap-10 border border-hairline bg-ink/30 p-8 md:grid-cols-2 md:gap-14 md:p-14">
          <div>
            <span className="mono text-[0.85rem] tracking-[0.1em]" style={{ color: "var(--accent)" }}>
              02
            </span>
            <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ivory">
              A Setting Built for Your Stone
            </h2>
            <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-slate">
              Book a private consultation, virtual or in-person, with one of our
              designers. Together you&rsquo;ll choose a metal and style that lets
              the gem lead.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Platinum", "18k Yellow Gold", "18k Rose Gold"].map((c) => (
                <span key={c} className="mono rounded-full border border-hairline px-3.5 py-1.5 text-[0.7rem] text-slate">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {["Solitaire", "Halo", "Three-Stone", "Vintage"].map((c) => (
                <span key={c} className="mono rounded-full border border-hairline px-3.5 py-1.5 text-[0.7rem] text-slate">
                  {c}
                </span>
              ))}
            </div>
            <a
              href="mailto:hello@ceylon.gems"
              className="btn-fill mt-7 inline-block border border-ivory/25 px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-ivory uppercase transition-colors hover:text-abyss"
            >
              Book a Consultation
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/bespoke-design-setting.png"
              alt="Sketches and stones for a bespoke setting"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="step-photo object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* ---------- 03 Made in Sri Lanka, by Hand ---------- */}
      <div className="mx-auto mt-24 max-w-[1160px] px-6 md:px-10">
        <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="mono text-[0.85rem] tracking-[0.1em]" style={{ color: "var(--accent)" }}>
              03
            </span>
            <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ivory">Made in Sri Lanka, by Hand</h2>
            <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-slate">
              Master artisans set your stone using techniques passed through
              generations. We keep you informed at every stage, from wax model to
              final polish.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["Week 1–2", "Wax Model & Approval"],
                ["Week 3–5", "Casting & Stone Setting"],
                ["Week 6", "Polish & Final QC"],
              ].map(([wk, desc]) => (
                <div key={wk} className="border border-hairline p-3.5">
                  <p className="mono text-[0.6rem] tracking-[0.1em] text-slate/70 uppercase">{wk}</p>
                  <p className="mt-1.5 text-[0.78rem] leading-snug text-ivory/85">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-hairline">
            <Image
              src="/images/bespoke-crafted-hand.png"
              alt="A stone being set by hand"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="step-photo object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* ---------- 04 An Heirloom, Documented (card) ---------- */}
      <div className="mx-auto mt-24 max-w-[1160px] px-6 md:px-10">
        <Reveal className="grid grid-cols-1 items-center gap-10 border border-hairline bg-ink/30 p-8 md:grid-cols-2 md:gap-14 md:p-14">
          <div>
            <span className="mono text-[0.85rem] tracking-[0.1em]" style={{ color: "var(--accent)" }}>
              04
            </span>
            <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ivory">An Heirloom, Documented</h2>
            <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-slate">
              Your piece arrives insured and presented, alongside full gemstone
              certification and a record of its origin — ready to be passed down.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/bespoke-delivered.png"
              alt="A finished bespoke piece, delivered"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="step-photo object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* ---------- Recent Bespoke Work ---------- */}
      <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-8 md:px-10">
        <Reveal as="p" className="eyebrow text-center">
          Recent Bespoke Work
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-center text-[clamp(1.8rem,3.6vw,2.4rem)] text-ivory">
            Recently Completed Commissions
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {showcase.map((s, i) => (
            <Reveal key={s.name} delay={i * 90} className="border border-hairline bg-ink/30">
              <div className="relative aspect-square overflow-hidden border-b border-hairline p-8">
                <Gem tone={s.tone} className="gem-float" style={{ animationDelay: `${i * 0.6}s` }} />
              </div>
              <div className="p-5">
                <h3 className="display text-[1.1rem] text-ivory">{s.name}</h3>
                <p className="mt-1 text-[0.8rem] text-slate">{s.specs}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- Closing CTA ---------- */}
      <div className="mx-auto max-w-[640px] px-6 py-28 text-center md:px-10">
        <Reveal>
          <h2 className="display text-[clamp(1.9rem,4vw,2.6rem)] text-ivory">Begin Your Commission</h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-slate">
            Every heirloom starts with a conversation about the stone.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/gemstones"
              className="btn-fill inline-block border border-ivory/25 px-8 py-3.5 text-[0.78rem] tracking-[0.16em] text-ivory uppercase transition-colors hover:text-abyss"
            >
              Start Your Design
            </Link>
            <a
              href="mailto:hello@ceylon.gems"
              className="link-underline py-3.5 text-[0.8rem] tracking-[0.16em] text-slate uppercase hover:text-ivory"
            >
              Talk to a Concierge
            </a>
          </div>
        </Reveal>
      </div>

      <SiteFooter />
    </div>
  );
}
