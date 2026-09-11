"use client";

import React from "react";
import Image from "next/image";

interface GalleryCardProps {
  title: string;
  category: string;
  image: string;
  imageCount: number;
  index?: number;
  onOpen: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  category,
  image,
  imageCount,
  index = 0,
  onOpen,
}) => {
  const imageDescription = `${title} - ${category}`;
  const imageCountLabel = `${imageCount} ${
    imageCount === 1
      ? "zdjęcie"
      : imageCount % 10 >= 2 && imageCount % 10 <= 4 &&
          (imageCount % 100 < 12 || imageCount % 100 > 14)
        ? "zdjęcia"
        : "zdjęć"
  }`;

  return (
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
        onClick={onOpen}
        className="block w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-weldingRed focus-visible:ring-offset-2"
        aria-label={`Powiększ zdjęcie: ${imageDescription}, ${imageCountLabel}`}
      >
        <figure className="aspect-square relative m-0">
          <Image
            src={image}
            alt={imageDescription}
            fill
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1280px) 389px, (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 768px) calc((100vw - 80px) / 2), calc(100vw - 48px)"
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
          <span className="absolute bottom-4 right-4 rounded bg-black/65 px-2.5 py-1 text-xs font-medium text-white">
            {imageCountLabel}
          </span>
        </figure>

        <div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform origin-left 
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          aria-hidden="true"
        />
      </button>
    </article>
  );
};

export default React.memo(GalleryCard);
