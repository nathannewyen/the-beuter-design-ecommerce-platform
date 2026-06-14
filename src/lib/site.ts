export const siteConfig = {
  name: "BEUTER®",
  tagline: "Contemporary basics for the everyday.",
  description:
    "BEUTER® is an independent contemporary label working in elevated essentials, seasonal capsules, and considered tailoring.",
  url: "https://the-beuter-design.local",
  locale: "en",
  social: {
    instagram: "https://instagram.com/beuter.design",
    facebook: "https://facebook.com/beuter.design",
  },
} as const;

export const primaryNav = [
  { label: "Webstore", href: "/shop" },
  { label: "Summer 26", href: "/campaigns/summer-26" },
  { label: "Sale", href: "/shop?on_sale=1" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = {
  shop: [
    { label: "Women", href: "/shop/women" },
    { label: "Men", href: "/shop/men" },
    { label: "Denim", href: "/shop/denim" },
    { label: "Sale", href: "/shop?on_sale=1" },
  ],
  studio: [
    { label: "About Us", href: "/about" },
    { label: "Job Opportunities", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  support: [
    { label: "Worldwide Shipping", href: "/shipping" },
    { label: "Policy", href: "/policy" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
