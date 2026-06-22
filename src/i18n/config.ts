export const LOCALES = ["en", "vi"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "BEUTER_LOCALE";

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value) && (LOCALES as readonly string[]).includes(value!);
}
