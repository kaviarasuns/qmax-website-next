import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
};

const MEMBER_CARD_CLASS =
  "flex flex-col rounded-2xl bg-white px-10 pb-9 pt-6 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_32px_rgba(16,24,40,0.10)]";

const SPOTLIGHT_CARD_CLASS =
  "relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl px-10 pb-9 pt-6 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_32px_rgba(16,24,40,0.10)]";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Saravanabhavan Chandrasekar",
    role: "Founder & CEO",
    bio: "An electronics engineer with 38+ years in hardware product development and electronic system design. His expertise spans high-speed digital systems, RF and microwave electronics, embedded platforms, and complex PCB design. He leads technology strategy, engineering direction, and global customer engagement.",
    image: "/about-us/image2.jpg",
    linkedin: "https://www.linkedin.com/in/thepcbdesigner/",
  },
  {
    name: "Saravanaperumal Annamalai",
    role: "VP - Software Engineering",
    bio: "With 26+ years of experience, he specializes in embedded software development, system architecture, and large-scale engineering program management. He oversees firmware development, software architecture design, and system integration across complex hardware platforms.",
    image: "/about-us/image4.jpg",
    linkedin: "https://www.linkedin.com/in/sp-qmax/",
  },
  {
    name: "Muhammed Asil",
    role: "VP - Business Development",
    bio: "Leads business development while contributing his electrical engineering expertise to customer programs. With 20+ years of experience, he works closely with global clients to understand product requirements and coordinate engineering execution from concept through delivery.",
    image: "/about-us/image3.jpg",
    linkedin: "https://www.linkedin.com/in/nmuhammedasil/",
  },
  {
    name: "Vigneshwaran Singaravel",
    role: "Senior Engineering Manager",
    bio: "Leads engineering teams working on embedded systems and hardware development projects. With more than 20 years of experience, he specializes in the execution and delivery of complex embedded electronics systems.",
    image: "/about-us/image5.jpg",
    linkedin: "https://www.linkedin.com/in/vigneshwaran-singaravel-a1996b88/",
  },
  {
    name: "Sangeetha S",
    role: "Director - Finance",
    bio: "Oversees finance and corporate operations. With 28+ years of experience in financial management and administration, she manages accounting, financial planning, HR operations, and organizational administration while ensuring strong financial governance.",
    image: "/about-us/image1.jpg",
    linkedin: "https://www.linkedin.com/in/sangeetha-s-0a1aa535a/",
  },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function MeetTheTeamV2() {
  return (
    <section className="border-y border-slate-200 bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-[680px] text-center md:mb-[52px]">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-foreground md:text-5xl">
            Our Leadership <span className="text-red-500">Team</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            A multi-disciplinary leadership team with a combined 130+ years in
            electronics, software, and program delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className={MEMBER_CARD_CLASS}
            >
              <div className="mb-[18px] flex items-center gap-4">
                <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="76px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium leading-tight tracking-wide text-foreground md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-bold text-red-500">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="flex-1 text-base text-foreground">{member.bio}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[18px] inline-flex items-center gap-2 text-sm font-semibold text-[#0A66C2] transition-colors hover:text-[#084d92]"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </article>
          ))}

          <article className={SPOTLIGHT_CARD_CLASS}>
            <Image
              src="https://d1yetprhniwywz.cloudfront.net/v2/about-us/office.png"
              alt="Qmax Systems engineering team at work"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(9,9,11,0.45), rgba(9,9,11,0.72))",
              }}
            />
            <div className="relative z-10 mt-6">
              <h3 className="text-xl font-medium tracking-wide text-white md:text-2xl">
                Join the team
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-white">
                We are always looking for exceptional engineers who want to
                build products that matter. Explore open roles across our US and
                India centers.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                href="/careers"
                className="inline-flex rounded-md bg-red-500 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-red-600"
              >
                View Careers
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
