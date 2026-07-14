import type { GemTone } from "./components/Gem";

export type CatalogType = "Sapphire" | "Spinel" | "Alexandrite" | "Moonstone";

export type StoryPoint = { title: string; body: string };

export type CatalogItem = {
  name: string;
  type: CatalogType;
  cert: string;
  certNumber: string;
  specs: string;
  price: string;
  tone: GemTone;
  carat: string;
  colourName: string;
  cut: string;
  origin: string;
  treatment: string;
  story: StoryPoint[];
};

export const catalog: CatalogItem[] = [
  {
    name: "Ceylon Royal Blue Sapphire",
    type: "Sapphire",
    cert: "GIA Certified",
    certNumber: "GIA #2261048xxx",
    specs: "2.14ct · Cushion · Ratnapura",
    price: "$18,400",
    tone: { core: "#e2ecff", c1: "#3f68d6", c2: "#1f3b8f", c3: "#0f1f52", hi: "#9cb8ff", shadow: "rgba(63,104,214,.45)" },
    carat: "2.14 ct",
    colourName: "Royal Blue",
    cut: "Cushion",
    origin: "Ratnapura, Sri Lanka",
    treatment: "None (Unheated)",
    story: [
      { title: "Where Found", body: "Recovered from the alluvial gem gravels near Ratnapura, Sri Lanka's historic City of Gems, at a depth of roughly 12 metres." },
      { title: "Who Selected It", body: "Hand-selected by our resident gemmologist from a parcel of over 200 rough stones for its exceptional clarity and hue." },
      { title: "Why Exceptional", body: "A true royal blue with even saturation and minimal inclusions — a combination found in a small fraction of Ceylon sapphires." },
      { title: "What Makes It Rare", body: "Unheated stones of this size and clarity account for a small share of the market, verified and disclosed on its certificate." },
    ],
  },
  {
    name: "Cornflower Blue Sapphire",
    type: "Sapphire",
    cert: "GIA Certified",
    certNumber: "GIA #2258174xxx",
    specs: "1.86ct · Oval · Elahera",
    price: "$14,200",
    tone: { core: "#eaf1ff", c1: "#6f96e8", c2: "#3f5fae", c3: "#233768", hi: "#c1d4ff", shadow: "rgba(111,150,232,.42)" },
    carat: "1.86 ct",
    colourName: "Cornflower Blue",
    cut: "Oval",
    origin: "Elahera, Sri Lanka",
    treatment: "None (Unheated)",
    story: [
      { title: "Where Found", body: "Washed from the river gravels of Elahera, worked by small licensed pit operators for three generations." },
      { title: "Who Selected It", body: "Chosen from a parcel of forty stones for the softness of its blue — lighter and more luminous than the royal-blue standard." },
      { title: "Why Exceptional", body: "Cornflower is the rarest hue family in Ceylon sapphire, prized for reading blue in any light rather than shifting toward grey or violet." },
      { title: "What Makes It Rare", body: "Fewer than one in twenty stones from this parcel met the saturation threshold to be called true cornflower." },
    ],
  },
  {
    name: "Padparadscha Sapphire",
    type: "Sapphire",
    cert: "AI Certified",
    certNumber: "AI #3381027xxx",
    specs: "1.42ct · Cushion · Ratnapura",
    price: "$21,900",
    tone: { core: "#ffe9de", c1: "#f0895a", c2: "#c85a3a", c3: "#7a2f24", hi: "#ffc7a3", shadow: "rgba(240,137,90,.45)" },
    carat: "1.42 ct",
    colourName: "Padparadscha",
    cut: "Cushion",
    origin: "Ratnapura, Sri Lanka",
    treatment: "None (Unheated)",
    story: [
      { title: "Where Found", body: "Recovered from illam gravels outside Ratnapura, where padparadscha has been found only sporadically for decades." },
      { title: "Who Selected It", body: "Set aside by our gemmologist the moment it broke from the rough — the pink-orange balance is visible even unpolished." },
      { title: "Why Exceptional", body: "Named for the lotus blossom, padparadscha requires a precise, stable balance of pink and orange with no dominant hue." },
      { title: "What Makes It Rare", body: "Padparadscha accounts for well under one percent of Ceylon's sapphire output, making certified stones genuinely scarce." },
    ],
  },
  {
    name: "Ceylon Blue Sapphire",
    type: "Sapphire",
    cert: "GIA Certified",
    certNumber: "GIA #2249981xxx",
    specs: "3.05ct · Round · Kataragama",
    price: "$26,700",
    tone: { core: "#e6efff", c1: "#5b8def", c2: "#2f52a8", c3: "#182a63", hi: "#a9c6ff", shadow: "rgba(78,121,224,.45)" },
    carat: "3.05 ct",
    colourName: "Ceylon Blue",
    cut: "Round",
    origin: "Kataragama, Sri Lanka",
    treatment: "None (Unheated)",
    story: [
      { title: "Where Found", body: "Sourced from Kataragama, a smaller and less-worked gem field on the island's southern gem belt." },
      { title: "Who Selected It", body: "Selected for its exceptional size and even colour distribution across the full 3.05 carats." },
      { title: "Why Exceptional", body: "Larger, clean, well-saturated Ceylon sapphires become disproportionately rarer as carat weight increases." },
      { title: "What Makes It Rare", body: "Stones over three carats with this clarity typically represent less than five percent of a season's output from any one field." },
    ],
  },
  {
    name: "Ceylon Vivid Spinel",
    type: "Spinel",
    cert: "GIC Certified",
    certNumber: "GIC #7743120xxx",
    specs: "1.68ct · Oval · Ratnapura",
    price: "$4,900",
    tone: { core: "#ffe1e6", c1: "#e0556f", c2: "#a92846", c3: "#6a132a", hi: "#ffb3c0", shadow: "rgba(200,64,91,.45)" },
    carat: "1.68 ct",
    colourName: "Vivid Red-Pink",
    cut: "Oval",
    origin: "Ratnapura, Sri Lanka",
    treatment: "None",
    story: [
      { title: "Where Found", body: "Recovered from the gem gravels of Ratnapura alongside sapphire — spinel is a frequent, and often overlooked, neighbour in the same gravel." },
      { title: "Who Selected It", body: "Chosen for a saturation rarely seen outside the finest Burmese material, unusual for a Ceylon stone of this size." },
      { title: "Why Exceptional", body: "For centuries mistaken for ruby and set into royal crowns under that name, spinel is only now valued in its own right." },
      { title: "What Makes It Rare", body: "Vivid, eye-clean spinel over one and a half carats is uncommon enough that most goes directly to private clients." },
    ],
  },
  {
    name: "Alexandrite, Colour-Change",
    type: "Alexandrite",
    cert: "GIA Certified",
    certNumber: "GIA #2265590xxx",
    specs: "0.92ct · Round · Ratnapura",
    price: "$9,300",
    tone: { core: "#eee7ff", c1: "#4f9c88", c2: "#6b4a9e", c3: "#312f4d", hi: "#b9f0dd", shadow: "rgba(96,84,150,.45)" },
    carat: "0.92 ct",
    colourName: "Green / Red (Colour-Change)",
    cut: "Round",
    origin: "Ratnapura, Sri Lanka",
    treatment: "None",
    story: [
      { title: "Where Found", body: "Recovered from the gem pits of Balangoda and Ratnapura, where alexandrite occurs in only a handful of pockets." },
      { title: "Who Selected It", body: "Tested under both daylight and incandescent light by our gemmologist before being accepted into the collection." },
      { title: "Why Exceptional", body: "A genuine, strong colour change from green to red — the phenomenon that gives the stone its name is present in only a minority of material sold as alexandrite." },
      { title: "What Makes It Rare", body: "Ceylon alexandrite of this clarity and change-strength is among the rarest coloured stones we offer, in any carat weight." },
    ],
  },
  {
    name: "Ceylon Blue Moonstone",
    type: "Moonstone",
    cert: "AI Certified",
    certNumber: "AI #1182456xxx",
    specs: "4.20ct · Cabochon · Meetiyagoda",
    price: "$1,450",
    tone: { core: "#ffffff", c1: "#cdd9e6", c2: "#9fb6cf", c3: "#647890", hi: "#dbe9ff", shadow: "rgba(167,199,231,.42)" },
    carat: "4.20 ct",
    colourName: "Blue Sheen",
    cut: "Cabochon",
    origin: "Meetiyagoda, Sri Lanka",
    treatment: "None",
    story: [
      { title: "Where Found", body: "Recovered from Meetiyagoda, the island's singular source of blue moonstone, worked since the early twentieth century." },
      { title: "Who Selected It", body: "Selected for the strength and evenness of its adularescence — the blue sheen that appears to move beneath the surface." },
      { title: "Why Exceptional", body: "Meetiyagoda blue is considered the finest moonstone colour in the world, distinct from the grey or white material found elsewhere." },
      { title: "What Makes It Rare", body: "The Meetiyagoda deposit is finite and increasingly depleted, making strong blue schiller harder to source each year." },
    ],
  },
  {
    name: "Matched Sapphire Pair",
    type: "Sapphire",
    cert: "GIA Certified",
    certNumber: "GIA #2271840xxx",
    specs: "2×1.3ct · Oval · Ratnapura",
    price: "$19,800",
    tone: { core: "#e6efff", c1: "#5b8def", c2: "#2f52a8", c3: "#182a63", hi: "#a9c6ff", shadow: "rgba(78,121,224,.45)" },
    carat: "2 × 1.3 ct",
    colourName: "Cornflower Blue",
    cut: "Oval",
    origin: "Ratnapura, Sri Lanka",
    treatment: "None (Unheated)",
    story: [
      { title: "Where Found", body: "Both stones recovered from the same Ratnapura parcel, cut months apart before being reunited for this pairing." },
      { title: "Who Selected It", body: "Matched by eye and by spectrometer for identical hue, tone and saturation — a slower process than sourcing a single stone." },
      { title: "Why Exceptional", body: "True matched pairs occur naturally only when two stones happen to share the same colour lineage from the rough." },
      { title: "What Makes It Rare", body: "Matched pairs suited to earrings are sourced, not manufactured — most parcels yield none at all." },
    ],
  },
  {
    name: "Ceylon Pink Spinel",
    type: "Spinel",
    cert: "GIC Certified",
    certNumber: "GIC #7749963xxx",
    specs: "1.15ct · Cushion · Elahera",
    price: "$3,600",
    tone: { core: "#ffe6f0", c1: "#e878a3", c2: "#b8447a", c3: "#711f4d", hi: "#ffc0da", shadow: "rgba(232,120,163,.42)" },
    carat: "1.15 ct",
    colourName: "Vivid Pink",
    cut: "Cushion",
    origin: "Elahera, Sri Lanka",
    treatment: "None",
    story: [
      { title: "Where Found", body: "Recovered from Elahera's gem gravels, where pink spinel occurs far less often than its red and blue counterparts." },
      { title: "Who Selected It", body: "Selected for a clean, vivid pink with none of the greyish undertone common to lower-grade material." },
      { title: "Why Exceptional", body: "Pink spinel's colour is entirely natural and stable — it is never heated or treated to achieve its hue." },
      { title: "What Makes It Rare", body: "Vivid, eye-clean pink spinel above one carat rarely reaches the open market before being claimed by collectors." },
    ],
  },
];

export const catalogTypes: CatalogType[] = ["Sapphire", "Spinel", "Alexandrite", "Moonstone"];

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[,]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function findBySlug(slug: string): CatalogItem | undefined {
  return catalog.find((g) => slugify(g.name) === slug);
}
