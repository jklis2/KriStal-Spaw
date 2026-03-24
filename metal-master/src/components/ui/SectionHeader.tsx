import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  children
}) => {
  return (
    <div className="mb-16">
      <div className="relative text-center">
        {/* Mobile: subtitle above title */}
        {subtitle && (
          <div className="block md:hidden mb-3">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-weldingRed/20 text-weldingRed">
              {subtitle}
            </span>
          </div>
        )}
        
        <div className="inline-block relative">
          {/* Desktop: subtitle to the left of title */}
          {subtitle && (
            <div className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-4">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-weldingRed/20 text-weldingRed">
                {subtitle}
              </span>
            </div>
          )}
          <h2 className="text-5xl font-bold font-oswald relative inline-block text-white">
            {title}
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform -skew-x-12"></div>
          </h2>
        </div>
      </div>
      {children && (
        <div className="text-center">
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
            {children}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
