"use client";

import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";

interface HeroSectionProps {
  title: string;
  description: string;
}

export default function SmallHeroSection({
  title,
  description,
}: HeroSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <Image
        src="https://picsum.photos/1920/1080"
        alt={title}
        fill
        className="object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${
        isDark 
          ? "from-black/70 via-black/50 to-industrialGray" 
          : "from-black/60 via-black/40 to-industrialLight"
      }`}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold font-oswald text-white mb-6 relative inline-block">
            {title}
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h1>
          <p className="text-xl text-gray-300 font-roboto max-w-2xl mx-auto px-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
