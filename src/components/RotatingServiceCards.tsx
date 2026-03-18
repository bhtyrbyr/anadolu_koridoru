"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type CardItem = {
  slug: string;
  title: string;
  slogan: string;
};

type Props = {
  items: CardItem[];
  intervalMs?: number;
};

type Phase = "idle" | "out" | "in";

export function RotatingServiceCards({ items, intervalMs = 30000 }: Props) {
  const [start, setStart] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [dir, setDir] = useState<"left" | "right">("left");
  const timer = useRef<number | null>(null);

  const page = useMemo(() => {
    if (items.length <= 4) return items;
    const slice = items.slice(start, start + 4);
    if (slice.length === 4) return slice;
    return [...slice, ...items.slice(0, 4 - slice.length)];
  }, [items, start]);

  useEffect(() => {
    if (items.length <= 4) return;
    timer.current = window.setInterval(() => {
      setPhase("out");
      setDir((d) => (d === "left" ? "right" : "left"));
      window.setTimeout(() => {
        setStart((s) => (s + 4) % items.length);
        setPhase("in");
        window.requestAnimationFrame(() => {
          window.setTimeout(() => setPhase("idle"), 420);
        });
      }, 320);
    }, intervalMs);

    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [intervalMs, items.length, items]);

  const move =
    dir === "left"
      ? phase === "out"
        ? "-translate-x-6 opacity-0"
        : phase === "in"
          ? "-translate-x-6 opacity-0"
          : "translate-x-0 opacity-100"
      : phase === "out"
        ? "translate-x-6 opacity-0"
        : phase === "in"
          ? "translate-x-6 opacity-0"
          : "translate-x-0 opacity-100";

  // When phase === "in", we want the container to animate into place.
  // We achieve it by immediately rendering at offset (opacity 0), then switching to idle shortly after.
  useEffect(() => {
    if (phase !== "in") return;
    const id = window.setTimeout(() => setPhase("idle"), 10);
    return () => window.clearTimeout(id);
  }, [phase]);

  return (
    <div
      className={[
        "transition-[transform,opacity] duration-300 ease-out",
        move,
      ].join(" ")}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {page.map((a) => (
          <div
            key={a.slug}
            className="border border-black/10 bg-zinc-50 p-4 shadow-sm"
          >
            <p className="line-clamp-2 text-base font-semibold tracking-tight text-zinc-950">
              {a.title}
            </p>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-700">
              {a.slogan}
            </p>
            <Link
              href={`/makale/${a.slug}`}
              className="mt-4 inline-flex text-sm font-medium text-zinc-900 hover:underline"
            >
              Daha fazla →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

