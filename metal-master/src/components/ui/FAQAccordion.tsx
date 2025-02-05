"use client";

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

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
    <div className="space-y-4 w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-900/60"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
          >
            <h3 className="text-xl font-oswald text-white">{item.question}</h3>
            <FaChevronDown
              className={`text-weldingRed transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-4">
              <div className="pt-2 border-t border-weldingRed/20">
                <p className="text-gray-300 font-roboto mt-3">{item.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
