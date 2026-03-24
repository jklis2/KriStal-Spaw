import React from 'react';
import Image from 'next/image';

interface GalleryCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  index?: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  category,
  image,
  description,
  index = 0
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg
               hover:shadow-xl hover:shadow-weldingRed/10 transition-all duration-300 animate-fade-up bg-gray-900/50"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          quality={70}
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-weldingRed text-white text-xs font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {category}
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
          className="absolute inset-0 p-6 flex flex-col justify-end
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div>
            <span className="text-ctaOrange font-oswald text-sm mb-2 inline-block">
              {category}
            </span>
            <h3 className="text-2xl font-bold font-oswald text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-300 font-roboto text-sm">
              {description}
            </p>
          </div>
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
