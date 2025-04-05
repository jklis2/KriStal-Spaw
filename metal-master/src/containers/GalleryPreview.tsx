"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function GalleryPreview() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className={`py-24 relative ${isDark ? "bg-industrialGray" : "bg-industrialLight"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Nasze Realizacje
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative w-full h-[600px] group">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-10"></div>
            <Image
              src="https://picsum.photos/600/400?random=1"
              alt="Ogrodzenie przemysłowe"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-oswald bg-weldingRed/80 px-6 py-3 rounded-lg">
                Ogrodzenie przemysłowe
              </span>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-6">
            {[
              { src: "https://picsum.photos/400/300?random=2", alt: "Brama" },
              {
                src: "https://picsum.photos/400/300?random=3",
                alt: "Dekoracja metalowa",
              },
              {
                src: "https://picsum.photos/400/300?random=4",
                alt: "Spawacz przy pracy",
              },
            ].map((img, index) => (
              <div
                key={index}
                className="relative w-full h-[180px] group overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-10"></div>
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-oswald bg-weldingRed/80 px-4 py-2 rounded-lg">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/galeria" legacyBehavior>
            <a
              className="inline-block bg-weldingRed text-white px-8 py-4 text-lg font-roboto font-semibold 
                 rounded transform hover:-translate-y-1 hover:shadow-lg hover:shadow-weldingRed/50 
                 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Zobacz więcej projektów</span>
              <div className="absolute inset-0 bg-ctaOrange transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
