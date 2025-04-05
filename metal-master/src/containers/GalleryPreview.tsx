"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import { FaArrowRight } from "react-icons/fa";

export default function GalleryPreview() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // High-quality gallery images with meaningful descriptions
  const galleryItems = [
    {
      src: "/gallery/ogrodzenie-przemyslowe.jpg", // Placeholder - replace with actual image path
      alt: "Ogrodzenie przemysłowe",
      category: "Ogrodzenia",
      featured: true
    },
    {
      src: "/gallery/brama-wjazdowa.jpg", // Placeholder - replace with actual image path
      alt: "Brama wjazdowa",
      category: "Bramy"
    },
    {
      src: "/gallery/balustrada-schodowa.jpg", // Placeholder - replace with actual image path
      alt: "Balustrada schodowa",
      category: "Balustrady"
    },
    {
      src: "/gallery/konstrukcja-stalowa.jpg", // Placeholder - replace with actual image path
      alt: "Konstrukcja stalowa",
      category: "Konstrukcje"
    }
  ];
  
  // Fallback images if the actual paths don't exist yet
  const fallbackImages = [
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000",
    "https://images.unsplash.com/photo-1605001337026-e6b4c974f4e1?q=80&w=1000",
    "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1000",
    "https://images.unsplash.com/photo-1629959505206-3aeb56f0dd50?q=80&w=1000"
  ];
  
  return (
    <section className={`py-24 relative ${isDark ? "bg-industrialGray" : "bg-industrialLight"}`}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-weldingRed/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-ctaOrange/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className={`px-4 py-1 rounded-full text-sm font-medium ${
              isDark ? "bg-weldingRed/20 text-weldingRed" : "bg-weldingRed/10 text-weldingRed"
            }`}>
              GALERIA
            </span>
          </div>
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Nasze Realizacje
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform -skew-x-12"></div>
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Prezentujemy wybrane projekty z naszego portfolio. Każda realizacja to połączenie
            precyzji, jakości i estetyki.
          </p>
        </div>

        {/* Gallery grid with masonry-like layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured large image */}
          <div className="relative w-full h-[600px] group overflow-hidden rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500 z-10"></div>
            <Image
              src={galleryItems[0].src.startsWith('/') ? fallbackImages[0] : galleryItems[0].src}
              alt={galleryItems[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            
            {/* Image overlay content */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-8 transform transition-transform duration-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-weldingRed/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {galleryItems[0].category}
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  FEATURED
                </span>
              </div>
              <h3 className="text-white text-2xl font-oswald font-bold mb-2">{galleryItems[0].alt}</h3>
              <p className="text-gray-200 mb-4 max-w-md">
                Profesjonalne ogrodzenie przemysłowe wykonane z najwyższej jakości stali ocynkowanej, zapewniające bezpieczeństwo i trwałość.
              </p>
              
              {/* Action buttons */}
              <div className="flex gap-4">
                <Link href="/galeria" className="inline-flex items-center gap-2 bg-weldingRed/90 hover:bg-weldingRed text-white px-4 py-2 rounded-lg transition-all duration-300">
                  <span>Więcej zdjęć</span>
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Grid of smaller images */}
          <div className="grid grid-rows-3 gap-6">
            {galleryItems.slice(1).map((img, index) => (
              <div
                key={index}
                className="relative w-full h-[180px] group overflow-hidden rounded-xl shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300 z-10"></div>
                <Image
                  src={img.src.startsWith('/') ? fallbackImages[index+1] : img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Image overlay content */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <span className="inline-block bg-weldingRed/80 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
                    {img.category}
                  </span>
                  <h3 className="text-white text-lg font-oswald font-bold group-hover:text-weldingRed transition-colors duration-300">{img.alt}</h3>
                </div>
                

              </div>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <div className="mt-16 flex flex-col items-center">
          <p className={`text-lg mb-6 max-w-2xl text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Zapraszamy do zapoznania się z pełną galerią naszych realizacji. Każdy projekt jest wyjątkowy i dopasowany do potrzeb klienta.
          </p>
          <Link href="/galeria" className="group">
            <div className="relative inline-flex items-center gap-2 bg-weldingRed text-white px-8 py-4 text-lg font-roboto font-semibold 
                rounded-lg transform hover:-translate-y-1 hover:shadow-lg hover:shadow-weldingRed/50 
                transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Zobacz więcej projektów</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-ctaOrange to-weldingRed opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
