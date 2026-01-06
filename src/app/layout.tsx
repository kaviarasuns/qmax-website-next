import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterV2 from "@/components/footer-v2";
import ContactUsButtonWrapper from "@/components/ContactUsButtonWrapper";
import { ReactLenis } from "@/utils/lenis";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navigation />
          {children}
          <FooterV2 />
          <ContactUsButtonWrapper />
        </body>
      </ReactLenis>
    </html>
  );
}
