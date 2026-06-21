import type { Campaign } from "@/types";

export const campaigns: Campaign[] = [
  {
    id: "summer-26",
    slug: "summer-26",
    title: "BEUTER® SUMMER 26",
    season: "SUMMER 26",
    eyebrow: "Soul Feels Good",
    description:
      "Pieces shaped for long-haul wear in heat and humidity — washed cotton twill, silk satin and garment-dyed denim.",
    hero: {
      src: "https://pos.nvncdn.com/fcb45e-89373/bn/20260608_V5gCmnQh.jpg",
      alt: "BEUTER® Summer 26 campaign",
    },
    secondary: {
      src: "https://pos.nvncdn.com/fcb45e-89373/bn/20260608_XDaViBsW.jpg",
      alt: "BEUTER® Summer 26 secondary still",
    },
    link: "/campaigns/summer-26",
  },
  {
    id: "spring-26-intermission",
    slug: "spring-26-intermission",
    title: "BEUTER® SPRING 26 INTERMISSION",
    season: "SPRING 26",
    eyebrow: "In transition",
    description:
      "A short intermission of carry-over pieces from spring — knits, light outerwear and worn-in denim.",
    hero: {
      src: "https://pos.nvncdn.com/fcb45e-89373/bn/20260608_9bmxt9DO.jpg",
      alt: "BEUTER® Spring 26 Intermission",
    },
    link: "/campaigns/spring-26-intermission",
  },
];
