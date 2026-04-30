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
    <main className="min-h-screen bg-slate-50 pt-24 pb-14">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Leadership <span className="text-red-500">Team</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-red-500" />
        </header>

        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-slate-200">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`p-8 md:p-10 min-h-[220px] transition-shadow hover:shadow-sm flex flex-col md:items-center gap-6 ${index % 2 === 0 ? "md:flex-row bg-white" : "md:flex-row-reverse bg-slate-100"
                }`}
            >
              <div
                className={`flex items-center gap-4 md:w-2/5 lg:w-1/3 flex-shrink-0 ${index % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
                  }`}
              >
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-bold leading-tight text-slate-900">
                    {member.name}
                  </h2>
                  <p className={`tracking-wide mt-1 text-sm font-medium leading-5 text-slate-700 ${index % 2 !== 0 ? "md:text-right" : ""}`}>
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="md:w-3/5 lg:w-2/3">
                <p className="text-sm leading-6 text-slate-700">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
