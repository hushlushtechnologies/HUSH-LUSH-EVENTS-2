 import type { Metadata, Viewport } from "next";
import { Lora, Inter, Julee } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Preloader } from "@/components/layout/Preloader";
import Script from "next/script";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-secondary",
  display: "swap",
});

const julee = Julee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

const siteUrl = "https://www.hushlushevents.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // NOTE: no `alternates.canonical` here anymore — it was previously
  // hardcoded to "/" on every single page, which told Google every URL
  // on the site is a duplicate of the homepage. That's a real SEO bug,
  // not just a placeholder. Canonical URLs now belong on each page's
  // own metadata export (see examples below), where they can point at
  // that page's own actual path.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    default: "Hush Lush Events — Premium Event Planning & Design",
    template: "%s | Hush Lush Events",
  },
  description:
    "Hush Lush Events plans and produces weddings, corporate events, and private celebrations with cinematic design and end-to-end execution.",
  keywords: [
    "event planning Dubai",
    "wedding planner",
    "corporate event production",
    "luxury event design",
  ],
  openGraph: {
    type: "website",
    siteName: "Hush Lush Events",
    title: "Hush Lush Events — Premium Event Planning & Design",
    description:
      "Weddings, corporate events, and private celebrations — designed and produced end to end.",
    url: siteUrl,
    // Replace with a real 1200x630 social-preview image once available
    // — without one, shared links on WhatsApp/Facebook/LinkedIn show
    // no image at all.
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hush Lush Events",
    description:
      "Weddings, corporate events, and private celebrations — designed and produced end to end.",
    images: ["/images/og-default.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#080605",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} ${julee.variable}`}>
      <body className="antialiased">
           {/* <Preloader /> */}
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />

            <Script
          src="//code.tidio.co/nmvquwavffqjr5enihpxm8ebeqw6bmdn.js"
          strategy="lazyOnload"
        />

      </body>
    </html>
  );
}