import type { Metadata } from "next";
import { Lora, Inter,Julee  } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
 

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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: "Hush Lush Events — Premium Event Planning & Design",
    template: "%s | Hush Lush Events",
  },
  description:
    "Hush Lush Events plans and produces weddings, corporate events, and private celebrations with cinematic design and end-to-end execution.",
  openGraph: {
    type: "website",
    siteName: "Hush Lush Events",
    title: "Hush Lush Events — Premium Event Planning & Design",
    description:
      "Weddings, corporate events, and private celebrations — designed and produced end to end.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hush Lush Events",
    description:
      "Weddings, corporate events, and private celebrations — designed and produced end to end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} ${julee.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
          <Footer/>
      </body>
    </html>
  );
}
