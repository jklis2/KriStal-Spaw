import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import dynamic from "next/dynamic";
//import Clarity from "@/components/Clarity";
//import Analytics from "@/components/Analytics";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  loading: () => <footer className="min-h-[200px]" />,
});

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||!t){document.documentElement.classList.add('dark')}}catch(e){}})();`;

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
  title: "Metal Master",
  description: "Professional metalworking solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${roboto.variable} ${oswald.variable} font-roboto antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {/* <Clarity /> */}
          {/* <Analytics /> */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
