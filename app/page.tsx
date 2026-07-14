"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Gem from "./components/Gem";
import Reveal from "./components/Reveal";
import StoneShowcase from "./components/StoneShowcase";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

type Light = "day" | "candle";

const steps = [
  {
    n: "01",
    t: "Choose the stone",
    d: "Begin with a certified Ceylon gem from the collection, or brief us and we will source one to your specification from the mines we work with directly.",
    photo: "/images/step-choose-stone.png",
  },
  {
    n: "02",
    t: "Drawn by hand",
    d: "Our workshop sketches and models the setting around your stone — proportion, metal and profile resolved before a single gram is cast.",
    photo: "/images/step-design-moodboard.png",
  },
  {
    n: "03",
    t: "Set & recorded",
    d: "Cast, hand-set and delivered with its independent report and a mine-to-hand record that stays with the piece for its life.",
    photo: "/images/step-crafted-hand.png",
  },
];

const stories = [
  {
    kicker: "The island",
    title: "The city rivers still give up",
    body: "In Ratnapura — literally 'city of gems' saphires are washed from river gravel much as they were a thousand years ago. We buy at the source, without the hands in between.",
    photo: "/images/story-two-thousand-years.png",
  },
  {
    kicker: "The phenomenon",
    title: "Emerald by day, ruby by night",
    body: "Alexandrite absorbs light so precisely that a change of lamp changes its colour. Held to a window it reads green; carried to dinner it turns a deep, unlikely red.",
    photo: "/images/alexandrite-preview.png",
  },
  {
    kicker: "The heirloom",
    title: "A stone made to be handed down",
    body: "Nothing here is treated to look like more than it is. Untreated stones age without fading — the same reason the pieces we set them into are built to outlast us.",
    photo: "/images/story-royal-ring.png",
  },
];

export default function Home() {
  const [light, setLight] = useState<Light>("day");
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsLightTheme(root.getAttribute("data-theme") !== "dark");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isLightTheme) setLight("day");
  }, [isLightTheme]);

  return (
    <div data-light={light === "candle" ? "candle" : "day"} className="stage min-h-screen">
      <SiteHeader />

      {/* ---------- Hero ---------- */}
      <section id="top" className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-6 pt-36 pb-20 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pt-44 md:pb-28">
        <div>
          <p className="eyebrow reveal" style={{ animationDelay: "0.05s" }}>
            Ratnapura · City of Gems
          </p>
          <h1
            className="display reveal mt-7 text-[clamp(2.9rem,7.2vw,5.6rem)] text-ivory"
            style={{ animationDelay: "0.15s" }}
          >
            The colour of Ceylon,
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              held to the light.
            </span>
          </h1>
          <p
            className="reveal mt-8 max-w-[46ch] text-[1.05rem] leading-relaxed text-slate"
            style={{ animationDelay: "0.28s" }}
          >
            Untreated stones from the island&rsquo;s river gravels, cut to wake the
            light inside them and set — by hand — into pieces made to outlast the
            people who wear them.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/bespoke"
              className="btn-fill border border-ivory/25 px-7 py-3.5 text-[0.8rem] tracking-[0.16em] text-ivory uppercase transition-colors hover:text-abyss"
            >
              Start your design
            </Link>
            <Link
              href="/gemstones"
              className="link-underline py-3.5 text-[0.8rem] tracking-[0.16em] text-slate uppercase hover:text-ivory"
            >
              Browse gemstones
            </Link>
          </div>
        </div>

        {/* Hero stone + light toggle */}
        <div className="relative flex flex-col items-center">
          <div className="reveal relative w-[min(78vw,420px)]" style={{ animationDelay: "0.2s" }}>
            <Gem className="gem-float" />
          </div>

          <div className="reveal mt-8 flex flex-col items-center gap-3" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setLight("day")}
                aria-pressed={light === "day"}
                className={`mono text-[0.7rem] tracking-[0.18em] uppercase transition-colors ${light === "day" ? "text-ivory" : "text-slate hover:text-ivory/70"}`}
              >
                Daylight
              </button>
              <button
                type="button"
                role="switch"
                aria-checked={light === "candle"}
                aria-label="Toggle light source between daylight and candlelight"
                disabled={isLightTheme}
                onClick={() => setLight((l) => (l === "day" ? "candle" : "day"))}
                className={`toggle ${isLightTheme ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                <span className="toggle-knob" />
              </button>
              <button
                type="button"
                onClick={() => setLight("candle")}
                aria-pressed={light === "candle"}
                disabled={isLightTheme}
                className={`mono text-[0.7rem] tracking-[0.18em] uppercase transition-colors ${isLightTheme ? "cursor-not-allowed text-slate/40" : light === "candle" ? "text-ivory" : "text-slate hover:text-ivory/70"}`}
              >
                Candlelight
              </button>
            </div>
            <p className="mono text-[0.66rem] tracking-[0.22em] text-slate/70 uppercase">
              Alexandrite — watch the stone turn
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Marquee detail ---------- */}
      <div className="border-y border-hairline">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 py-4 md:px-10">
          {[
            "Mine-to-hand traceability",
            "Independently certified",
            "Untreated, natural colour",
            "Insured worldwide shipping",
          ].map((f) => (
            <span key={f} className="mono text-[0.68rem] tracking-[0.16em] text-slate uppercase">
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- Stone showcase ---------- */}
      <StoneShowcase />

      {/* ---------- Bespoke process ---------- */}
      <section id="bespoke" className="border-y border-hairline bg-ink/40">
        <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow">The bespoke commission</p>
            <h2 className="display mt-5 max-w-[16ch] text-[clamp(2rem,4.8vw,3.4rem)] text-ivory">
              A stone begins it. Your hand finishes it.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110} className="group bg-abyss">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.photo}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="step-photo object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-9">
                  <span className="mono text-[0.78rem] tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                    {s.n}
                  </span>
                  <h3 className="display mt-6 text-[1.7rem] text-ivory">{s.t}</h3>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-slate">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-14">
            <Link
              href="/bespoke"
              className="btn-fill inline-block border border-ivory/25 px-8 py-4 text-[0.8rem] tracking-[0.16em] text-ivory uppercase transition-colors hover:text-abyss"
            >
              Begin a commission
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Provenance statement ---------- */}
      <section id="provenance" className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <Reveal className="grid grid-cols-1 gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-hairline">
            <Image
              src="/images/step-certified-gia.png"
              alt="A gemological grading report alongside a certified stone"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="provenance-photo object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Provenance</p>
            <p className="display mt-5 text-[clamp(1.7rem,3.6vw,2.8rem)] leading-[1.15] text-ivory/90">
              We know the mine, the cutter and the hand that set your stone — and we
              write it all down, so that a hundred years from now, someone still can.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- Stories ---------- */}
      <section id="stories" className="border-t border-hairline">
        <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow">Stories from Ceylon</p>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.2rem)] text-ivory">
              The island, told through its stones.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden border border-hairline bg-ink">
                  <Image
                    src={s.photo}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="story-photo object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-6">{s.kicker}</p>
                <h3 className="display mt-3 text-[1.5rem] leading-tight text-ivory">{s.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-slate">{s.body}</p>
                <Link href="/our-story" className="link-underline mt-5 self-start text-[0.76rem] tracking-[0.14em] text-ivory/80 uppercase">
                  Read the story
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="relative overflow-hidden border-t border-hairline">
        <Image
          src="/images/home-hero-gems.png"
          alt=""
          fill
          sizes="100vw"
          className="closing-photo object-cover"
        />
        <div className="closing-scrim absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-[1240px] px-6 py-28 text-center md:px-10 md:py-40">
          <Reveal>
            <p className="eyebrow">Commissions open worldwide</p>
            <h2 className="display mx-auto mt-6 max-w-[18ch] text-[clamp(2.4rem,6vw,4.6rem)] text-ivory">
              Bring us the light you want to keep.
            </h2>
            <Link
              href="/bespoke"
              className="btn-fill mt-12 inline-block border border-ivory/30 px-10 py-4 text-[0.82rem] tracking-[0.18em] text-ivory uppercase transition-colors hover:text-abyss"
            >
              Start your design
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
