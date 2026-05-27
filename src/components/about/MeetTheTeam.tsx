import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | QMax Systems",
  description:
    "Learn more about QMax Systems, our mission, and our engineering expertise.",
};

type TeamMember = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Saravanabhavan Chandrasekar",
    role: "CEO",
    experience: "38+ Years of Experience",
    bio: "Saravanabhavan Chandrasekar is the founder and CEO of Qmax Systems and an electronics engineer with over 38 years of experience in hardware product development and electronic system design. His expertise spans high-speed digital systems, RF and microwave electronics, embedded platforms, and complex PCB design. He leads technology strategy, engineering direction, and global customer engagement for advanced product development programs.",
    image: "/about-us/image2.jpg",
    linkedin: "https://www.linkedin.com/in/thepcbdesigner/",
  },
  {
    name: "Saravanaperumal Annamalai",
    role: "VP - SWE Engineering",
    experience: "26+ Years of Experience",
    bio: "Saravanaperumal Annamalai leads the software engineering organization at Qmax Systems. With over 26 years of experience, he specializes in embedded software development, system architecture, and large-scale engineering program management. He oversees firmware development, software architecture design, and system integration across complex hardware platforms.",
    image: "/about-us/image4.jpg",
    linkedin: "https://www.linkedin.com/in/sp-qmax/",
  },
  {
    name: "Muhammed Asil",
    role: "VP - Business Development",
    experience: "20+ Years of Experience",
    bio: "Muhammed Asil leads business development initiatives at Qmax Systems while contributing his electrical engineering expertise to customer programs. With over 20 years of experience, he works closely with global clients to understand product requirements and coordinate engineering execution from concept through delivery.",
    image: "/about-us/image3.jpg",
    linkedin: "https://www.linkedin.com/in/nmuhammedasil/",
  },
  {
    name: "Vigneshwaran Singaravel",
    role: "Senior Engineering Manager",
    experience: "20+ Years of Experience",
    bio: "Vigneshwaran Singaravel leads engineering teams working on embedded systems and hardware development projects. With more than 20 years of experience, he specializes in embedded platforms, electronics system design, and engineering project management, ensuring efficient execution and delivery of complex embedded electronics systems.",
    image: "/about-us/image5.jpg",
    linkedin: "https://www.linkedin.com/in/vigneshwaran-singaravel-a1996b88/",
  },
  {
    name: "Sangeetha S",
    role: "Director - Finance",
    experience: "28+ Years of Experience",
    bio: "Sangeetha oversees finance and corporate operations at Qmax Systems. With over 28 years of experience in financial management and administration, she manages accounting, financial planning, HR operations, and organizational administration while ensuring strong financial governance and efficient internal operations.",
    image: "/about-us/image1.jpg",
    linkedin: "https://www.linkedin.com/in/sangeetha-s-0a1aa535a/",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-left">
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            Meet our team
          </p> */}
          <h1 className="text-slate-900 sm:text-5xl">
            Our Leadership <span className="text-red-500">Team</span>
          </h1>
          {/* <div className="mt-5 h-1 w-16 rounded-full bg-red-500" /> */}
          {/* <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            Decades of combined expertise in hardware, embedded systems, and
            engineering execution — driving QMax Systems forward.
          </p> */}
        </header>

        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200/70">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              aria-labelledby={`member-${index}`}
              className={`group p-8 md:p-10 min-h-[220px] transition-colors duration-300 hover:bg-red-50/30 flex flex-col md:items-center gap-6 ${index % 2 === 0 ? "md:flex-row bg-white" : "md:flex-row-reverse bg-slate-50"
                }`}
            >
              <div
                className={`flex items-center gap-5 md:w-2/5 lg:w-1/3 flex-shrink-0 ${index % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
                  }`}
              >
                <div className="relative h-28 w-28 md:h-32 md:w-32 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-md outline outline-1 outline-slate-200 transition-all duration-300 group-hover:outline-red-300 group-hover:shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 128px, 112px"
                  />
                </div>

                <div className="min-w-0">
                  <h2
                    id={`member-${index}`}
                    className="text-lg font-bold leading-tight text-slate-900"
                  >
                    {member.name}
                  </h2>
                  <p className={`mt-1 text-sm font-semibold leading-5 text-red-500 ${index % 2 !== 0 ? "md:text-right" : ""}`}>
                    {member.role}
                  </p>
                  <div className={`mt-3 flex ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#0A66C2] px-3 py-1.5 text-xs font-medium text-white shadow-sm ring-1 ring-inset ring-[#084d92]/40 transition-all duration-200 hover:bg-[#084d92] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-3.5 w-3.5 fill-current"
                      >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 lg:w-2/3">
                <p className="text-[15px] leading-7 text-muted-foreground">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
