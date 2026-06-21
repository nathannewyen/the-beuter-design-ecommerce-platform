const VND_FORMATTER = new Intl.NumberFormat("en-US");

export function formatPrice(amount: number): string {
  return `${VND_FORMATTER.format(amount)}vnđ`;
}

export function formatPriceRange(min: number, max: number): string {
  if (min === max) return formatPrice(min);
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

export function formatDiscount(price: number, compareAt: number): string {
  if (compareAt <= price) return "";
  const off = Math.round(((compareAt - price) / compareAt) * 100);
  return `-${off}%`;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
