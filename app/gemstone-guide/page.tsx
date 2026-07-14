import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Gemstone Guide — Ceylon Gemstones",
  description:
    "Four gemstones, each with its own character, history, and way of catching the light. Learn the stones of Ceylon before you shop.",
};

const guides = [
  {
    pill: "Flagship",
    name: "Sapphire",
    desc: "Cornflower to royal blue, prized for two thousand years as the finest in the world.",
    photo: "/images/guide-sapphire-flagship.png",
    type: "Sapphire",
  },
  {
    pill: "Vivid",
    name: "Spinel",
    desc: "Hot pink to fire-engine red, long mistaken for ruby, now prized in its own right.",
    photo: "/images/guide-spinel-vivid.png",
    type: "Spinel",
  },
  {
    pill: "Rare",
    name: "Alexandrite",
    desc: "Green in daylight, purple-red under incandescent light — a genuine optical marvel.",
    photo: "/images/guide-alexandrite-rare.png",
    type: "Alexandrite",
  },
  {
    pill: "Ethereal",
    name: "Moonstone",
    desc: "A pale, glowing blue sheen that seems to move beneath the surface of the stone.",
    photo: "/images/guide-moonstone-ethereal.png",
    type: "Moonstone",
  },
];

export default function GemstoneGuidePage() {
  return (
    <div className="stage min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-[720px] px-6 pt-36 pb-16 text-center md:px-10 md:pt-44">
        <Reveal as="p" className="eyebrow">
          Gemstone Guide
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)] text-ivory">Learn the Stones of Ceylon</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-[54ch] text-[1.05rem] leading-relaxed text-slate">
            Four gemstones, each with its own character, history, and way of
            catching the light. Start here before you shop — or simply to
            understand what makes a Ceylon stone worth owning.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1160px] px-6 pb-8 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {guides.map((g, i) => (
            <Reveal key={g.name} delay={i * 90}>
              <Link
                href={`/gemstones?type=${g.type}`}
                className="group relative block aspect-[4/3] overflow-hidden border border-hairline p-0! m-0!"
              >
                <Image
                  src={g.photo}
                  alt={`${g.name} gemstones`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.72) 100%)" }}
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col justify-end p-9">
                  <span className="mono inline-block w-fit rounded-full bg-white/20 px-3.5 py-1.5 text-[0.62rem] tracking-[0.14em] text-white uppercase backdrop-blur-sm">
                    {g.pill}
                  </span>
                  <h3 className="display mt-5 text-[1.9rem] text-white">{g.name}</h3>
                  <p className="mt-2.5 max-w-[38ch] text-[0.9rem] leading-relaxed text-white/85">{g.desc}</p>
                  <span className="mono mt-5 text-[0.72rem] tracking-[0.1em] text-white uppercase">
                    Learn About {g.name} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[760px] px-6 pt-28 pb-8 text-center md:px-10">
        <Reveal as="p" className="eyebrow">
          Before You Choose
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-[clamp(1.8rem,3.6vw,2.5rem)] text-ivory">
            Every Guide Ends the Same Way
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-[48ch] text-[0.98rem] leading-relaxed text-slate">
            Each stone guide answers the same five questions, so you can compare
            with confidence.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-8 flex flex-wrap justify-center gap-3">
          {["Colour", "Durability", "Quality", "Symbolism", "Care"].map((q) => (
            <span key={q} className="mono rounded-full border border-hairline px-4 py-2 text-[0.72rem] text-slate">
              {q}
            </span>
          ))}
        </Reveal>
      </div>

      <div className="pb-8" />
      <SiteFooter />
    </div>
  );
}
