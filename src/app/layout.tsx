import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FooterWrapper from "@/components/FooterWrapper";
import ContactUsButtonWrapper from "@/components/ContactUsButtonWrapper";
import { Navigation } from "@/components/navigation";
import ScrollToTop from "@/components/ScrollToTop";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <ReactLenis root> */}
      <body className="antialiased">
        <ScrollToTop />
        <Navigation />
        {children}
        <FooterWrapper />
        <ContactUsButtonWrapper />
        <div
          data-budge={JSON.stringify({
            slides: [
              {
                label: "max-width",
                property: "max-width",
                min: 480,
                max: 800,
                value: 648,
                original: 640,
                unit: "px",
              },
              {
                label: "padding-right",
                property: "padding-right",
                min: 0,
                max: 48,
                value: 0,
                original: 0,
                unit: "px",
              },
              {
                label: "min-width",
                property: "min-width",
                min: 0,
                max: 800,
                value: 0,
                original: 0,
                unit: "px",
              },
            ],
          })}
          hidden
        />
        <Script
          src="https://skills-pearl.vercel.app/budge.iife.js"
          strategy="afterInteractive"
        />
      </body>
      {/* </ReactLenis> */}
    </html>
  );
}
