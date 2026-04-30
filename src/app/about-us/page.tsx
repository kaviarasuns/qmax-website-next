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
};

const teamMembers: TeamMember[] = [
  {
    name: "Saravanabhavan Chandrasekar",
    role: "CEO",
    experience: "38+ Years of Experience",
    bio: "Saravanabhavan Chandrasekar is the founder and CEO of Qmax Systems and an electronics engineer with over 38 years of experience in hardware product development and electronic system design. His expertise spans high-speed digital systems, RF and microwave electronics, embedded platforms, and complex PCB design. He leads technology strategy, engineering direction, and global customer engagement for advanced product development programs.",
    image: "/about-us/image2.jpg",
  },
  {
    name: "Saravanaperumal Annamalai",
    role: "VP - SWE Engineering",
    experience: "26+ Years of Experience",
    bio: "Saravanaperumal Annamalai leads the software engineering organization at Qmax Systems. With over 26 years of experience, he specializes in embedded software development, system architecture, and large-scale engineering program management. He oversees firmware development, software architecture design, and system integration across complex hardware platforms.",
    image: "/about-us/image4.jpg",
  },
  {
    name: "Muhammed Asil",
    role: "VP - Business Development",
    experience: "20+ Years of Experience",
    bio: "Muhammed Asil leads business development initiatives at Qmax Systems while contributing his electrical engineering expertise to customer programs. With over 20 years of experience, he works closely with global clients to understand product requirements and coordinate engineering execution from concept through delivery.",
    image: "/about-us/image3.jpg",
  },
  {
    name: "Vigneshwaran Singaravel",
    role: "Senior Engineering Manager",
    experience: "20+ Years of Experience",
    bio: "Vigneshwaran Singaravel leads engineering teams working on embedded systems and hardware development projects. With more than 20 years of experience, he specializes in embedded platforms, electronics system design, and engineering project management, ensuring efficient execution and delivery of complex embedded electronics systems.",
    image: "/about-us/image5.jpg",
  },
  {
    name: "Sangeetha S",
    role: "Director - Finance",
    experience: "28+ Years of Experience",
    bio: "Sangeetha oversees finance and corporate operations at Qmax Systems. With over 28 years of experience in financial management and administration, she manages accounting, financial planning, HR operations, and organizational administration while ensuring strong financial governance and efficient internal operations.",
    image: "/about-us/image1.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-24 pb-16">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
            Meet our team
          </p> */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Leadership <span className="text-red-500">Team</span>
          </h1>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-500" />
          {/* <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
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
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-md outline outline-1 outline-slate-200 transition-all duration-300 group-hover:outline-red-300 group-hover:shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="96px"
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
                  {/* <div className={`mt-3 flex ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                      {member.experience}
                    </span>
                  </div> */}
                </div>
              </div>

              <div className="md:w-3/5 lg:w-2/3">
                <p className="text-[15px] leading-7 text-slate-700">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
