import React, { ComponentType } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
  index: number;
  isDark: boolean;
  linkHref?: string;
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  index,
  isDark,
  linkHref = '/oferta',
  linkText = 'Dowiedz się więcej'
}) => {
  return (
    <div
      className={`backdrop-blur-sm rounded-xl p-8 group transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-weldingRed shadow-lg ${
        isDark
          ? "bg-gray-900/50 hover:bg-gray-800/70 shadow-black/20"
          : "bg-white/90 hover:bg-white shadow-gray-200/70"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 ${
          isDark
            ? "bg-weldingRed/10 group-hover:bg-weldingRed/20"
            : "bg-weldingRed/5 group-hover:bg-weldingRed/10"
        }`}>
          <Icon 
            className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
            size={32}
          />
        </div>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          isDark
            ? "bg-gray-800 text-gray-400"
            : "bg-gray-100 text-gray-500"
        }`}>
          0{index + 1}
        </span>
      </div>
      
      <h3 className={`text-2xl font-oswald font-bold mb-4 group-hover:text-weldingRed transition-colors duration-300 ${
        isDark ? "text-white" : "text-steelBlue-dark"
      }`}>
        {title}
      </h3>
      
      <p className={`font-roboto leading-relaxed mb-6 transition-colors duration-300 ${
        isDark
          ? "text-gray-400 group-hover:text-gray-300"
          : "text-gray-600 group-hover:text-gray-700"
      }`}>
        {description}
      </p>
      
      <div className={`mt-auto pt-4 border-t border-dashed flex justify-between items-center ${
        isDark ? "border-gray-700" : "border-gray-200"
      }`}>
        <span className={`text-sm font-medium ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}>
          {linkText}
        </span>
        <Link href={linkHref} className="group/arrow">
          <div className={`p-2 rounded-full group-hover/arrow:bg-weldingRed transition-all duration-300 ${
            isDark ? "bg-gray-800" : "bg-gray-100"
          }`}>
            <FaArrowRight className="text-weldingRed group-hover/arrow:text-white transition-colors duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
