export type AdPlacement = "home_hero" | "home_sidebar" | "footer";

export type AdCampaign = {
  id: string;
  title: string;
  description?: string;
  href: string;
  imageSrc?: string;
  placement: AdPlacement;
  weight?: number;
  active?: boolean;
};

