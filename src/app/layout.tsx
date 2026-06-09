import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FooterWrapper from "@/components/FooterWrapper";
import ContactUsButtonWrapper from "@/components/ContactUsButtonWrapper";
import { Navigation } from "@/components/navigation";
import ScrollToTop from "@/components/ScrollToTop";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  // Resolves relative canonical / Open Graph URLs to absolute ones.
  metadataBase: new URL(siteUrl()),
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
                label: "background-color",
                property: "background-color",
                min: 0,
                max: 360,
                value: 0,
                original: 7,
                unit: "°",
                type: "color",
              },
              {
                label: "border-radius",
                property: "border-radius",
                min: 0,
                max: 50,
                value: 50,
                original: 50,
                unit: "%",
              },
              {
                label: "width",
                property: "width",
                min: 24,
                max: 96,
                value: 48,
                original: 48,
                unit: "px",
              },
              {
                label: "height",
                property: "height",
                min: 24,
                max: 96,
                value: 48,
                original: 48,
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
