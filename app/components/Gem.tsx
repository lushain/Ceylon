import { useId, type CSSProperties } from "react";

export type GemTone = {
  core: string;
  c1: string;
  c2: string;
  c3: string;
  hi: string;
  shadow: string;
};

const C = 100;
const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;
const pt = (deg: number, r: number) =>
  `${(C + r * Math.cos(rad(deg))).toFixed(2)},${(C + r * Math.sin(rad(deg))).toFixed(2)}`;

// Radii for a round-brilliant top view
const rT = 38; // table
const rS = 66; // star / crown ring
const rO = 92; // girdle

const tableA = Array.from({ length: 8 }, (_, i) => 22.5 + 45 * i); // 8 pts
const star = Array.from({ length: 8 }, (_, i) => 45 * i); // 8 pts
const outer = Array.from({ length: 16 }, (_, i) => 22.5 * i); // 16 pts

const tablePoly = tableA.map((a) => pt(a, rT)).join(" ");

// Crown facets — 16-triangle antiprism between table octagon and star ring
const crown: { pts: string; shade: keyof GemTone }[] = [];
for (let i = 0; i < 8; i++) {
  // apex outward (star vertex between two table vertices)
  crown.push({
    pts: [pt(star[i], rS), pt(tableA[(i + 7) % 8], rT), pt(tableA[i], rT)].join(" "),
    shade: i % 2 === 0 ? "hi" : "c1",
  });
  // apex inward (table vertex between two star vertices)
  crown.push({
    pts: [pt(tableA[i], rT), pt(star[i], rS), pt(star[(i + 1) % 8], rS)].join(" "),
    shade: i % 2 === 0 ? "c1" : "c2",
  });
}

// Girdle facets — thin ring between star ring and outer edge
const girdle: { pts: string; shade: keyof GemTone }[] = [];
for (let i = 0; i < 8; i++) {
  girdle.push({
    pts: [pt(star[i], rS), pt(outer[2 * i], rO), pt(outer[2 * i + 1], rO)].join(" "),
    shade: "c2",
  });
  girdle.push({
    pts: [
      pt(star[i], rS),
      pt(outer[2 * i + 1], rO),
      pt(star[(i + 1) % 8], rS),
    ].join(" "),
    shade: "c3",
  });
}

export default function Gem({
  tone,
  className = "",
  style,
}: {
  tone?: GemTone;
  className?: string;
  style?: CSSProperties;
}) {
  const varStyle = tone
    ? ({
        "--gem-core": tone.core,
        "--gem-1": tone.c1,
        "--gem-2": tone.c2,
        "--gem-3": tone.c3,
        "--gem-hi": tone.hi,
        "--gem-shadow": tone.shadow,
      } as CSSProperties)
    : undefined;

  const uid = useId().replace(/:/g, "");
  const tableId = `table-${uid}`;
  const haloId = `halo-${uid}`;

  const fill = (shade: keyof GemTone) =>
    ({
      hi: "var(--gem-hi)",
      c1: "var(--gem-1)",
      c2: "var(--gem-2)",
      c3: "var(--gem-3)",
      core: "var(--gem-core)",
      shadow: "var(--gem-shadow)",
    })[shade];

  return (
    <div className={`gem ${className}`} style={{ ...varStyle, ...style }}>
      <svg viewBox="0 0 200 200" role="img" aria-label="A faceted Ceylon gemstone catching the light">
        <defs>
          <radialGradient id={tableId} cx="42%" cy="34%" r="75%">
            <stop offset="0%" stopColor="var(--gem-core)" />
            <stop offset="55%" stopColor="var(--gem-1)" />
            <stop offset="100%" stopColor="var(--gem-2)" />
          </radialGradient>
          <radialGradient id={haloId} cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="var(--gem-hi)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--gem-hi)" stopOpacity="0.22" />
          </radialGradient>
        </defs>

        {/* ambient halo */}
        <circle cx="100" cy="100" r="98" fill={`url(#${haloId})`} />

        {/* girdle ring */}
        {girdle.map((f, i) => (
          <polygon
            key={`g${i}`}
            className="facet"
            points={f.pts}
            style={{ fill: fill(f.shade) }}
          />
        ))}

        {/* crown facets */}
        {crown.map((f, i) => (
          <polygon
            key={`c${i}`}
            className="facet"
            points={f.pts}
            style={{ fill: fill(f.shade) }}
          />
        ))}

        {/* table */}
        <polygon points={tablePoly} fill={`url(#${tableId})`} />

        {/* facet edge lines */}
        <g stroke="var(--gem-core)" strokeOpacity="0.16" strokeWidth="0.6" fill="none">
          {star.map((a, i) => (
            <line
              key={`e${i}`}
              x1={pt(a, rS).split(",")[0]}
              y1={pt(a, rS).split(",")[1]}
              x2={pt(a, 0).split(",")[0]}
              y2={pt(a, 0).split(",")[1]}
            />
          ))}
        </g>

        {/* specular sparks */}
        <g className="gem-spark">
          <polygon
            points={`${pt(28, rT)} ${pt(50, rS)} ${pt(40, rT)}`}
            fill="var(--gem-core)"
            opacity="0.9"
          />
          <circle cx={C + rS * 0.62 * Math.cos(rad(320))} cy={C + rS * 0.62 * Math.sin(rad(320))} r="2.4" fill="var(--gem-core)" />
        </g>
      </svg>
    </div>
  );
}
