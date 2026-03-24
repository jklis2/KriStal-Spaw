"use client";

import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaRegLightbulb } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="backdrop-blur-sm rounded-lg overflow-hidden border border-transparent transition-all duration-300 animate-fade-up bg-gray-900/50 hover:bg-gray-900/60 hover:border-weldingRed/20"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                openIndex === index
                  ? "bg-weldingRed text-white"
                  : "bg-gray-800/70 text-weldingRed group-hover:bg-weldingRed/10"
              }`}>
                {openIndex === index ? <FaRegLightbulb /> : <FaQuestionCircle />}
              </div>
              <h3 className={`text-xl font-oswald transition-colors duration-300 ${
                openIndex === index
                  ? "text-weldingRed"
                  : "text-white group-hover:text-weldingRed"
              }`}>{item.question}</h3>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              openIndex === index
                ? "bg-weldingRed text-white rotate-180"
                : "bg-gray-800/70 text-weldingRed group-hover:bg-weldingRed/10"
            }`}>
              <FaChevronDown className="text-sm" />
            </div>
          </button>
          
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: openIndex === index ? '500px' : '0',
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="px-6 pb-6">
              <div className="pt-3 border-t border-weldingRed/20 mt-1">
                <p className="font-roboto mt-3 leading-relaxed text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
