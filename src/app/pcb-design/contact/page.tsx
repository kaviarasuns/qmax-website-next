import type { Metadata } from "next";
import ServicesContactHero from "../../../components/ServicesContactHero";

export const metadata: Metadata = {
  title: "Interested in Hardware Design? | Qmax Systems",
  description:
    "Get in touch with Qmax Systems for hardware design and development services. Tell us about your project and we'll get back within 24 hours.",
};

const STATS = [
  {
    num: "25+",
    label: "Years in Business",
    desc: "Delivering electronics engineering and R&D services since 1997.",
  },
  {
    num: "500+",
    label: "Completed Projects",
    desc: "Across embedded systems, PCB design, and hardware development.",
  },
  {
    num: "5+",
    label: "Industries Served",
    desc: "Industrial, communication, medical, automotive, and high-performance computing.",
  },
  // {
  //   num: "100%",
  //   label: "Customer Satisfaction",
  //   desc: "Trusted long-term engineering partner with proven repeat-client engagements.",
  // },
];

export default function PCBServicesContactPage() {
  return (
    <ServicesContactHero
      heading={{
        line1: "Interested in PCB Design?",
        line2: "Let's Talk!",
      }}
      subheading="To learn more about how Qmax can help you, contact us. We'd be happy to take on the challenge!"
      stats={STATS}
      backgroundImage="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=2000&q=80"
      apiEndpoint="http://localhost:8080/api/email/contact"
    />
  );
}
