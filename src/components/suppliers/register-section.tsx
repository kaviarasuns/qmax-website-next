"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import SectionHeading from "./section-heading";
import { SUPPLIER_COUNTRIES } from "./suppliers-data";

type RegisterSectionProps = {
  /** Categories the visitor selected above, shown as read-only chips. */
  categories: string[];
  /** Markets the visitor selected above; the first one pre-fills the form. */
  markets: string[];
};

const REQUIRED_FIELDS = ["name", "company", "email"] as const;
type RequiredField = (typeof REQUIRED_FIELDS)[number];

const INPUT_CLASS =
  "w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-[11px] text-base font-normal tracking-wide text-white outline-none transition-colors duration-200 placeholder:text-white/20 focus:border-red-500";

const LABEL_CLASS =
  "mb-[7px] block text-xs font-medium uppercase tracking-[0.16em] text-white/50";

function Chips({ items, emptyText }: { items: string[]; emptyText: string }) {
  if (items.length === 0) {
    return (
      <span className="self-center text-base text-white/20">{emptyText}</span>
    );
  }
  return (
    <>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-red-500/35 bg-red-500/25 px-2.5 py-[3px] text-base font-normal tracking-wide text-white/80"
        >
          {item}
        </span>
      ))}
    </>
  );
}

// Registration form plus live summaries of the categories/markets picked
// above. On a valid submit the form is replaced by a confirmation message.
export default function RegisterSection({
  categories,
  markets,
}: RegisterSectionProps) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    notes: "",
  });
  const [invalid, setInvalid] = useState<Set<RequiredField>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  // Mirror the reference behavior: picking markets pre-fills the primary
  // market with the first selection.
  const firstMarket = markets[0];
  useEffect(() => {
    if (firstMarket) {
      setForm((prev) => ({ ...prev, country: firstMarket }));
    }
  }, [firstMarket]);

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const missing = new Set(
      REQUIRED_FIELDS.filter((field) => !form[field].trim()),
    );
    if (missing.size > 0) {
      setInvalid(missing);
      window.setTimeout(() => setInvalid(new Set()), 500);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="register" className="bg-foreground py-20">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <SectionHeading
          variant="dark"
          eyebrow="Register"
          title={
            <>
              Ready to become a Qmax{" "}
              <span className="text-red-500">supplier?</span>
            </>
          }
          subtitle="Our procurement team reviews all profiles and responds within 5 business days."
        />

        {submitted ? (
          <div
            role="alert"
            aria-live="polite"
            className="px-5 py-[52px] text-center"
          >
            <span className="mb-4 block text-5xl">✅</span>
            <h3 className="mb-3 text-3xl font-light tracking-wide text-white">
              Profile Received
            </h3>
            <p className="mx-auto max-w-[360px] text-center text-base font-normal leading-[1.7] text-white/55">
              Thank you for registering with Qmax Systems. Our procurement team
              will review your profile and reach out within 5 business days.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-[60px]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Selected Categories
              </p>
              <div className="mb-4 flex min-h-[50px] flex-wrap content-start gap-[7px] rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3.5">
                <Chips
                  items={categories}
                  emptyText="Select categories above to see them here."
                />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Selected Markets
              </p>
              <div className="mb-4 flex min-h-[50px] flex-wrap content-start gap-[7px] rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3.5">
                <Chips
                  items={markets}
                  emptyText="Select markets above to see them here."
                />
              </div>

              <p className="mt-1 text-left text-base font-normal leading-[1.65] tracking-wide text-white/55">
                Scroll up to browse open categories and mark your target
                markets. Selections appear here automatically and pre-fill the
                form.
              </p>
            </div>

            <form
              noValidate
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <div>
                <label className={LABEL_CLASS} htmlFor="f-name">
                  Full Name *
                </label>
                <input
                  id="f-name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  className={cn(
                    INPUT_CLASS,
                    invalid.has("name") && "animate-shake !border-red-500",
                  )}
                />
              </div>
              <div>
                <label className={LABEL_CLASS} htmlFor="f-company">
                  Company Name *
                </label>
                <input
                  id="f-company"
                  type="text"
                  placeholder="Acme Electronics Co."
                  value={form.company}
                  onChange={(e) => update("company")(e.target.value)}
                  className={cn(
                    INPUT_CLASS,
                    invalid.has("company") && "animate-shake !border-red-500",
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={LABEL_CLASS} htmlFor="f-email">
                  Business Email *
                </label>
                <input
                  id="f-email"
                  type="email"
                  placeholder="jane@acme.com"
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  className={cn(
                    INPUT_CLASS,
                    invalid.has("email") && "animate-shake !border-red-500",
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={LABEL_CLASS} htmlFor="f-country">
                  Primary Market
                </label>
                <select
                  id="f-country"
                  value={form.country}
                  onChange={(e) => update("country")(e.target.value)}
                  className={cn(INPUT_CLASS, "[&>option]:bg-neutral-900")}
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  {SUPPLIER_COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={LABEL_CLASS} htmlFor="f-note">
                  Additional Notes
                </label>
                <input
                  id="f-note"
                  type="text"
                  placeholder="Certifications, lead times, production capacity…"
                  value={form.notes}
                  onChange={(e) => update("notes")(e.target.value)}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-500 py-3.5 text-xs font-medium uppercase tracking-[0.13em] text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:bg-red-600 hover:shadow-[0_6px_20px_rgba(243,49,23,0.35)]"
                >
                  Submit Supplier Profile
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
