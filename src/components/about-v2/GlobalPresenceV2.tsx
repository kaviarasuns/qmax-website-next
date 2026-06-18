import Image from "next/image";

const OFFICES = [
  {
    country: "United States",
    name: "Qmax Systems LLC",
    address: "539 W Commerce St #7953\nDallas, TX 75208-1953\nUnited States",
    phone: "+1 412 265 2314",
    phoneHref: "tel:+14122652314",
    email: "info@qmaxsys.com",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/about-us/global_ presence_usa.jpg",
  },
  {
    country: "India",
    name: "Qmax Systems India Pvt Ltd",
    address:
      "310/2A, Rukmani Nagar, 4th Street\nPoonamallee, Chennai 600056\nTamil Nadu, India",
    phone: "+91 98402 30903",
    phoneHref: "tel:+919840230903",
    email: "info@qmaxsys.com",
    image: "https://d1yetprhniwywz.cloudfront.net/v2/about-us/qmax_chennai.png",
  },
];

export default function GlobalPresenceV2() {
  return (
    <section id="offices" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-[680px] text-center md:mb-[52px]">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-foreground md:text-5xl">
            Our <span className="text-red-500">Locations</span>
          </h2>
          {/* <p className="mt-4 text-base leading-relaxed text-foreground">
            With offices in Dallas, Texas and Chennai, India, we provide
            around-the-clock engineering support and rapid prototyping
            capabilities to clients worldwide.
          </p> */}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {OFFICES.map((office) => (
            <article
              key={office.country}
              className="group relative min-h-[240px] overflow-hidden rounded-md border border-slate-200 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform,border-color] duration-200 ease-in-out hover:-translate-y-0.5 hover:border-red-500 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_32px_rgba(16,24,40,0.10)]"
            >
              <Image
                src={office.image}
                alt={`${office.name} office`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(9,9,11,0.62), rgba(9,9,11,0.9))",
                }}
              />

              <div className="relative z-10 px-8 py-9">
                <div className="text-xs font-bold uppercase tracking-[0.08em] text-red-500">
                  {office.country}
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-wide text-white md:text-2xl">
                  {office.name}
                </h3>
                <address className="mt-3 whitespace-pre-line text-base not-italic leading-[1.8] text-white/[0.92]">
                  {office.address}
                </address>
                <div className="mt-[18px] flex flex-col gap-1.5 border-t border-white/[0.28] pt-[18px] text-base">
                  <a
                    href={office.phoneHref}
                    className="font-semibold text-white/[0.92] transition-colors hover:text-red-500"
                  >
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="font-semibold text-white/[0.92] transition-colors hover:text-red-500"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
