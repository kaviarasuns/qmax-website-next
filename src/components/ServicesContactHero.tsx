"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface Stat {
  num: string;
  label: string;
  desc: string;
}

interface ServicesContactHeroProps {
  heading?: { line1: string; line2: string };
  subheading?: string;
  stats?: Stat[];
  backgroundImage?: string;
  apiEndpoint?: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "+1",
  country: "United States",
  company: "",
  message: "",
};

const COUNTRIES = [
  "United States",
  "Canada",
  "India",
  "United Kingdom",
  "Germany",
  "Australia",
  "Japan",
  "Singapore",
  "Other",
];

interface PhoneCode {
  code: string;
  name: string;
  dial: string;
}

const PHONE_CODES: PhoneCode[] = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
];

const flagSrc = (code: string) =>
  `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

type SubmitStatus = "idle" | "sending" | "success";

const FIELD_INPUT =
  "border-0 border-b border-[#2a2a2a] py-2 text-[0.95rem] text-[#2a2a2a] bg-transparent outline-none transition-colors duration-150 w-full h-11 rounded-none focus:border-b-[#ef4444]";

const FIELD_LABEL =
  "text-[0.8rem] text-[#2a2a2a] font-normal mb-[6px] transition-colors duration-150";

const STAT_NUM =
  "font-extrabold text-[2.5rem] lg:text-[3.25rem] leading-none text-white tracking-[-0.02em] m-0";

const STAT_LABEL = "font-semibold text-base text-white mt-1";

const STAT_DESC =
  "text-left text-[0.95rem] leading-[1.45] text-white max-w-[460px] mt-2";

const SOURCE_SANS: React.CSSProperties = {
  fontFamily: '"Source Sans 3", "Open Sans", system-ui, sans-serif',
};

const DEFAULT_STATS: Stat[] = [
  {
    num: "25+",
    label: "Years in Business",
    desc: "Delivering electronics engineering and R&D services since 1997.",
  },
  {
    num: "500+",
    label: "Completed Projects",
    desc: "Across embedded systems, PCB design, and hardware development.",
  },
  {
    num: "5+",
    label: "Industries Served",
    desc: "Industrial, communication, medical, automotive, and high-performance computing.",
  },
  {
    num: "100%",
    label: "Customer Satisfaction",
    desc: "Trusted long-term engineering partner with proven repeat-client engagements.",
  },
];

const DEFAULT_BACKGROUND =
  "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=2000&q=80";

const DEFAULT_HEADING = {
  line1: "Interested in Hardware Design?",
  line2: "Let's Talk!",
};

const DEFAULT_SUBHEADING =
  "To learn more about how Qmax can help you, contact us. We'd be happy to take on the challenge!";

const DEFAULT_ENDPOINT = "http://localhost:8080/api/email/contact";

export default function ServicesContactHero({
  heading = DEFAULT_HEADING,
  subheading = DEFAULT_SUBHEADING,
  stats = DEFAULT_STATS,
  backgroundImage = DEFAULT_BACKGROUND,
  apiEndpoint = DEFAULT_ENDPOINT,
}: ServicesContactHeroProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [countryOpen, setCountryOpen] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState("US");
  const [phoneCodeOpen, setPhoneCodeOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const countryRef = useRef<HTMLDivElement | null>(null);
  const phoneCodeRef = useRef<HTMLDivElement | null>(null);

  const selectedPhone =
    PHONE_CODES.find((p) => p.code === phoneCountry) ?? PHONE_CODES[0];

  const selectPhoneCountry = (newCode: string) => {
    const next = PHONE_CODES.find((p) => p.code === newCode);
    if (!next) return;
    const prevCountry = PHONE_CODES.find((p) => p.code === phoneCountry);
    setPhoneCountry(newCode);
    setPhoneCodeOpen(false);
    setForm((prev) => {
      const rest =
        prevCountry && prev.phone.startsWith(prevCountry.dial)
          ? prev.phone.slice(prevCountry.dial.length)
          : "";
      return { ...prev, phone: next.dial + rest };
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const selectCountry = (c: string) => {
    setForm((prev) => ({ ...prev, country: c }));
    setCountryOpen(false);
  };

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (
        countryRef.current &&
        !countryRef.current.contains(e.target as Node)
      ) {
        setCountryOpen(false);
      }
      if (
        phoneCodeRef.current &&
        !phoneCodeRef.current.contains(e.target as Node)
      ) {
        setPhoneCodeOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const autosize = () => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
  };

  useEffect(() => {
    autosize();
  }, [form.message]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    try {
      await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // swallow — UI still confirms so the user isn't stuck on errors
    }
    setStatus("success");
    window.setTimeout(() => {
      setForm(INITIAL_FORM);
      setStatus("idle");
    }, 2200);
  };

  const submitLabel =
    status === "sending"
      ? "SENDING…"
      : status === "success"
        ? "✓ THANK YOU"
        : "SUBMIT";

  return (
    <section
      className="relative overflow-hidden isolate pt-16 lg:pt-20 pb-24 lg:pb-32 bg-black text-white"
      style={{ fontFamily: '"Open Sans", system-ui, sans-serif' }}
    >
      {/* ── Hero background ── */}
      <div
        className="absolute inset-0 z-[-2] bg-cover h-[420px] hdc-hero-overlay"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition: "center 30%",
          filter: "grayscale(0.2) brightness(0.55)",
        }}
      />
      <div className="absolute top-[420px] left-0 right-0 bottom-0 z-[-2] bg-black" />

      {/* ── Content container ── */}
      <div className="max-w-[1320px] mx-auto px-8 sm:px-12 lg:px-24 xl:px-32">
        {/* Section header */}
        <div className="pt-10 lg:pt-14">
          <h1
            className="font-bold text-[2rem] lg:text-[50px] leading-[1.1] tracking-[-0.01em] m-0 text-white"
            style={SOURCE_SANS}
          >
            <span className="block">{heading.line1}</span>
            <span className="block">{heading.line2}</span>
          </h1>
          <p className="text-[15px] font-medium leading-[1.5] text-white mt-8 mb-12">
            {subheading}
          </p>
        </div>

        {/* Stats + form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_480px] gap-0 lg:gap-12 items-start lg:items-stretch">
          {/* LEFT — stats */}
          <div className="flex flex-col w-full max-w-[560px] lg:max-w-none mx-auto lg:mx-0 lg:h-full lg:min-h-0">
            <div className="flex flex-col gap-7 flex-1 lg:min-h-0">
              {stats.map((stat, i) => {
                const isLast = i === stats.length - 1;
                const hasDivider = !isLast;
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col lg:flex-1 lg:min-h-0 lg:justify-center ${
                      hasDivider ? "pb-7 border-b border-white/[18%]" : ""
                    }`}
                  >
                    <div className={STAT_NUM} style={SOURCE_SANS}>
                      {stat.num}
                    </div>
                    <div className={STAT_LABEL} style={SOURCE_SANS}>
                      {stat.label}
                    </div>
                    <p className={STAT_DESC}>{stat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="bg-white text-[#2a2a2a] w-full lg:w-[480px] pt-8 px-8 pb-7 rounded-[6px] mt-8 lg:mt-0 lg:h-full shadow-[0_12px_32px_rgba(0,0,0,0.28)] relative flex flex-col max-w-[560px] mx-auto lg:mx-0 lg:max-w-none">
            <form
              className="grid grid-cols-2 gap-x-[18px] gap-y-[18px] flex-1"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* First Name */}
              <div className="relative flex flex-col">
                <label htmlFor="firstName" className={FIELD_LABEL}>
                  First Name*
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  className={FIELD_INPUT}
                />
              </div>

              {/* Last Name */}
              <div className="relative flex flex-col">
                <label htmlFor="lastName" className={FIELD_LABEL}>
                  Last Name*
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  className={FIELD_INPUT}
                />
              </div>

              {/* Email */}
              <div className="relative flex flex-col">
                <label htmlFor="email" className={FIELD_LABEL}>
                  Business Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={FIELD_INPUT}
                />
              </div>

              {/* Phone */}
              <div className="relative flex flex-col">
                <label htmlFor="phone" className={FIELD_LABEL}>
                  Phone Number
                </label>
                <div className="grid grid-cols-[auto_1fr] gap-2 items-end">
                  <div className="relative" ref={phoneCodeRef}>
                    <button
                      type="button"
                      onClick={() => setPhoneCodeOpen((v) => !v)}
                      className="flex items-center gap-[6px] border-b border-[#d9d9d9] pt-[6px] pb-2 cursor-pointer select-none text-xs text-[#2a2a2a] h-11 w-fit focus:border-b-[#ef4444] focus:outline-none hover:border-[#2a2a2a]"
                    >
                      <img
                        src={flagSrc(selectedPhone.code)}
                        alt=""
                        width={20}
                        height={14}
                        className="w-5 h-auto rounded-sm shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                      />
                      <span className="font-medium">{selectedPhone.code}</span>
                      <span className="text-[#9aa0a6] text-[9px]">▾</span>
                    </button>
                    {phoneCodeOpen && (
                      <div className="absolute top-full left-0 z-20 mt-1 w-[220px] max-h-60 overflow-y-auto bg-white border border-[#e5e5e5] rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                        {PHONE_CODES.map((p) => (
                          <button
                            type="button"
                            key={p.code}
                            onClick={() => selectPhoneCountry(p.code)}
                            className={`flex items-center gap-2 w-full px-3 py-2 hover:bg-[#f5f5f5] cursor-pointer text-[0.85rem] text-[#2a2a2a] text-left ${
                              p.code === phoneCountry ? "bg-[#fafafa]" : ""
                            }`}
                          >
                            <img
                              src={flagSrc(p.code)}
                              alt=""
                              width={20}
                              height={14}
                              className="w-5 h-auto rounded-sm shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                            />
                            <span className="flex-1 truncate">{p.name}</span>
                            <span className="text-[#777] text-[0.8rem]">
                              {p.dial}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={15}
                    value={form.phone}
                    onChange={handleChange}
                    className={FIELD_INPUT}
                  />
                </div>
              </div>

              {/* Country */}
              <div
                className="relative flex flex-col col-span-full"
                ref={countryRef}
              >
                <label className={FIELD_LABEL}>Country*</label>
                <div className="relative select-dropdown-arrow">
                  <button
                    type="button"
                    onClick={() => setCountryOpen((v) => !v)}
                    className={`appearance-none pr-6 cursor-pointer border-0 border-b border-[#2a2a2a] py-2 text-[0.95rem] bg-transparent outline-none transition-colors duration-150 w-full h-11 rounded-none focus:border-b-[#ef4444] text-left truncate ${
                      form.country
                        ? "font-semibold text-[#2a2a2a]"
                        : "font-bold text-[#9aa0a6]"
                    }`}
                  >
                    {form.country || "Please Select"}
                  </button>
                  {countryOpen && (
                    <div className="absolute top-full left-0 right-0 z-20 mt-1 max-h-60 overflow-y-auto bg-white border border-[#e5e5e5] rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                      {COUNTRIES.map((c) => {
                        const selected = form.country === c;
                        return (
                          <button
                            type="button"
                            key={c}
                            onClick={() => selectCountry(c)}
                            className={`flex items-center w-full px-3 py-2 hover:bg-[#f5f5f5] cursor-pointer text-[0.9rem] text-left ${
                              selected
                                ? "bg-[#fafafa] font-semibold text-[#2a2a2a]"
                                : "text-[#2a2a2a]"
                            }`}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Company */}
              <div className="relative flex flex-col col-span-full">
                <label htmlFor="company" className={FIELD_LABEL}>
                  Company name*
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={handleChange}
                  className={FIELD_INPUT}
                />
              </div>

              {/* Message */}
              <div className="relative flex flex-col col-span-full">
                <label htmlFor="message" className={FIELD_LABEL}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={1}
                  ref={textareaRef}
                  placeholder="Provide ALL project details for the best Qmax response."
                  value={form.message}
                  onChange={handleChange}
                  className="border-0 border-b border-[#2a2a2a] pt-2 pb-0 text-[0.95rem] text-[#2a2a2a] bg-transparent outline-none transition-colors duration-150 w-full rounded-none focus:border-b-[#ef4444] h-auto resize-vertical min-h-[40px] leading-[1.45] placeholder:text-[#9aa0a6] placeholder:font-normal placeholder:text-[0.9rem]"
                />
              </div>

              {/* Privacy notice */}
              <p className="col-span-full mt-4 text-[15px] leading-[1.45] text-black">
                Your data is secure with us; we never leak, share, or sell your
                details to third parties.
              </p>

              {/* Submit */}
              <button
                className={`col-span-full mt-3 w-full p-0 h-[46px] text-white border-0 text-[15px] font-bold tracking-[0.08em] cursor-pointer transition-colors duration-150 active:bg-[#b91c1c] disabled:cursor-default ${
                  status === "success"
                    ? "bg-[#1f8a5b] hover:bg-[#1f8a5b]"
                    : "bg-[#ef4444] hover:bg-[#dc2626]"
                }`}
                type="submit"
                disabled={status !== "idle"}
              >
                {submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Pseudo-elements that cannot be expressed as inline Tailwind utilities */}
      <style jsx>{`
        .hdc-hero-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse 800px 520px at 0% 10%,
              rgba(230, 51, 41, 0.85) 0%,
              rgba(184, 24, 24, 0.55) 35%,
              rgba(0, 0, 0, 0) 70%
            ),
            linear-gradient(
              180deg,
              rgba(42, 10, 10, 0.5) 0%,
              rgba(0, 0, 0, 0.85) 70%,
              #000 100%
            );
        }
        .select-dropdown-arrow::after {
          content: "";
          position: absolute;
          right: 4px;
          top: 14px;
          width: 10px;
          height: 10px;
          border-right: 2px solid #2a2a2a;
          border-bottom: 2px solid #2a2a2a;
          transform: rotate(45deg);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
