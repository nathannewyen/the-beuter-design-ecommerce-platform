import { getRequestConfig } from "next-intl/server";
import { DEFAULT_LOCALE } from "./config";

export default getRequestConfig(async () => {
  const messages = (await import(`./messages/${DEFAULT_LOCALE}.json`)).default;
  return { locale: DEFAULT_LOCALE, messages };
});
