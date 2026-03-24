import React from 'react';
import Image from 'next/image';
import { FaCertificate } from 'react-icons/fa';

interface CertificateCardProps {
  name: string;
  year: string;
  description: string;
  img: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  name,
  year,
  description,
  img,
}) => {
  return (
    <div
      className="group relative rounded-lg overflow-hidden
               transform hover:-translate-y-2 transition-all duration-300 bg-white shadow-md"
    >
      <div className="aspect-square relative">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="relative">
          <FaCertificate className="text-weldingRed text-4xl mb-3 transform group-hover:rotate-12 transition-transform duration-300" />
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl font-oswald font-bold text-white">
              {name}
            </h3>
            <span className="text-ctaOrange font-oswald">
              {year}
            </span>
          </div>
          <p className="font-roboto text-sm leading-relaxed transition-colors duration-300 text-gray-300 group-hover:text-white">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-weldingRed transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

export default React.memo(CertificateCard);
