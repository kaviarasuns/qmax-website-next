import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Rugged Android Digital Signage Player | Case Study",
  description:
    "Full product development case study — rugged Android digital signage player from concept to volume production.",
};

export default function CaseStudyV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={robotoMono.variable}>{children}</div>;
}
