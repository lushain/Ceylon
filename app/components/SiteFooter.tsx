import Link from "next/link";

const columns: { h: string; l: { label: string; href: string }[] }[] = [
  {
    h: "Explore",
    l: [
      { label: "Gemstones", href: "/gemstones" },
      { label: "Bespoke", href: "/bespoke" },
      { label: "Our Story", href: "/our-story" },
      { label: "Provenance", href: "/#provenance" },
    ],
  },
  {
    h: "Care",
    l: [
      { label: "Certification", href: "/gemstones" },
      { label: "Shipping", href: "#" },
      { label: "Insurance", href: "#" },
      { label: "Contact", href: "mailto:hello@ceylon.gems" },
    ],
  },
  {
    h: "Reach us",
    l: [
      { label: "hello@ceylon.gems", href: "mailto:hello@ceylon.gems" },
      { label: "+94 45 000 000", href: "tel:+9445000000" },
      { label: "Colombo · London", href: "#" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="max-w-[30ch] text-[0.85rem] leading-relaxed text-slate">
              Gemstones &amp; bespoke fine jewellery, sourced from Sri Lanka and
              set by hand.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.h}>
                <p className="mono text-[0.64rem] tracking-[0.18em] text-slate/70 uppercase">{col.h}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.l.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="link-underline text-[0.85rem] text-ivory/80 hover:text-ivory">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-wordmark relative mt-16 md:mt-24">
          <p className="display select-none text-[clamp(4.5rem,15vw,12rem)] leading-[0.82] tracking-[-0.02em] text-ivory">
            Ceylon
          </p>
          <hr className="hairline absolute inset-x-0" />
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="mono text-[0.66rem] tracking-[0.14em] text-slate/70 uppercase">
            © {new Date().getFullYear()} Ceylon Gemstones
          </p>
          <p className="mono text-[0.66rem] tracking-[0.14em] text-slate/70 uppercase">
            Untreated · Certified · Traceable
          </p>
        </div>
      </div>
    </footer>
  );
}
