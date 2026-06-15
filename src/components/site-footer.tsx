import Link from "next/link";
import { Container } from "@/components/container";
import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background pt-16 pb-10 mt-24">
      <Container size="wide">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-5 max-w-sm">
            <p className="beuter-display text-3xl">BEUTER®</p>
            <p className="text-sm text-muted leading-relaxed">
              {siteConfig.description}
            </p>
            <form className="flex border-b border-foreground/60 max-w-xs">
              <input
                type="email"
                required
                placeholder="Email for newsletter"
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                className="beuter-eyebrow text-foreground hover:text-muted-strong px-2"
              >
                Join
              </button>
            </form>
          </div>

          <FooterColumn title="Shop" items={footerNav.shop} />
          <FooterColumn title="Studio" items={footerNav.studio} />
          <FooterColumn title="Support" items={footerNav.support} />
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[11px] tracking-[0.18em] uppercase text-muted">
          <p>© {new Date().getFullYear()} BEUTER® · Ho Chi Minh City</p>
          <div className="flex gap-5">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <span>EN / VN</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="beuter-eyebrow text-muted-strong mb-4">{title}</p>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
