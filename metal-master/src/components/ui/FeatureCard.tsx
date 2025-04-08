import React, { ComponentType } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
  index: number;
  isDark: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon,
  index,
  isDark
}) => {
  return (
    <div 
      className={`backdrop-blur-sm rounded-xl p-8 group transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-weldingRed shadow-lg ${
        isDark
          ? "bg-gray-900/50 hover:bg-gray-800/70 shadow-black/20"
          : "bg-white/90 hover:bg-white shadow-gray-200/70"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 ${
          isDark
            ? "bg-weldingRed/10 group-hover:bg-weldingRed/20"
            : "bg-weldingRed/5 group-hover:bg-weldingRed/10"
        }`}>
          <Icon 
            size={32} 
            className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
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
      
      <h3 className={`text-2xl font-oswald font-bold mb-3 group-hover:text-weldingRed transition-colors duration-300 ${
        isDark ? "text-white" : "text-steelBlue-dark"
      }`}>
        {title}
      </h3>
      
      <p className={`font-roboto leading-relaxed transition-colors duration-300 ${
        isDark
          ? "text-gray-400 group-hover:text-gray-300"
          : "text-gray-600 group-hover:text-gray-700"
      }`}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
