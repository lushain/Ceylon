import type { GemTone } from "./components/Gem";

export type CatalogType = "Sapphire" | "Spinel" | "Alexandrite" | "Moonstone";

export type CatalogItem = {
  name: string;
  type: CatalogType;
  cert: string;
  specs: string;
  price: string;
  tone: GemTone;
};

export const catalog: CatalogItem[] = [
  {
    name: "Ceylon Royal Blue Sapphire",
    type: "Sapphire",
    cert: "GIA Certified",
    specs: "2.14ct · Cushion · Ratnapura",
    price: "$18,400",
    tone: { core: "#e2ecff", c1: "#3f68d6", c2: "#1f3b8f", c3: "#0f1f52", hi: "#9cb8ff", shadow: "rgba(63,104,214,.45)" },
  },
  {
    name: "Cornflower Blue Sapphire",
    type: "Sapphire",
    cert: "GIA Certified",
    specs: "1.86ct · Oval · Elahera",
    price: "$14,200",
    tone: { core: "#eaf1ff", c1: "#6f96e8", c2: "#3f5fae", c3: "#233768", hi: "#c1d4ff", shadow: "rgba(111,150,232,.42)" },
  },
  {
    name: "Padparadscha Sapphire",
    type: "Sapphire",
    cert: "AI Certified",
    specs: "1.42ct · Cushion · Ratnapura",
    price: "$21,900",
    tone: { core: "#ffe9de", c1: "#f0895a", c2: "#c85a3a", c3: "#7a2f24", hi: "#ffc7a3", shadow: "rgba(240,137,90,.45)" },
  },
  {
    name: "Ceylon Blue Sapphire",
    type: "Sapphire",
    cert: "GIA Certified",
    specs: "3.05ct · Round · Kataragama",
    price: "$26,700",
    tone: { core: "#e6efff", c1: "#5b8def", c2: "#2f52a8", c3: "#182a63", hi: "#a9c6ff", shadow: "rgba(78,121,224,.45)" },
  },
  {
    name: "Ceylon Vivid Spinel",
    type: "Spinel",
    cert: "GIC Certified",
    specs: "1.68ct · Oval · Ratnapura",
    price: "$4,900",
    tone: { core: "#ffe1e6", c1: "#e0556f", c2: "#a92846", c3: "#6a132a", hi: "#ffb3c0", shadow: "rgba(200,64,91,.45)" },
  },
  {
    name: "Alexandrite, Colour-Change",
    type: "Alexandrite",
    cert: "GIA Certified",
    specs: "0.92ct · Round · Ratnapura",
    price: "$9,300",
    tone: { core: "#eee7ff", c1: "#4f9c88", c2: "#6b4a9e", c3: "#312f4d", hi: "#b9f0dd", shadow: "rgba(96,84,150,.45)" },
  },
  {
    name: "Ceylon Blue Moonstone",
    type: "Moonstone",
    cert: "AI Certified",
    specs: "4.20ct · Cabochon · Meetiyagoda",
    price: "$1,450",
    tone: { core: "#ffffff", c1: "#cdd9e6", c2: "#9fb6cf", c3: "#647890", hi: "#dbe9ff", shadow: "rgba(167,199,231,.42)" },
  },
  {
    name: "Matched Sapphire Pair",
    type: "Sapphire",
    cert: "GIA Certified",
    specs: "2×1.3ct · Oval · Ratnapura",
    price: "$19,800",
    tone: { core: "#e6efff", c1: "#5b8def", c2: "#2f52a8", c3: "#182a63", hi: "#a9c6ff", shadow: "rgba(78,121,224,.45)" },
  },
  {
    name: "Ceylon Pink Spinel",
    type: "Spinel",
    cert: "GIC Certified",
    specs: "1.15ct · Cushion · Elahera",
    price: "$3,600",
    tone: { core: "#ffe6f0", c1: "#e878a3", c2: "#b8447a", c3: "#711f4d", hi: "#ffc0da", shadow: "rgba(232,120,163,.42)" },
  },
];

export const catalogTypes: CatalogType[] = ["Sapphire", "Spinel", "Alexandrite", "Moonstone"];
