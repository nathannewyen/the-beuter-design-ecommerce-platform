import type { Campaign } from "@/types";
import { campaignImages } from "./images";

export const campaigns: Campaign[] = [
  {
    id: "summer-26",
    slug: "summer-26",
    title: "Summer 26",
    season: "SS26",
    eyebrow: "Now showing",
    description:
      "Pieces shaped for long-haul wear in heat and humidity — washed cotton twill, silk satin, garment-dyed denim.",
    hero: {
      src: campaignImages.summer26Hero,
      alt: "Summer 26 campaign hero",
    },
    secondary: {
      src: campaignImages.summer26Secondary,
      alt: "Summer 26 secondary still",
    },
    link: "/campaigns/summer-26",
  },
  {
    id: "spring-26-intermission",
    slug: "spring-26-intermission",
    title: "Spring 26 Intermission",
    season: "SS26",
    eyebrow: "In transition",
    description:
      "A brief intermission of carry-over pieces from spring — knits, light outerwear and worn-in denim.",
    hero: {
      src: campaignImages.spring26Intermission,
      alt: "Spring 26 Intermission campaign",
    },
    link: "/campaigns/spring-26-intermission",
  },
];
