import type { AdCampaign, AdPlacement } from "./types";

export const adIndex: AdCampaign[] = [
  {
    id: "demo-hero-1",
    title: "Demo Reklam (Hero)",
    description: "Bu alan yerel reklam sistemi örneğidir.",
    href: "/ads",
    placement: "home_hero",
    weight: 3,
    active: true,
  },
  {
    id: "demo-sidebar-1",
    title: "Demo Reklam (Sidebar)",
    description: "Servis çağrısı yok, tamamen statik.",
    href: "/ads",
    placement: "home_sidebar",
    weight: 2,
    active: true,
  },
  {
    id: "demo-footer-1",
    title: "Demo Reklam (Footer)",
    description: "Footer yerleşimi örneği.",
    href: "/ads",
    placement: "footer",
    weight: 1,
    active: true,
  },
];

export function getActiveAds(placement: AdPlacement) {
  return adIndex.filter((a) => a.active !== false && a.placement === placement);
}

export function pickWeightedAd(ads: AdCampaign[]) {
  const pool = ads.flatMap((ad) => Array.from({ length: ad.weight ?? 1 }, () => ad));
  if (pool.length === 0) return undefined;
  return pool[Math.floor(Math.random() * pool.length)];
}

