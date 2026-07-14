"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Gem from "./Gem";
import Reveal from "./Reveal";
import { catalog, catalogTypes, type CatalogType } from "../gemstones-catalog";

const decorativeFilters: [string, string[]][] = [
  ["Carat", ["0.5ct–10ct+"]],
  ["Price", ["$500–$50,000+"]],
  ["Colour", ["Royal Blue", "Cornflower", "Padparadscha", "Pink"]],
  ["Cut", ["Oval", "Cushion", "Round", "Emerald"]],
  ["Certification", ["GIC", "AI", "GIA"]],
  ["Origin", ["Ratnapura", "Elahera", "Kataragama"]],
];

export default function GemstoneCatalog() {
  const searchParams = useSearchParams();
  const [type, setType] = useState<"All" | CatalogType>("All");

  useEffect(() => {
    const t = searchParams.get("type");
    if (t && (catalogTypes as string[]).includes(t)) setType(t as CatalogType);
  }, [searchParams]);

  const shown = useMemo(
    () => (type === "All" ? catalog : catalog.filter((g) => g.type === type)),
    [type],
  );

  return (
    <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 pb-24 md:grid-cols-[240px_1fr] md:px-10">
      {/* ---------- Filters ---------- */}
      <aside className="flex flex-col gap-8">
        <div>
          <h4 className="mono mb-3 text-[0.7rem] tracking-[0.12em] text-slate/80 uppercase">Type</h4>
          <div className="flex flex-wrap gap-2">
            {(["All", ...catalogTypes] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                aria-pressed={type === t}
                className={`mono rounded-full border px-3.5 py-1.5 text-[0.7rem] tracking-[0.04em] transition-colors ${
                  type === t
                    ? "border-transparent text-abyss"
                    : "border-hairline text-slate hover:text-ivory"
                }`}
                style={type === t ? { background: "var(--accent)" } : undefined}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {decorativeFilters.map(([label, chips]) => (
          <div key={label}>
            <h4 className="mono mb-3 text-[0.7rem] tracking-[0.12em] text-slate/80 uppercase">{label}</h4>
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="mono cursor-default rounded-full border border-hairline px-3.5 py-1.5 text-[0.7rem] tracking-[0.04em] text-slate/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </aside>

      {/* ---------- Grid ---------- */}
      <div>
        <div className="mb-6 flex items-baseline justify-between text-[0.8rem] text-slate">
          <span>{catalog.length} gemstones</span>
          <span>Showing {shown.length}</span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((g, i) => (
            <Reveal
              key={g.name}
              delay={(i % 3) * 70}
              className="border border-hairline bg-ink/30 transition-colors hover:border-ivory/25"
            >
              <div className="relative aspect-square overflow-hidden border-b border-hairline p-8">
                <Gem tone={g.tone} className="gem-float" style={{ animationDelay: `${(i % 5) * 0.6}s` }} />
              </div>
              <div className="p-5">
                <span className="mono block text-[0.62rem] tracking-[0.1em] text-slate/70 uppercase">{g.cert}</span>
                <h3 className="display mt-2 text-[1.1rem] text-ivory">{g.name}</h3>
                <p className="mt-1 text-[0.78rem] text-slate">{g.specs}</p>
                <p className="mono mt-2 text-[0.92rem] text-ivory">{g.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
