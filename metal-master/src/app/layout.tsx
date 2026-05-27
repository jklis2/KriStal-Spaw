import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import dynamic from "next/dynamic";
import CookieBanner from "@/components/ui/CookieBanner";
import Clarity from "@/components/Clarity";
import Analytics from "@/components/Analytics";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  loading: () => <footer className="min-h-[200px]" />,
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "KriStal-Spaw | Profesjonalne usługi spawalnicze i ślusarskie - województwo śląskie i małopolskie",
    template: "%s | KriStal-Spaw",
  },
  description:
    "KriStal-Spaw – profesjonalne usługi spawalnicze i ślusarskie w województwie śląskim i małopolskim. Bramy, ogrodzenia, balustrady i konstrukcje stalowe na wymiar. Ocynkowanie ogniowe, lakierowanie proszkowe, gwarancja jakości.",
  metadataBase: new URL("https://kristal-spaw.pl"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://kristal-spaw.pl",
    siteName: "KriStal-Spaw",
    title: "KriStal-Spaw | Profesjonalne usługi spawalnicze i ślusarskie",
    description:
      "Bramy, ogrodzenia, balustrady i konstrukcje stalowe na wymiar. Ocynkowanie ogniowe, lakierowanie proszkowe, gwarancja jakości. Działamy w województwie śląskim i małopolskim.",
    images: [
      {
        url: "/images/weldingHero.webp",
        width: 1200,
        height: 630,
        alt: "KriStal-Spaw – profesjonalne spawalnictwo i ślusarstwo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KriStal-Spaw | Profesjonalne usługi spawalnicze i ślusarskie",
    description:
      "Bramy, ogrodzenia, balustrady i konstrukcje stalowe na wymiar. Działamy w województwie śląskim i małopolskim.",
    images: ["/images/weldingHero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${roboto.variable} ${oswald.variable} font-roboto antialiased bg-background text-foreground`}
      >
        <Clarity />
        <Analytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
