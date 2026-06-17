import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import type { Campaign } from "@/types";

interface CampaignSplitProps {
  campaign: Campaign;
}

export function CampaignSplit({ campaign }: CampaignSplitProps) {
  return (
    <section className="mt-24 sm:mt-32">
      <Container size="wide">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div className="relative aspect-[4/5] overflow-hidden bg-off-white">
            <Image
              src={campaign.hero.src}
              alt={campaign.hero.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center md:pl-6">
            <p className="beuter-eyebrow text-muted">{campaign.eyebrow}</p>
            <h2 className="beuter-display text-4xl sm:text-5xl mt-4">
              {campaign.title}
            </h2>
            <p className="mt-5 text-muted-strong max-w-md leading-relaxed">
              {campaign.description}
            </p>
            <Link
              href={campaign.link ?? "/shop"}
              className="mt-6 self-start beuter-eyebrow border-b border-foreground/40 hover:border-foreground pb-0.5"
            >
              View campaign
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
