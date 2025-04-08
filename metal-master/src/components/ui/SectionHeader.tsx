import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isDark?: boolean;
  children?: ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  isDark = false,
  children
}) => {
  return (
    <div className="mb-16">
      <div className="relative">
        <div className="text-center">
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${
            isDark ? "text-white" : "text-steelBlue-dark"
          }`}>
            {title}
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform -skew-x-12"></div>
          </h2>
          <span className={`absolute inline-block px-4 py-1 rounded-full text-sm font-medium mr-6 ${
            isDark ? "bg-weldingRed/20 text-weldingRed" : "bg-weldingRed/10 text-weldingRed"
          }`} style={{ right: 'calc(50% + 220px)', top: '50%', transform: 'translateY(-50%)' }}>
            {subtitle}
          </span>
        </div>
      </div>
      {children && (
        <div className="text-center">
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            {children}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
