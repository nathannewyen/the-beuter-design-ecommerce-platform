"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useCart } from "@/lib/cart-store";
import { products } from "@/data";
import { formatPrice } from "@/lib/format";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PaymentMethod = "online" | "cod" | "transfer";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  shipToDifferent: boolean;
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  note: string;
  payment: PaymentMethod;
  discountCode: string;
}

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  shipToDifferent: false,
  address: "",
  country: "",
  state: "",
  city: "",
  postalCode: "",
  note: "",
  payment: "cod",
  discountCode: "",
};

const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Singapore",
  "Japan",
  "South Korea",
  "Vietnam",
  "Other",
];

export function Checkout() {
  const t = useTranslations("checkout");
  const lines = useCart((s) => s.lines);
  const clear = useCart((s) => s.clear);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const enriched = useMemo(
    () =>
      lines
        .map((line) => ({
          line,
          product: products.find((p) => p.id === line.productId),
        }))
        .filter(
          (entry): entry is { line: typeof entry.line; product: NonNullable<typeof entry.product> } =>
            Boolean(entry.product),
        ),
    [lines],
  );

  const subtotal = enriched.reduce(
    (total, { line, product }) => total + product.price * line.quantity,
    0,
  );
  const total = subtotal;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (enriched.length === 0) return;
    setSubmitting(true);
    setTimeout(() => {
      clear();
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center space-y-4">
        <p className="bd-eyebrow text-muted">Order placed</p>
        <h1 className="text-2xl sm:text-3xl">Thank you for your order.</h1>
        <p className="text-sm text-muted-strong leading-relaxed">
          A confirmation has been sent to your email. We&apos;ll be in touch
          once your order ships.
        </p>
        <div className="pt-4">
          <Link href="/shop">
            <Button variant="secondary">{t("returnToShop")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (enriched.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl">{t("emptyTitle")}</h1>
        <p className="text-sm text-muted-strong leading-relaxed">
          {t("emptyBody")}
        </p>
        <div className="pt-4">
          <Link href="/shop">
            <Button variant="secondary">{t("returnToShop")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,420px)] gap-12 lg:gap-16">
      <form className="space-y-8" onSubmit={onSubmit} noValidate>
        <header className="flex items-baseline justify-between border-b border-line pb-4">
          <h1 className="text-xl sm:text-2xl">{t("title")}</h1>
          <span className="bd-eyebrow text-muted">{siteConfig.name}</span>
        </header>

        <p className="text-[13px] leading-relaxed text-muted-strong">
          {t("loginReminder")}
        </p>

        <div className="space-y-4">
          <FloatingInput
            label={t("fullName")}
            value={form.fullName}
            onChange={(v) => update("fullName", v)}
            autoComplete="name"
            required
          />
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-4">
            <FloatingInput
              label={t("email")}
              type="email"
              value={form.email}
              onChange={(v) => update("email", v)}
              autoComplete="email"
              required
            />
            <FloatingInput
              label={t("phone")}
              type="tel"
              value={form.phone}
              onChange={(v) => update("phone", v)}
              autoComplete="tel"
              required
            />
          </div>

          <label className="flex items-center gap-2 text-[13px] text-muted-strong pt-1">
            <input
              type="checkbox"
              checked={form.shipToDifferent}
              onChange={(event) => update("shipToDifferent", event.target.checked)}
              className="h-4 w-4 border border-line accent-foreground"
            />
            {t("shipToDifferent")}
          </label>

          <FloatingInput
            label={t("address")}
            value={form.address}
            onChange={(v) => update("address", v)}
            autoComplete="street-address"
            required
          />

          <FloatingSelect
            label={t("country")}
            value={form.country}
            onChange={(v) => update("country", v)}
            placeholder={t("selectCountry")}
            options={COUNTRIES}
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FloatingInput
              label={t("state")}
              value={form.state}
              onChange={(v) => update("state", v)}
              autoComplete="address-level1"
            />
            <FloatingInput
              label={t("city")}
              value={form.city}
              onChange={(v) => update("city", v)}
              autoComplete="address-level2"
              required
            />
            <FloatingInput
              label={t("postalCode")}
              value={form.postalCode}
              onChange={(v) => update("postalCode", v)}
              autoComplete="postal-code"
            />
          </div>

          <FloatingTextArea
            label={t("note")}
            value={form.note}
            onChange={(v) => update("note", v)}
          />
        </div>

        <fieldset className="space-y-3">
          <legend className="text-base text-foreground mb-2">
            {t("paymentMethod")}
          </legend>
          <PaymentOption
            value="online"
            label={t("paymentOnline")}
            selected={form.payment}
            onChange={(v) => update("payment", v)}
          />
          <PaymentOption
            value="cod"
            label={t("paymentCod")}
            selected={form.payment}
            onChange={(v) => update("payment", v)}
          />
          <PaymentOption
            value="transfer"
            label={t("paymentTransfer")}
            selected={form.payment}
            onChange={(v) => update("payment", v)}
          />
        </fieldset>

        <Button type="submit" size="lg" fullWidth disabled={submitting}>
          {submitting ? "Processing…" : t("placeOrder")}
        </Button>
      </form>

      <aside className="lg:sticky lg:top-8 lg:self-start space-y-6">
        <h2 className="text-xl sm:text-2xl">{t("summary")}</h2>

        <ul className="space-y-5">
          {enriched.map(({ line, product }) => {
            const image = product.images[0];
            return (
              <li
                key={`${line.productId}-${line.size}`}
                className="flex gap-4"
              >
                <div className="relative w-16 aspect-[3/4] shrink-0 overflow-hidden bg-off-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[12px] tracking-[0.12em] uppercase text-foreground">
                      {product.name} - {product.color} - {line.size}
                    </p>
                    <p className="text-[12px] text-muted mt-1">
                      x {line.quantity}
                    </p>
                  </div>
                  <p className="text-[13px] tabular-nums whitespace-nowrap">
                    {formatPrice(product.price * line.quantity)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-line pt-5 space-y-2 text-[13px]">
          <SummaryRow label={t("subtotal")} value={formatPrice(subtotal)} />
          <SummaryRow label={t("shipping")} value="—" muted />
          <SummaryRow label={t("discount")} value="—" muted />
          <SummaryRow label={t("total")} value={formatPrice(total)} strong />
        </div>

        <div className="space-y-2">
          <p className="text-[12px] text-muted-strong">
            {t("discountCodePrompt")}
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={form.discountCode}
              onChange={(event) => update("discountCode", event.target.value)}
              placeholder={t("discountCodePlaceholder")}
              className="flex-1 h-11 border border-line bg-background px-3 text-[13px] focus:outline-none focus:border-foreground transition-colors"
            />
            <Button type="button" size="md">
              {t("applyDiscount")}
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

interface FloatingInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}

function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
}: FloatingInputProps) {
  return (
    <label className="relative block">
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        required={required}
        placeholder=" "
        className="peer w-full h-14 border border-line bg-background px-4 pt-5 pb-2 text-[14px] text-foreground focus:outline-none focus:border-foreground transition-colors"
      />
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[14px] text-muted transition-all peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:tracking-[0.16em] peer-focus:uppercase peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:tracking-[0.16em] peer-[&:not(:placeholder-shown)]:uppercase">
        {label}
      </span>
    </label>
  );
}

interface FloatingTextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function FloatingTextArea({ label, value, onChange }: FloatingTextAreaProps) {
  return (
    <label className="relative block">
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        placeholder=" "
        className="peer w-full border border-line bg-background px-4 pt-6 pb-3 text-[14px] text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
      />
      <span className="pointer-events-none absolute left-4 top-4 text-[14px] text-muted transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.16em] peer-focus:uppercase peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:tracking-[0.16em] peer-[&:not(:placeholder-shown)]:uppercase">
        {label}
      </span>
    </label>
  );
}

interface FloatingSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly string[];
  required?: boolean;
}

function FloatingSelect({
  label,
  value,
  onChange,
  placeholder,
  options,
  required,
}: FloatingSelectProps) {
  return (
    <label className="relative block">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className={cn(
          "w-full h-14 appearance-none border border-line bg-background px-4 pt-5 pb-2 pr-10 text-[14px] focus:outline-none focus:border-foreground transition-colors",
          value ? "text-foreground" : "text-muted",
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute left-4 top-3 text-[10px] tracking-[0.16em] uppercase text-muted">
        {label}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
      >
        ▾
      </span>
    </label>
  );
}

interface PaymentOptionProps {
  value: PaymentMethod;
  label: string;
  selected: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
}

function PaymentOption({ value, label, selected, onChange }: PaymentOptionProps) {
  const isSelected = selected === value;
  return (
    <label
      className={cn(
        "flex items-start gap-3 border px-4 py-3 cursor-pointer transition-colors",
        isSelected ? "border-foreground" : "border-line hover:border-muted-strong",
      )}
    >
      <span
        className={cn(
          "mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
          isSelected ? "border-foreground" : "border-muted",
        )}
      >
        {isSelected && <span className="h-2 w-2 rounded-full bg-foreground" />}
      </span>
      <input
        type="radio"
        name="payment"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span className="text-[13px] leading-relaxed">{label}</span>
    </label>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
  muted?: boolean;
  strong?: boolean;
}

function SummaryRow({ label, value, muted, strong }: SummaryRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        strong && "pt-3 mt-2 border-t border-line text-base font-medium",
      )}
    >
      <span className={cn(strong ? "text-foreground" : "text-muted-strong")}>
        {label}
      </span>
      <span
        className={cn(
          "tabular-nums",
          muted ? "text-muted" : "text-foreground",
        )}
      >
        {value}
      </span>
    </div>
  );
}
