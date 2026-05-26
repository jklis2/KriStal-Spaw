"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface GalleryCardProps {
  category: string;
  image: string;
  index?: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  category,
  image,
  index = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const imageDescription = `Realizacja KriStal-Spaw - ${category}`;

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <article
        className="group relative overflow-hidden rounded-lg
                 hover:shadow-xl hover:shadow-weldingRed/10 transition-all duration-300 animate-fade-up bg-white shadow-md"
        style={{ animationDelay: `${index * 50}ms` }}
        aria-label={imageDescription}
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-weldingRed focus-visible:ring-offset-2"
          aria-label={`Powiększ zdjęcie: ${imageDescription}`}
        >
          <figure className="aspect-square relative m-0">
            <Image
              src={image}
              alt={imageDescription}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={70}
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              itemProp="contentUrl"
            />

            <figcaption className="sr-only" itemProp="caption">
              {imageDescription}
            </figcaption>

            <div
              className="absolute top-4 right-4 bg-weldingRed text-white text-xs font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            >
              {category}
            </div>
          </figure>

          <div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform origin-left 
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            aria-hidden="true"
          />
        </button>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={imageDescription}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Zamknij podgląd zdjęcia"
          >
            ×
          </button>

          <div
            className="relative h-[90vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={image}
              alt={imageDescription}
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(GalleryCard);