import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Syne, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { SmoothScroller } from "@/components/ui/SmoothScroller";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CookieConsent } from "@/components/ui/CookieConsent";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

import Script from "next/script";

export const metadata: Metadata = {
  title: "The 100 Dinar Company | Premium Websites in Bahrain",
  description: "We build fast, beautiful, conversion-focused websites for businesses everywhere — starting at just 100 BHD.",
  openGraph: {
    title: "The 100 Dinar Company",
    description: "Fast, beautiful, conversion-focused websites for businesses everywhere — starting at just 100 BHD.",
    url: "https://100dinar.com",
    siteName: "The 100 Dinar Company",
    images: [
      {
        url: "https://100dinar.com/og-image.webp", // Mock URL
        width: 1200,
        height: 630,
        alt: "The 100 Dinar Company Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 100 Dinar Company",
    description: "Premium Websites starting at 100 BHD.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${cormorant.variable} ${syne.variable} ${greatVibes.variable} antialiased font-sans`}
      >
        {/* Placeholder for Google Analytics. Set your GA ID here */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <SmoothScroller>
          <CustomCursor />
          <Navbar />

          {children}
          <Footer />
          <FloatingWhatsApp />
          <CookieConsent />
        </SmoothScroller>
      </body>
    </html>
  );
}
