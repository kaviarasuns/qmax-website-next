import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import FooterV2 from "@/components/footer-v2";
import ContactUsButtonWrapper from "@/components/ContactUsButtonWrapper";
import { ReactLenis } from "@/utils/lenis";
import { Navigation } from "@/components/navigation";
import ScrollToTop from "@/components/ScrollToTop";


const readableFont = Atkinson_Hyperlegible({
  variable: "--font-readable",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QMax Systems",
  description:
    "Electronics Engineering Services | Embedded Systems | PCB Design",
  // Force favicon reload by adding cache-busting query param
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReactLenis root>
        <body className={`${readableFont.variable} antialiased`}>
          <ScrollToTop />
          <Navigation />
          {children}
          <FooterV2 />
          <ContactUsButtonWrapper />
        </body>
      </ReactLenis>
    </html>
  );
}
