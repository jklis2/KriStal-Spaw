import React, { ComponentType } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
  index: number;
  linkHref?: string;
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  index,
  linkHref = '/oferta',
  linkText = 'Dowiedz się więcej'
}) => {
  return (
    <div
      className="rounded-xl p-8 group transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-weldingRed shadow-lg bg-white/90 hover:bg-white shadow-gray-200/70 dark:bg-gray-900/50 dark:hover:bg-gray-800/70 dark:shadow-black/20"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 bg-weldingRed/5 group-hover:bg-weldingRed/10 dark:bg-weldingRed/10 dark:group-hover:bg-weldingRed/20">
          <Icon 
            className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
            size={32}
          />
        </div>
        <div className="relative">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg transform rotate-45 group-hover:rotate-0 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-weldingRed/20 to-ctaOrange/20 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-weldingRed transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <div className="absolute top-0 right-0 w-0.5 h-full bg-weldingRed transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100"></div>
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-ctaOrange transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-full bg-ctaOrange transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-300"></div>
            </div>
            <div className="transform -rotate-45 group-hover:rotate-0 transition-all duration-500">
              {index % 5 === 0 && <span className="text-weldingRed text-xl font-bold">⚡</span>}
              {index % 5 === 1 && <span className="text-weldingRed text-xl font-bold">⚙️</span>}
              {index % 5 === 2 && <span className="text-weldingRed text-xl font-bold">🔥</span>}
              {index % 5 === 3 && <span className="text-weldingRed text-xl font-bold">🛠️</span>}
              {index % 5 === 4 && <span className="text-weldingRed text-xl font-bold">⚒️</span>}
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-oswald font-bold mb-4 group-hover:text-weldingRed transition-colors duration-300 text-steelBlue-dark dark:text-white">
        {title}
      </h3>
      
      <p className="font-roboto leading-relaxed mb-6 transition-colors duration-300 text-gray-600 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
        {description}
      </p>
      
      <div className="mt-auto pt-4 border-t border-dashed flex justify-between items-center border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {linkText}
        </span>
        <Link href={linkHref} className="group/arrow">
          <div className="p-2 rounded-full group-hover/arrow:bg-weldingRed transition-all duration-300 bg-gray-100 dark:bg-gray-800">
            <FaArrowRight className="text-weldingRed group-hover/arrow:text-white transition-colors duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);
