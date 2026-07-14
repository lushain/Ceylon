"use client";

import { useEffect, useRef } from "react";

const MAGNETIC_SELECTOR = "a, button";
const RADIUS = 100;

export default function CursorGem() {
  const dotRef = useRef<HTMLDivElement>(null);
  const raw = useRef({ x: -200, y: -200, has: false });
  const pos = useRef({ x: -200, y: -200 });
  const activeEl = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const onMove = (e: MouseEvent) => {
      raw.current.x = e.clientX;
      raw.current.y = e.clientY;
      raw.current.has = true;
    };
    const onLeave = () => {
      raw.current.has = false;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    let rafId: number;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      let targetX = raw.current.x;
      let targetY = raw.current.y;
      let nearest: HTMLElement | null = null;
      let nearestDist = Infinity;

      const els = document.querySelectorAll<HTMLElement>(MAGNETIC_SELECTOR);
      for (const el of els) {
        const r = el.getBoundingClientRect();
        // distance to the nearest point on the button's rect (not its center),
        // so wide/short buttons get an even margin on every side
        const nx = Math.max(r.left, Math.min(raw.current.x, r.right));
        const ny = Math.max(r.top, Math.min(raw.current.y, r.bottom));
        const dist = Math.hypot(raw.current.x - nx, raw.current.y - ny);
        if (dist < RADIUS && dist < nearestDist) {
          nearestDist = dist;
          nearest = el;
          targetX = r.left + r.width / 2;
          targetY = r.top + r.height / 2;
        }
      }

      if (activeEl.current && activeEl.current !== nearest) {
        activeEl.current.classList.remove("magnet-active");
      }
      if (nearest && activeEl.current !== nearest) {
        nearest.classList.add("magnet-active");
      }
      activeEl.current = nearest;

      const tau = nearest ? 0.09 : 0.14;
      const k = 1 - Math.exp(-dt / tau);
      pos.current.x += (targetX - pos.current.x) * k;
      pos.current.y += (targetY - pos.current.y) * k;

      const dot = dotRef.current;
      if (dot) {
        const scale = nearest ? 0.55 : 1;
        dot.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        dot.style.opacity = raw.current.has ? (nearest ? "0.7" : "1") : "0";
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
      activeEl.current?.classList.remove("magnet-active");
    };
  }, []);

  return (
    <div ref={dotRef} className="cursor-gem" aria-hidden>
      <div className="cursor-gem__core" />
    </div>
  );
}
