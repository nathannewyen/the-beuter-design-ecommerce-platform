import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign in or create your BEUTER® account.",
};

export default function AccountPage() {
  return (
    <Container size="narrow" className="py-20 sm:py-28 grid md:grid-cols-2 gap-12">
      <section>
        <p className="beuter-eyebrow text-muted">Returning customer</p>
        <h1 className="beuter-display text-4xl mt-3">Sign in</h1>
        <form className="mt-8 space-y-5">
          <Field label="Email" type="email" name="email" autoComplete="email" />
          <Field label="Password" type="password" name="password" autoComplete="current-password" />
          <Button size="md" fullWidth>
            Sign in
          </Button>
          <p className="text-sm text-muted">
            <Link href="/account/reset" className="underline underline-offset-4">
              Forgot your password?
            </Link>
          </p>
        </form>
      </section>

      <section className="md:border-l md:border-line md:pl-12">
        <p className="beuter-eyebrow text-muted">New here</p>
        <h2 className="beuter-display text-4xl mt-3">Create an account</h2>
        <p className="mt-5 text-[15px] text-muted-strong leading-relaxed">
          A BEUTER® account saves your shipping details, order history and
          wishlist. We never share your information.
        </p>
        <Link href="/account/register" className="mt-8 inline-block">
          <Button size="md" variant="secondary">
            Create an account
          </Button>
        </Link>
      </section>
    </Container>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="beuter-eyebrow text-muted">{label}</span>
      <input
        {...props}
        className="mt-2 w-full border-b border-foreground/30 py-2 text-base focus:outline-none focus:border-foreground bg-transparent"
      />
    </label>
  );
}
