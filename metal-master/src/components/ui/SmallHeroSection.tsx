"use client";

import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
}

export default function SmallHeroSection({
  title,
  description,
  imageSrc = "/hero-backgrounds/welding-workshop.jpg" // Domyślne zdjęcie tła
}: HeroSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Fallback image jeśli podany obraz nie istnieje
  const fallbackImage = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000";
  
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 w-full h-full scale-105">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-75 transform transition-transform duration-10000 animate-slow-zoom"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
        
        {/* Overlay with animated gradient */}
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDark 
            ? "from-black/80 via-black/60 to-industrialGray/95" 
            : "from-black/70 via-black/50 to-industrialLight/95"
        }`}></div>
        
        {/* Animated welding sparks overlay */}
        <div className="absolute inset-0 bg-[url('/sparks-overlay.png')] bg-repeat-y opacity-10 animate-sparkle pointer-events-none"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-1 rounded-full text-sm font-medium bg-weldingRed/20 text-weldingRed backdrop-blur-sm">
                KRISTAL-SPAW
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold font-oswald text-white mb-6 relative inline-block tracking-tight">
              <span className="inline-block relative">
                {title}
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform -skew-x-12"></span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 font-roboto max-w-2xl mx-auto px-6 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t ${
        isDark 
          ? "from-industrialGray to-transparent" 
          : "from-industrialLight to-transparent"
      }`}></div>
    </section>
  );
}
