import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="px-6 sm:px-10 py-10 grid gap-8 md:grid-cols-3 items-end">
        <div className="space-y-1 bd-eyebrow text-foreground">
          <p className="font-semibold">{siteConfig.legal.company}</p>
          <p>ĐỊA CHỈ: {siteConfig.legal.address}</p>
          <p>HOTLINE: {siteConfig.legal.hotline}</p>
          <p>MAIL: {siteConfig.legal.email}</p>
        </div>
        <p className="bd-eyebrow text-center text-foreground">
          {siteConfig.legal.copyright}
        </p>
        <div className="bd-eyebrow flex gap-6 md:justify-end">
          <Link href="/newsletter" className="hover:opacity-60 lowercase tracking-[0.04em]">
            signup newsletter
          </Link>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-60 lowercase tracking-[0.04em]"
          >
            facebook
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-60 lowercase tracking-[0.04em]"
          >
            instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
