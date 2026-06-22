import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/site";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  return (
    <footer className="border-t border-line mt-24">
      <div className="px-6 sm:px-10 py-10 grid gap-8 md:grid-cols-3 items-end">
        <div className="space-y-1 bd-eyebrow text-foreground">
          <p className="font-semibold">{siteConfig.legal.company}</p>
          <p>
            {t("address")}: {siteConfig.legal.address}
          </p>
          <p>
            {t("hotline")}: {siteConfig.legal.hotline}
          </p>
          <p>
            {t("email")}: {siteConfig.legal.email}
          </p>
        </div>
        <p className="bd-eyebrow text-center text-foreground">
          {siteConfig.legal.copyright}
        </p>
        <div className="bd-eyebrow flex gap-6 md:justify-end">
          <Link
            href="/newsletter"
            className="hover:opacity-60 lowercase tracking-[0.04em]"
          >
            {t("newsletter")}
          </Link>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-60 lowercase tracking-[0.04em]"
          >
            {t("facebook")}
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-60 lowercase tracking-[0.04em]"
          >
            {t("instagram")}
          </a>
        </div>
      </div>
    </footer>
  );
}
