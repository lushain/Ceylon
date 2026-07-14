import type { GemTone } from "./components/Gem";

export type Stone = {
  name: string;
  from: string;
  tag: string;
  note: string;
  tone: GemTone;
  spec: [string, string][];
  photo: string;
};

export const stones: Stone[] = [
  {
    name: "Sapphire",
    from: "2,400",
    tag: "The island's signature",
    note: "Velvet cornflower blue, untreated and unhurried — the colour by which every other sapphire is judged.",
    tone: { core: "#e6efff", c1: "#5b8def", c2: "#2f52a8", c3: "#182a63", hi: "#a9c6ff", shadow: "rgba(78,121,224,.45)" },
    spec: [
      ["Origin", "Ratnapura"],
      ["Carat", "3.14"],
      ["Cut", "Cushion"],
      ["Lab", "GRS"],
      ["Treatment", "None"],
    ],
    photo: "/images/sapphire-foremost.png",
  },
  {
    name: "Ceylon Spinel",
    from: "2,400",
    tag: "Ruby's royal impostor",
    note: "Vivid, wholly natural red — the gem long set into crown jewels in the belief that it was ruby.",
    tone: { core: "#ffe1e6", c1: "#e0556f", c2: "#a92846", c3: "#6a132a", hi: "#ffb3c0", shadow: "rgba(200,64,91,.45)" },
    spec: [
      ["Origin", "Elahera"],
      ["Carat", "2.02"],
      ["Cut", "Oval"],
      ["Lab", "GIA"],
      ["Treatment", "None"],
    ],
    photo: "/images/spinel-preview.png",
  },
  {
    name: "Alexandrite",
    from: "6,800",
    tag: "Two colours, one stone",
    note: "Green in daylight, red by candle. It absorbs light so precisely that a change of lamp changes the gem.",
    tone: { core: "#eee7ff", c1: "#4f9c88", c2: "#6b4a9e", c3: "#312f4d", hi: "#b9f0dd", shadow: "rgba(96,84,150,.45)" },
    spec: [
      ["Origin", "Balangoda"],
      ["Carat", "1.48"],
      ["Cut", "Round"],
      ["Lab", "SSEF"],
      ["Treatment", "None"],
    ],
    photo: "/images/alexandrite-preview.png",
  },
  {
    name: "Moonstone",
    from: "980",
    tag: "A tide held in stone",
    note: "A blue schiller that drifts across the surface as the stone is turned — adularescence, the moon's own light.",
    tone: { core: "#ffffff", c1: "#cdd9e6", c2: "#9fb6cf", c3: "#647890", hi: "#dbe9ff", shadow: "rgba(167,199,231,.42)" },
    spec: [
      ["Origin", "Meetiyagoda"],
      ["Carat", "5.60"],
      ["Cut", "Cabochon"],
      ["Lab", "—"],
      ["Treatment", "None"],
    ],
    photo: "/images/moonstone-preview.png",
  },
];
