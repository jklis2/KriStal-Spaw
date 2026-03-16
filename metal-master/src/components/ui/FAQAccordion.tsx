"use client";

import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaRegLightbulb } from 'react-icons/fa';
import { useTheme } from '@/components/providers/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : true;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Warianty animacji dla akordeonów
  const accordionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };
  
  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      } 
    }
  };

  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={accordionVariants}
          className={`backdrop-blur-sm rounded-lg overflow-hidden border border-transparent transition-all duration-300 ${
            isDark 
              ? "bg-gray-900/50 hover:bg-gray-900/60 hover:border-weldingRed/20" 
              : "bg-white/70 hover:bg-white/80 shadow-md hover:shadow-lg hover:shadow-weldingRed/10"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                openIndex === index
                  ? "bg-weldingRed text-white"
                  : `${isDark ? "bg-gray-800/70" : "bg-gray-100"} text-weldingRed group-hover:bg-weldingRed/10`
              }`}>
                {openIndex === index ? <FaRegLightbulb /> : <FaQuestionCircle />}
              </div>
              <h3 className={`text-xl font-oswald transition-colors duration-300 ${
                openIndex === index
                  ? "text-weldingRed"
                  : `${isDark ? "text-white" : "text-steelBlue-dark"} group-hover:text-weldingRed`
              }`}>{item.question}</h3>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              openIndex === index
                ? "bg-weldingRed text-white rotate-180"
                : `${isDark ? "bg-gray-800/70" : "bg-gray-100"} text-weldingRed group-hover:bg-weldingRed/10`
            }`}>
              <FaChevronDown className="text-sm" />
            </div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="pt-3 border-t border-weldingRed/20 mt-1">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className={`font-roboto mt-3 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {item.answer}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
