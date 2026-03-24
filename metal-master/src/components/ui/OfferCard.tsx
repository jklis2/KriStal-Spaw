"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
}

function OfferCard({
  title,
  description,
  image,
}: OfferCardProps) {
  return (
    <div
      className="group relative rounded-lg overflow-hidden backdrop-blur-sm border border-transparent
                 transform hover:-translate-y-2 transition-all duration-300 bg-gray-900/50 hover:border-weldingRed/20"
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 -mt-4 -mr-4 bg-weldingRed/20 rotate-45 transform origin-bottom-left opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          quality={70}
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        
        {/* Badge on image */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-weldingRed text-white text-sm font-medium rounded-full">
          Oferta
        </div>
      </div>

      <div className="p-8 relative">
        <h3 className="text-3xl font-bold font-oswald mb-2 group-hover:text-weldingRed transition-colors duration-300 text-white">
          {title}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-weldingRed to-ctaOrange mb-4 transform group-hover:scale-x-110 transition-transform duration-300 origin-left"></div>
        <p className="font-roboto mb-6 leading-relaxed text-gray-300">
          {description}
        </p>
        <Link href="/kontakt" className="w-full py-4 px-8 font-oswald text-lg rounded-lg
               transition-all duration-300 flex items-center justify-center group/btn bg-weldingRed hover:bg-ctaOrange text-white"
        >
          <span>Dowiedz się więcej</span>
          <FaArrowRight className="ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
}

export default React.memo(OfferCard);
