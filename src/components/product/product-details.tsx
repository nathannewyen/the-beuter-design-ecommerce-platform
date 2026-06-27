"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  description: string;
  details: string[];
  composition: string;
}

interface Section {
  title: string;
  body: React.ReactNode;
  defaultOpen?: boolean;
}

export function ProductDetails({
  description,
  details,
  composition,
}: ProductDetailsProps) {
  const sections: Section[] = [
    {
      title: "Description",
      body: <p className="text-sm leading-relaxed text-muted-strong">{description}</p>,
      defaultOpen: true,
    },
    {
      title: "Details",
      body: (
        <ul className="text-sm space-y-1.5 text-muted-strong list-disc pl-4">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Composition & care",
      body: <p className="text-sm leading-relaxed text-muted-strong">{composition}</p>,
    },
    {
      title: "Shipping & returns",
      body: (
        <p className="text-sm leading-relaxed text-muted-strong">
          Worldwide flat-rate shipping via DHL Express. Returns within 14 days
          for unworn items in original packaging.
        </p>
      ),
    },
  ];

  return (
    <div className="border-t border-line">
      {sections.map((section) => (
        <Accordion key={section.title} section={section} />
      ))}
    </div>
  );
}

function Accordion({ section }: { section: Section }) {
  const [open, setOpen] = useState(Boolean(section.defaultOpen));
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="beuter-eyebrow">{section.title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">{section.body}</div>
      </div>
    </div>
  );
}
