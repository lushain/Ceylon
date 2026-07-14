"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const SCROLL_THRESHOLD = 24;

const NAV_LINKS = [
  { label: "Our Story", href: "/our-story" },
  { label: "Bespoke", href: "/bespoke" },
  { label: "Stories", href: "/#stories" },
];

const GEMSTONES_PANEL = [
  {
    label: "Shop",
    title: "The Collection",
    desc: "Every certified stone, ready to design around.",
    href: "/gemstones",
    photo: "/images/sapphire-foremost.png",
  },
  {
    label: "Guide",
    title: "Gemstone Guide",
    desc: "Colour, durability and character, stone by stone.",
    href: "/gemstone-guide",
    photo: "/images/guide-moonstone-ethereal.png",
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="display text-[1.4rem] tracking-[0.02em] text-ivory">
          Ceylon
        </Link>
        <div className="hidden items-center gap-7 text-[0.82rem] text-slate md:flex">
          <Link
            href="/our-story"
            className={`link-underline ${pathname === "/our-story" ? "text-ivory" : "text-ivory/75 hover:text-ivory"}`}
          >
            Our Story
          </Link>

          {/* ---- Gemstones dropdown ---- */}
          <div className="group relative">
            <Link
              href="/gemstones"
              className={`link-underline flex items-center gap-1.5 ${
                pathname === "/gemstones" || pathname === "/gemstone-guide"
                  ? "text-ivory"
                  : "text-ivory/75 hover:text-ivory"
              }`}
            >
              Gemstones
              <svg
                viewBox="0 0 10 6"
                width="9"
                height="6"
                fill="none"
                aria-hidden
                className="mt-px transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <div
              className="invisible absolute left-1/2 top-full z-50 flex w-[440px] -translate-x-1/2 translate-y-2 gap-3 border border-hairline bg-ink p-3 opacity-0 shadow-2xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-3 group-focus-within:opacity-100"
            >
              {GEMSTONES_PANEL.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group/card relative block aspect-[4/5] w-1/2 overflow-hidden p-0! m-0!"
                >
                  <Image
                    src={item.photo}
                    alt=""
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.82) 100%)" }}
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="mono text-[0.6rem] tracking-[0.16em] text-white/70 uppercase">{item.label}</p>
                    <h3 className="display mt-1.5 text-[1.15rem] leading-tight text-white">{item.title}</h3>
                    <p className="mt-1.5 text-[0.72rem] leading-snug text-white/75">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/bespoke"
            className={`link-underline ${pathname === "/bespoke" ? "text-ivory" : "text-ivory/75 hover:text-ivory"}`}
          >
            Bespoke
          </Link>
          <Link href="/#stories" className="link-underline text-ivory/75 hover:text-ivory">
            Stories
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/bespoke"
            className="btn-fill hidden border border-hairline px-5 py-2.5 text-[0.78rem] tracking-[0.14em] text-ivory uppercase transition-colors hover:text-abyss md:inline-block"
          >
            Start your design
          </Link>
        </div>
      </nav>
    </header>
  );
}
