"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getActiveAds, pickWeightedAd } from "@/lib/ads";
import type { AdCampaign, AdPlacement } from "@/lib/ads/types";

type Props = {
  placement: AdPlacement;
  className?: string;
  label?: string;
};

function track(kind: "impression" | "click", adId: string, placement: AdPlacement) {
  try {
    const key = "ad_events_v1";
    const raw = localStorage.getItem(key);
    const events = raw ? (JSON.parse(raw) as unknown[]) : [];
    events.push({ kind, adId, placement, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(events.slice(-500)));
  } catch {
    // ignore
  }
}

export function AdSlot({ placement, className, label = "Reklam" }: Props) {
  const ads = useMemo(() => getActiveAds(placement), [placement]);
  const [ad, setAd] = useState<AdCampaign | undefined>(() => pickWeightedAd(ads));

  useEffect(() => {
    const next = pickWeightedAd(ads);
    setAd(next);
  }, [ads]);

  useEffect(() => {
    if (!ad) return;
    track("impression", ad.id, placement);
  }, [ad, placement]);

  if (!ad) return null;

  return (
    <aside
      className={[
        "rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={label}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium tracking-wide text-foreground/60">
          {label.toUpperCase()}
        </p>
        <span className="rounded-full bg-black/5 px-2 py-0.5 text-[11px] text-foreground/60 dark:bg-white/10">
          {placement}
        </span>
      </div>
      <div className="mt-3">
        <Link
          href={ad.href}
          onClick={() => track("click", ad.id, placement)}
          className="block rounded-xl p-3 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
        >
          <p className="font-semibold tracking-tight">{ad.title}</p>
          {ad.description ? (
            <p className="mt-1 text-sm text-foreground/70">{ad.description}</p>
          ) : null}
          <p className="mt-2 text-xs text-foreground/60">Sponsorlu içerik</p>
        </Link>
      </div>
    </aside>
  );
}

