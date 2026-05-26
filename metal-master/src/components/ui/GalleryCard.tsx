import React from 'react';
import Image from 'next/image';

interface GalleryCardProps {
  category: string;
  image: string;
  index?: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  category,
  image,
  index = 0
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg
               hover:shadow-xl hover:shadow-weldingRed/10 transition-all duration-300 animate-fade-up bg-white shadow-md"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={`Realizacja KriStal-Spaw – ${category}`}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={70}
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-weldingRed text-white text-xs font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {category}
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform origin-left 
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      ></div>
    </div>
  );
};

export default React.memo(GalleryCard);
