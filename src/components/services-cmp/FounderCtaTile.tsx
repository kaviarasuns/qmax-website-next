import Image from "next/image";

interface FounderCtaTileProps {
  href?: string;
}

export function FounderCtaTile({
  href = "/hardware-development-services/contact",
}: FounderCtaTileProps) {
  return (
    <a
      className="relative block h-full cursor-pointer overflow-hidden rounded-xl bg-[#0a0a0a] no-underline shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:no-underline hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_32px_rgba(16,24,40,0.10)]"
      href={href}
      aria-label="Questions? Let's Talk! Contact Saravanabhavan, Founder & CEO"
    >
      <Image
        src="/hardware-design/founder_csb.png"
        alt="Questions? Let's Talk! Contact us. Saravanabhavan, Founder & CEO"
        fill
        sizes="(max-width: 900px) 100vw, 600px"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <span className="pointer-events-none absolute left-[22px] top-[18px] z-[2] text-3xl font-bold leading-[1.45] tracking-[0.2px] text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.45)]">
        Questions?
        <br />
        Let&apos;s Talk!
      </span>
      <span className="pointer-events-none absolute bottom-[18px] left-[22px] z-[2] rounded-md bg-white px-[18px] py-2 text-lg font-bold tracking-[0.2px] text-[#0a0a0a] shadow-[0_2px_8px_rgba(0,0,0,0.18)] [text-shadow:none]">
        Contact Us
      </span>
      <span className="pointer-events-none absolute bottom-[18px] right-[22px] z-[2] text-right text-[17px] font-semibold leading-[1.3] tracking-[0.2px] text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.45)]">
        Saravanabhavan
        <br />
        Founder &amp; CEO
      </span>
    </a>
  );
}
