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
    role: "Founder & CEO | Hardware Systems Architect",
    experience: "38+ Years of Experience",
    bio: "Saravanabhavan Chandrasekar is the founder and CEO of Qmax Systems and an electronics engineer with over 38 years of experience in hardware product development and electronic system design. His expertise spans high-speed digital systems, RF and microwave electronics, embedded platforms, and complex PCB design. He leads technology strategy, engineering direction, and global customer engagement for advanced product development programs.",
    image: "/about-us/image2.jpg",
  },
  {
    name: "Saravanaperumal Annamalai",
    role: "VP - Software Engineering | Software Architecture & Program Management",
    experience: "26+ Years of Experience",
    bio: "Saravanaperumal Annamalai leads the software engineering organization at Qmax Systems. With over 26 years of experience, he specializes in embedded software development, system architecture, and large-scale engineering program management. He oversees firmware development, software architecture design, and system integration across complex hardware platforms.",
    image: "/about-us/image4.jpg",
  },
  {
    name: "Muhammed Asil",
    role: "VP - Business Development | Electrical Engineering & Program Management",
    experience: "20+ Years of Experience",
    bio: "Muhammed Asil leads business development initiatives at Qmax Systems while contributing his electrical engineering expertise to customer programs. With over 20 years of experience, he works closely with global clients to understand product requirements and coordinate engineering execution from concept through delivery.",
    image: "/about-us/image3.jpg",
  },
  {
    name: "Vigneshwaran Singaravel",
    role: "Senior Engineering Manager | Embedded Systems & Project Management",
    experience: "20+ Years of Experience",
    bio: "Vigneshwaran Singaravel leads engineering teams working on embedded systems and hardware development projects. With more than 20 years of experience, he specializes in embedded platforms, electronics system design, and engineering project management, ensuring efficient execution and delivery of complex embedded electronics systems.",
    image: "/about-us/image5.jpg",
  },
  {
    name: "Sangeetha S",
    role: "Director - Finance | Administration, HR & Corporate Operations",
    experience: "28+ Years of Experience",
    bio: "Sangeetha oversees finance and corporate operations at Qmax Systems. With over 28 years of experience in financial management and administration, she manages accounting, financial planning, HR operations, and organizational administration while ensuring strong financial governance and efficient internal operations.",
    image: "/about-us/image1.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-14">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
            About Us
          </h1>
          <div className="space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 max-w-4xl">
            <p>
              Qmax Systems is an Electronics Engineering and R&D Services company based in San Jose, California and having development center in India. Established in 1997, Qmax provides Embedded Systems Design and PCB Design Services.
            </p>
            <p>
              Qmax has a Highly experienced, Multi-disciplinary team which can bring out the best solution for your requirement in the shortest time. Our stringent process and hands-on experience help avoid errors, reduces design costs and ensures faster time to market.
            </p>
          </div>
        </div>

        <header className="rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Qmax Systems
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet The Team
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Leadership across hardware, software, business development, project
            execution, and corporate operations.
          </p>
        </header>

        <div className="mt-5 grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-slate-200">
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
                  <p className="mt-1 text-sm font-medium leading-5 text-slate-700">
                    {member.role}
                  </p>
                  <p className="mt-2 inline-flex rounded-full bg-slate-200/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">
                    {member.experience}
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
