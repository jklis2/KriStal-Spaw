import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import dynamic from "next/dynamic";
import CookieBanner from "@/components/ui/CookieBanner";
//import Clarity from "@/components/Clarity";
//import Analytics from "@/components/Analytics";

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
  title: "KriStal-Spaw",
  description: "Profesjonalne Spawalnictwo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${oswald.variable} font-roboto antialiased bg-background text-foreground`}
      >
        {/* <Clarity /> */}
        {/* <Analytics /> */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
