"use client";

import { useState, useMemo } from "react";
import { FaCamera, FaFilter, FaSearch } from 'react-icons/fa';
import GalleryCard from "@/components/ui/GalleryCard";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface GalleryContentProps {
  galleryItems: GalleryItem[];
  categories: string[];
}

export default function GalleryContent({ galleryItems, categories }: GalleryContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");

  const filteredItems = useMemo(
    () =>
      galleryItems.filter(
        (item) =>
          selectedCategory === "Wszystkie" || item.category === selectedCategory
      ),
    [galleryItems, selectedCategory]
  );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-weldingRed/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ctaOrange/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-70"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-12 animate-fade-down">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-weldingRed/10 mb-4">
            <FaCamera className="text-weldingRed" />
            <span className="text-sm font-medium uppercase text-weldingRed">NASZE REALIZACJE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-oswald mb-4 text-gray-900">
            Przeglądaj nasze najlepsze projekty
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Filtruj według kategorii, aby zobaczyć projekty, które Cię interesują
          </p>
          <div className="flex flex-wrap justify-center gap-3 relative z-10 mb-12 animate-fade-in-only delay-200">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 w-full max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-oswald text-lg transition-all duration-300 flex items-center gap-2 animate-fade-up hover:scale-105 active:scale-[0.98]
                    ${
                      category === selectedCategory
                        ? "bg-weldingRed text-white shadow-md shadow-weldingRed/20"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-weldingRed/10 hover:text-weldingRed"
                    }`}
                  style={{ animationDelay: `${100 + index * 50}ms` }}
                >
                  {category === selectedCategory && <FaFilter className="text-sm" />}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
              description={item.description}
              index={index}
            />
          ))}
          
          {filteredItems.length === 0 && (
            <div className="col-span-3 text-center py-16 animate-fade-in-only">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-weldingRed/10 flex items-center justify-center">
                <FaSearch className="text-weldingRed text-2xl" />
              </div>
              <h3 className="text-2xl font-oswald mb-2 text-gray-900">
                Brak projektów w tej kategorii
              </h3>
              <p className="text-gray-600">
                Spróbuj wybrać inną kategorię lub sprawdź później
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
