import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
    <html lang="en">
      <body
        className={`${roboto.variable} font-roboto antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen flex flex-col justify-center items-center p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
