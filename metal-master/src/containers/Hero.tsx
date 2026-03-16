"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import { FaArrowRight, FaShieldAlt, FaTools, FaCertificate } from "react-icons/fa";

export default function Hero() {
  const { theme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : true;
  
  return (
    <section className={`relative w-full min-h-screen flex items-center justify-center m-0 pt-16 pb-16 md:pt-0 md:pb-0 p-0 overflow-hidden ${
      isDark ? "bg-industrialGray" : "bg-industrialLight"
    }`}>
      {/* Background with parallax effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/weldingHero.jpg"
            alt="Profesjonalne spawalnictwo - KRISTAL-SPAW"
            fill
            priority
            sizes="100vw"
            className="object-cover w-full h-full brightness-50 scale-105 transform transition-transform duration-10000 animate-slow-zoom"
          />
          {/* Overlay with animated gradient */}
          <div className={`absolute inset-0 bg-gradient-to-b ${
            isDark 
              ? "from-black/80 via-black/70 to-industrialGray/95" 
              : "from-black/70 via-black/60 to-industrialLight/90"
          }`}></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        
        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold font-oswald mb-4 tracking-tight text-white leading-tight">
            <span className="inline-block relative">
              Mistrzostwo
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></span>
            </span>
            {" "}
            <span className="text-weldingRed">w Metalu</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-roboto text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Profesjonalne konstrukcje metalowe, bramy i ogrodzenia
            <span className="block mt-2 text-white font-medium">od 2005 roku</span>
          </p>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-16">
          <Link href="/galeria" className="group">
            <div className="relative inline-flex items-center gap-2 bg-weldingRed text-white px-8 py-4 text-lg font-roboto font-semibold 
                rounded-lg transform hover:-translate-y-1 hover:shadow-lg hover:shadow-weldingRed/50 
                transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Zobacz nasze realizacje</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-ctaOrange to-weldingRed opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Link>

          <Link href="/kontakt" className="group">
            <div className="relative inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/80 px-8 py-4 text-lg font-roboto font-semibold 
                rounded-lg transform hover:-translate-y-1 hover:border-ctaOrange hover:text-ctaOrange
                transition-all duration-300">
              <span>Bezpłatna wycena</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>
        
        {/* Feature badges */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 mt-4 max-w-4xl w-full px-4 md:px-0 mb-8 md:mb-0">
          {[
            { icon: FaShieldAlt, text: "Gwarancja jakości" },
            { icon: FaTools, text: "Profesjonalny sprzęt" },
            { icon: FaCertificate, text: "Certyfikowani spawacze" }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-sm ${
                isDark ? 'bg-gray-900/30' : 'bg-gray-800/30'
              }`}
            >
              <div className="p-2 rounded-full bg-weldingRed/20">
                <feature.icon className="text-weldingRed" />
              </div>
              <span className="text-white font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t ${
        isDark 
          ? "from-industrialGray to-transparent" 
          : "from-industrialLight to-transparent"
      }`}></div>
      

    </section>
  );
}
