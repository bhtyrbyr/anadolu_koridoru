"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  title?: string;
  children: ReactNode[];
  className?: string;
};

export function Carousel({ title, children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const items = useMemo(() => children.filter(Boolean), [children]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 2);
      setCanNext(el.scrollLeft < max - 2);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const step = Math.max(280, Math.floor(el.clientWidth * 0.85));
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className={className}>
      <div className="mb-4 flex items-end justify-between gap-4">
        {title ? <h2 className="text-2xl font-semibold tracking-tight">{title}</h2> : <div />}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className="inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-zinc-900 disabled:opacity-40"
            aria-label="Önceki"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            className="inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-zinc-900 disabled:opacity-40"
            aria-label="Sonraki"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, idx) => (
          <div
            key={idx}
            className="min-w-[280px] max-w-[320px] snap-start sm:min-w-[320px]"
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}

