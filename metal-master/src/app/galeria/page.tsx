"use client"

import { useState } from "react";
import Image from "next/image";

const categories = ["Wszystkie", "Bramy", "Ogrodzenia", "Inne"];
const images = [
  { src: "https://picsum.photos/400/300", category: "Bramy" },
  { src: "https://picsum.photos/401/300", category: "Ogrodzenia" },
  { src: "https://picsum.photos/402/300", category: "Inne" },
  { src: "https://picsum.photos/403/300", category: "Bramy" },
  { src: "https://picsum.photos/404/300", category: "Ogrodzenia" },
  { src: "https://picsum.photos/405/300", category: "Inne" },
  { src: "https://picsum.photos/406/300", category: "Bramy" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const filteredImages =
    selectedCategory === "Wszystkie"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Galeria</h1>
      <div className="flex justify-center mb-4 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md transition-all ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="columns-3 gap-4 space-y-4">
        {filteredImages.map((img, index) => (
          <div key={index} className="relative w-full h-auto overflow-hidden">
            <Image
              src={img.src}
              alt={`Zdjęcie z kategorii ${img.category}`}
              width={400}
              height={300}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}