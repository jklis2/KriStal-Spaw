"use client";

import SmallHeroSection from "@/components/ui/SmallHeroSection";
import Image from "next/image";
import { useState } from "react";
import { galleryItems, categories } from "@/consts/galleryItems";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");

  const filteredItems = galleryItems.filter(
    (item) =>
      selectedCategory === "Wszystkie" || item.category === selectedCategory
  );

  return (
    <main className="bg-industrialGray min-h-screen">
      <SmallHeroSection
        title="Galeria Realizacji"
        description="Zobacz nasze najlepsze projekty i realizacje. Każdy produkt to połączenie rzemieślniczej precyzji z nowoczesnym designem."
      />
      <section className="py-24 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-oswald text-lg transition-all duration-300
                  ${
                    category === selectedCategory
                      ? "bg-weldingRed text-white"
                      : "bg-gray-900/50 text-gray-300 hover:bg-weldingRed/20 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm
                         transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-end
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-ctaOrange font-oswald text-sm mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold font-oswald text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-roboto text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-weldingRed transform origin-left 
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
