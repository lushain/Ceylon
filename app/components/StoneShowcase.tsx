"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Gem from "./Gem";
import OptionWheel from "./OptionWheel";
import { stones } from "../stones";

const names = stones.map((s) => s.name);

export default function StoneShowcase() {
  const [i, setI] = useState(0);
  const stone = stones[i];

  return (
    <section
      id="gemstones"
      className="stone-section relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-y border-hairline py-20 md:py-0"
      style={{ "--stone-1": stone.tone.c1, "--stone-hi": stone.tone.hi } as CSSProperties}
    >
      {/* ambient stone glow */}
      <div className="stone-aura pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 md:px-10">
        {/* header */}
        <div className="mb-10 flex items-end justify-between md:mb-0 md:absolute md:left-10 md:top-10">
          <div>
            <p className="eyebrow">Four stones of Ceylon</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,4vw,3rem)] text-ivory">
              Turn each to the light.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1fr_0.9fr] md:gap-6 md:pt-16">
          {/* ---- Wheel (desktop) ---- */}
          <div className="stone-wheel relative hidden h-[58vh] max-h-[520px] md:block">
            <div className="stone-wheel-mask h-full w-full">
              <OptionWheel
                items={names}
                defaultSelected={0}
                onChange={(index) => setI(index)}
                side="left"
                textColor="var(--color-slate)"
                activeColor="var(--color-ivory)"
                fontSize={2.5}
                spacing={1.5}
                curve={1}
                tilt={9}
                blur={1.3}
                fade={0.3}
                minOpacity={0.14}
                smoothing={260}
                inset={40}
                loop
              />
            </div>
            <p className="mono absolute -bottom-2 left-0 text-[0.6rem] tracking-[0.2em] text-slate/60 uppercase">
              Scroll · drag · arrows
            </p>
          </div>

          {/* ---- Name pills (mobile) ---- */}
          <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 md:hidden">
            {stones.map((s, idx) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setI(idx)}
                aria-pressed={i === idx}
                className={`mono shrink-0 rounded-full border px-4 py-2 text-[0.68rem] tracking-[0.12em] uppercase transition-colors ${
                  i === idx
                    ? "border-ivory/40 text-ivory"
                    : "border-hairline text-slate"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* ---- Gem ---- */}
          <div className="relative z-10 flex items-center justify-center md:-ml-8">
            <div className="stone-occluder pointer-events-none absolute aspect-square w-[94%] rounded-full" aria-hidden />
            <div className="stone-halo pointer-events-none absolute aspect-square w-[86%] rounded-full" aria-hidden />
            <div className="relative w-[min(72vw,380px)]">
              <Gem tone={stone.tone} className="gem-float" />
            </div>

            <div className="specimen-tag absolute -bottom-2 -right-1 h-20 w-20 overflow-hidden rounded-md border border-hairline shadow-lg sm:h-24 sm:w-24">
              <div key={i} className="specimen-fade relative h-full w-full">
                <Image
                  src={stone.photo}
                  alt={`A real ${stone.name.toLowerCase()} specimen`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ---- Info ---- */}
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <span className="mono text-[0.72rem] tracking-[0.2em] text-ivory">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-hairline" />
              <span className="mono text-[0.72rem] tracking-[0.2em] text-slate/60">
                {String(stones.length).padStart(2, "0")}
              </span>
            </div>

            <div key={i} className="stone-fade">
              <p
                className="eyebrow min-h-[2.6em] leading-[1.3]"
                style={{ color: "var(--stone-hi)" }}
              >
                {stone.tag}
              </p>
              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="display min-h-[2.15em] leading-[1.05] text-[clamp(2rem,4.5vw,3rem)] text-ivory">
                  {stone.name}
                </h3>
                <span className="mono shrink-0 pt-2 text-[0.8rem] text-slate">
                  from ${stone.from}
                </span>
              </div>
              <p className="mt-5 min-h-[4.9em] max-w-[42ch] text-[1rem] leading-relaxed text-slate">
                {stone.note}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-8 border-t border-hairline pt-6 sm:max-w-[420px]">
                {stone.spec.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-hairline/60 py-2">
                    <dt className="mono text-[0.64rem] tracking-[0.14em] text-slate/70 uppercase">{k}</dt>
                    <dd className="mono text-[0.74rem] text-ivory/85">{v}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#bespoke"
                className="btn-fill mt-9 inline-block border border-ivory/25 px-7 py-3.5 text-[0.78rem] tracking-[0.16em] text-ivory uppercase transition-colors hover:text-abyss"
              >
                Design with this stone
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
