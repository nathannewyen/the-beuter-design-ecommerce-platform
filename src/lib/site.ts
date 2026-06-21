export const siteConfig = {
  name: "BEUTER®",
  tagline: "BEUTER®",
  description:
    "BEUTER® is an independent contemporary label working in elevated essentials, seasonal capsules and considered tailoring.",
  url: "https://the-beuter-design.local",
  locale: "en",
  legal: {
    company: "CÔNG TY TNHH THE BEUTER",
    address: "9B PHÙNG KHẮC KHOAN, PHƯỜNG SÀI GÒN, TP.HCM",
    hotline: "077.915.0000",
    email: "info@thebeuter.com",
    copyright: "© 2026 THE BEUTER",
  },
  social: {
    instagram: "https://instagram.com/thebeuter",
    facebook: "https://facebook.com/beuter.official",
  },
} as const;

export const primaryNav = [
  { label: "Summer 26", href: "/campaigns/summer-26" },
  { label: "Spring 26 Intermission", href: "/campaigns/spring-26-intermission" },
  { label: "Trang chủ", href: "/" },
  { label: "Campaign", href: "/campaigns" },
  { label: "Webstore", href: "/shop" },
  { label: "Sale", href: "/shop?on_sale=1" },
  { label: "About Us", href: "/about" },
  { label: "Policy", href: "/policy" },
  { label: "Worldwide Shipping", href: "/shipping" },
  { label: "Job Opportunities", href: "/careers" },
] as const;

export const shopCategoryNav = [
  {
    title: "New Arrival",
    items: [{ label: "New Arrival", href: "/shop?sort=newest" }],
  },
  {
    title: "Worldwide Shipping",
    items: [{ label: "Worldwide Shipping", href: "/shipping" }],
  },
  {
    title: "Collections",
    items: [
      { label: "Summer 26", href: "/campaigns/summer-26" },
      { label: "Spring 26 Intermission", href: "/campaigns/spring-26-intermission" },
      { label: 'F25 "Ready-to-F____"', href: "/shop?collection=f25" },
      { label: "FW24 Distractions", href: "/shop?collection=fw24" },
      { label: "Blank by Beuter", href: "/shop?collection=blank" },
      { label: "SS25 Spiritual Advisor", href: "/shop?collection=ss25" },
      { label: "SS24 Desertion", href: "/shop?collection=ss24" },
    ],
  },
  {
    title: "Tops",
    items: [
      { label: "Blazer", href: "/shop?category=blazer" },
      { label: "Graphic t-shirt", href: "/shop?category=graphic-tee" },
      { label: "Polo Shirt", href: "/shop?category=polo" },
      { label: "Blank by Beuter", href: "/shop?category=blank-tops" },
      { label: "Tank Tops", href: "/shop?category=tank" },
      { label: "Long sleeve", href: "/shop?category=long-sleeve" },
      { label: "Hoodies", href: "/shop?category=hoodie" },
      { label: "Sweaters", href: "/shop?category=knitwear" },
      { label: "Jackets", href: "/shop?category=jacket" },
      { label: "Shirts", href: "/shop?category=shirts" },
    ],
  },
  {
    title: "Bottoms",
    items: [
      { label: "Jeans", href: "/shop?category=denim" },
      { label: "Trousers", href: "/shop?category=trousers" },
      { label: "Sweatpants", href: "/shop?category=sweatpants" },
      { label: "Khaki pants", href: "/shop?category=khaki" },
      { label: "Shorts", href: "/shop?category=shorts" },
      { label: "Skirt", href: "/shop?category=skirt" },
      { label: "Underwear", href: "/shop?category=underwear" },
    ],
  },
  {
    title: "Accessories",
    items: [
      { label: "Backpacks", href: "/shop?category=backpack" },
      { label: "Bags", href: "/shop?category=bag" },
      { label: "Straps", href: "/shop?category=strap" },
      { label: "Caps", href: "/shop?category=cap" },
      { label: "Socks", href: "/shop?category=socks" },
      { label: "Books", href: "/shop?category=book" },
    ],
  },
] as const;
