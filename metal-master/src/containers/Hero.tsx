"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className={`relative w-full h-screen flex items-center justify-center m-0 p-0 ${
      isDark ? "bg-industrialGray" : "bg-industrialLight"
    }`}>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/weldingHero.jpg"
          alt="Welding Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full brightness-50"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDark 
            ? "from-black/70 to-industrialGray/90" 
            : "from-black/60 to-industrialLight/80"
        }`}></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-5xl w-full px-4">
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-7xl font-bold font-oswald mb-2 relative z-10">
            <span className="text-white">Mistrzostwo</span>{" "}
            <span className="text-weldingRed">w Metalu</span>
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-ctaOrange transform -skew-x-12"></div>
        </div>
        <p className="mt-6 text-xl md:text-2xl font-roboto text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Profesjonalne bramy, ogrodzenia i dekoracje od 2005 roku
        </p>
        <div className="mt-10 space-x-6">
          <Link href="/galeria" legacyBehavior>
            <a
              className="inline-block bg-weldingRed text-white px-8 py-4 text-lg font-roboto font-semibold 
                 rounded transform hover:-translate-y-1 hover:shadow-lg hover:shadow-weldingRed/50 
                 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Zobacz nasze realizacje</span>
              <div className="absolute inset-0 bg-ctaOrange transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </Link>

          <Link href="/kontakt" legacyBehavior>
            <a
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 text-lg font-roboto font-semibold 
                 rounded transform hover:-translate-y-1 hover:border-ctaOrange hover:text-ctaOrange
                 transition-all duration-300"
            >
              Kontakt
            </a>
          </Link>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t ${
        isDark 
          ? "from-industrialGray to-transparent" 
          : "from-industrialLight to-transparent"
      }`}></div>
    </section>
  );
}
