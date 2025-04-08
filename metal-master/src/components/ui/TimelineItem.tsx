import React, { ComponentType } from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  index: number;
  isDark: boolean;
  isInView: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  Icon,
  index,
  isDark,
  isInView
}) => {
  return (
    <motion.div 
      className={`relative pl-12 group p-6 rounded-lg border border-transparent transition-all duration-300 ${
        isDark 
          ? "hover:bg-gray-900/30 hover:border-weldingRed/20" 
          : "hover:bg-white/70 hover:border-weldingRed/20"
      }`}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {/* Timeline node */}
      <div
        className="absolute left-0 top-6 w-8 h-8 bg-weldingRed/10 rounded-lg flex items-center justify-center
        group-hover:bg-weldingRed/20 transform group-hover:rotate-12 transition-all duration-300 z-10"
      >
        <Icon className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" />
      </div>

      <div className="relative">
        <span className="text-ctaOrange font-oswald text-3xl block mb-2 group-hover:text-weldingRed transition-colors duration-300">{year}</span>
        <h3 className={`font-oswald text-xl mb-2 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>{title}</h3>
        <p className={`font-roboto leading-relaxed transition-colors duration-300 ${
          isDark 
            ? "text-gray-400 group-hover:text-gray-300" 
            : "text-gray-600 group-hover:text-gray-800"
        }`}>
          {description}
        </p>
        
        {/* Hover indicator */}
        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-weldingRed to-ctaOrange mt-4 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
