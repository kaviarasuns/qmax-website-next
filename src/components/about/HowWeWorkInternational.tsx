'use client';

import { Globe, KanbanSquare, ShieldCheck, MessageSquare } from 'lucide-react';

export default function HowWeWorkInternational() {
  const cards = [
    {
      title: 'Time Zone Coverage & Overlap',
      icon: Globe,
      body: 'Our Austin, TX office gives US clients full same-day overlap, EU/UK clients 6–9 hours of live overlap, and full business-day handoff to APAC. With teams in both the US and India, we run a follow-the-sun model — engineering progress continues 20+ hours a day. Your US-based project lead handles all client-facing communication during your local business hours, so you never wait overnight for an answer.',
    },
    {
      title: 'Project Management & Transparency',
      icon: KanbanSquare,
      body: 'We run every engagement on Jira and Confluence with client access to live dashboards, Gantt charts, burn-down charts, and milestone trackers. Cadence: weekly standups via Zoom or Microsoft Teams, bi-weekly sprint reviews with working demos, and monthly steering-committee reviews. Every client gets a dedicated Program Manager as a single point of contact — no ticket queues, no chasing.',
    },
    {
      title: 'IP Protection & Confidentiality',
      icon: ShieldCheck,
      body: 'Mutual NDAs are signed before any technical discussion begins. All source code, schematics, firmware, and design files remain the client\'s exclusive IP — assigned in writing in every SOW. Secure development environments with role-based access, encrypted private repositories on GitHub, GitLab, or Bitbucket, and VPN-only access to client networks. Processes aligned with ISO 9001 and ISO 27001. Background-verified engineers and physical access controls at our development centers.',
    },
    {
      title: 'Communication & Reporting Cadence',
      icon: MessageSquare,
      body: 'A dedicated Slack or Microsoft Teams channel per client for real-time conversation. Weekly written status reports covering progress, risks, blockers, and next steps. Bi-weekly working demos of hardware and firmware. Monthly executive summaries with KPIs and budget tracking. Tool-agnostic — we work in your stack: Slack, Teams, Zoom, Google Meet, Jira, Confluence, Asana, Trello, GitHub, GitLab, and Bitbucket.',
    },
  ];

  const badges = [
    'Mutual NDA Standard',
    'ISO 9001 & 27001 Aligned',
    'Dedicated US Liaison',
    '20+ Hour Coverage',
    'Client-Owned IP',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading with Red Underline */}
        <div className="mb-12 text-center">
          <h2 className="mb-2">
            How We Work With 
            <span className="text-[#EF3E42]">International Clients</span>
          </h2>
        </div>

        {/* Intro Paragraph */}
        <p className="text-lg mb-12 max-w-3xl leading-relaxed mx-auto text-center text-muted-foreground">
          Qmax is built for global collaboration. From our US offices in Austin to our engineering centers in Chennai, we operate as a single team across time zones — combining American client-side responsiveness with deep Indian engineering bench strength. Here is exactly how we work with clients in the US, EU, UK, Asia-Pacific, and beyond.
        </p>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0">
                    <Icon className="w-8 h-8 text-[#EF3E42]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl">{card.title}</h3>
                </div>

                {/* Card Body */}
                <p className="leading-relaxed text-sm text-muted-foreground">{card.body}</p>
              </div>
            );
          })}
        </div>

        {/* Badge Row */}
        <div className="flex flex-wrap gap-3 justify-center">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#FEF3F3] border border-[#EF3E42] rounded-md text-sm font-medium text-[#EF3E42] transition-colors duration-200 hover:bg-[#EF3E42] hover:text-white"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
