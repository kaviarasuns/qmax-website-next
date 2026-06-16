"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const ITEMS = [
  {
    title: "Time Zone Coverage & Overlap",
    body: "Our Dallas, TX office gives US clients full same-day overlap, EU/UK clients 6–9 hours of live overlap, and full business-day handoff to APAC. With teams in both the US and India, we run a follow-the-sun model — engineering progress continues 20+ hours a day. Your US-based project lead handles all client-facing communication during your local business hours, so you never wait overnight for an answer.",
  },
  {
    title: "Project Management & Transparency",
    body: "We run every engagement on Jira and Confluence with client access to live dashboards, KPIs, and budget tracking. Tool-agnostic — we work in your stack: Slack, Teams, Zoom, Google Meet, Jira, Confluence, Asana, Trello, GitHub, GitLab, and Bitbucket.",
  },
  {
    title: "IP Protection & Confidentiality",
    body: "Mutual NDAs are signed before any technical discussion begins. All source code, schematics, firmware, and design files remain the client's exclusive IP — assigned in writing in every SOW. Secure development environments with role-based access, encrypted private repositories on GitHub, GitLab, or Bitbucket, and VPN-only access to client networks. Processes aligned with ISO 9001 and ISO 27001, background-verified engineers, and physical access controls at our development centers.",
  },
  {
    title: "Communication & Reporting Cadence",
    body: "A dedicated Slack or Microsoft Teams channel per client for real-time conversation. Weekly written status reports covering progress, risks, blockers, and next steps. Bi-weekly working demos of hardware and firmware, and monthly executive steering-committee reviews. Every client gets a dedicated Program Manager as a single point of contact — no ticket queues, no chasing.",
  },
];

const BADGES = [
  "Mutual NDA Standard",
  "ISO 9001 & 27001 Aligned",
  "Dedicated US Liaison",
  "20+ Hour Coverage",
  "Client-Owned IP",
];

export default function HowWeWorkInternationalV2() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#09090B] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute -right-[120px] -top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.26),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-white md:text-5xl">
            How We Work With{" "}
            <span className="text-red-500">International Clients</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Qmax is built for global collaboration. From our US office in Dallas
            to our engineering center in Chennai, we operate as a single team
            across time zones — combining American client-side responsiveness
            with deep Indian engineering bench strength.
          </p>
        </div>

        <div className="mx-auto max-w-[920px]">
          {ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.title}
                className="border-b border-white/[0.12] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="text-lg font-bold text-white md:text-[22px]">
                    {item.title}
                  </span>
                  <span
                    className={`grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border-[1.5px] text-[22px] leading-none transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-red-500 bg-red-500 text-white"
                        : "border-white/30 bg-transparent text-white/85"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[800px] pb-7 text-base leading-relaxed text-white/[0.74]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-md border border-white/[0.18] bg-white/[0.04] px-[18px] py-2.5 text-[13.5px] font-semibold text-white/90"
            >
              <Check size={15} className="shrink-0 text-red-500" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
