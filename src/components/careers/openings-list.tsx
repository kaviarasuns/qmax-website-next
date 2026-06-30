"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, ChevronRight, Code2, Cpu } from "lucide-react";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function scrollToOpening(title: string) {
  const id = slugify(title);
  const el = document.getElementById(id);
  if (!el) return;

  const stickyHeader = document.querySelector("header");
  const headerHeight = stickyHeader
    ? stickyHeader.getBoundingClientRect().height
    : 0;
  const top =
    el.getBoundingClientRect().top + window.scrollY - headerHeight - 100;

  window.scrollTo({ top, behavior: "smooth" });

  // Brief highlight flash
  el.classList.add("ring-2", "ring-zinc-400", "ring-offset-2");
  setTimeout(
    () => el.classList.remove("ring-2", "ring-zinc-400", "ring-offset-2"),
    1500,
  );
}

export function OpeningsList() {
  const categories = [
    {
      title: "Engineering Roles",
      roles: [
        "Hardware Design Engineer",
        "Firmware Development Engineer",
        "Embedded Systems Test Engineer",
        "RF Design Engineer",
        "Signal Integrity (SI) Engineer",
        "PCB Designer",
        "PCB Librarian",
        "Mechanical Design Engineer",
        "Industrial Designer",
      ],
      icon: Cpu,
    },
    {
      title: "Software & Web",
      roles: ["Full-Stack Web Developer"],
      icon: Code2,
    },
    {
      title: "Business",
      roles: ["Business Development Executive"],
      icon: Briefcase,
    },
  ];

  const allRoles = categories.flatMap((category) =>
    category.roles.map((role) => ({
      title: role,
      category: category.title,
      icon: category.icon,
      location: "Chennai",
      type: "Full-time",
    })),
  );

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(161,98,7,0.06),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(24,24,27,0.06),_transparent_36%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <Badge className="mb-4 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50">
            {allRoles.length} Open Roles
          </Badge>
          <h2 className="mb-4 text-3xl font-bold  md:text-5xl">
            Current Openings
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Explore full-time opportunities across engineering, software, and
            business teams.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden rounded-2xl border-zinc-200/90 bg-white/90 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-600 sm:text-base">
                <thead className="border-b border-zinc-200 bg-zinc-50/50 text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:text-sm">
                  <tr>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="hidden px-6 py-4 md:table-cell">Location</th>
                    <th className="hidden px-6 py-4 md:table-cell">Type</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {allRoles.map((role, index) => {
                    const Icon = role.icon;
                    return (
                      <tr
                        key={index}
                        onClick={() => scrollToOpening(role.title)}
                        className="group cursor-pointer transition-colors duration-200 hover:bg-zinc-50/80"
                      >
                        <td className="px-6 py-4 font-medium text-zinc-900">
                          {role.title}
                        </td>
                        <td className="px-6 py-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-600 shadow-sm">
                            <Icon className="h-3.5 w-3.5" />
                            {role.category}
                          </div>
                        </td>
                        <td className="hidden px-6 py-4 text-zinc-600 md:table-cell">
                          {role.location}
                        </td>
                        <td className="hidden px-6 py-4 text-zinc-600 md:table-cell">
                          {role.type}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="hidden items-center justify-end text-sm font-medium text-amber-600 opacity-0 transition-opacity group-hover:flex group-hover:opacity-100">
                            View details
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                          <span className="flex items-center justify-end text-sm font-medium text-zinc-400 group-hover:hidden">
                            <ChevronRight className="h-5 w-5" />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
