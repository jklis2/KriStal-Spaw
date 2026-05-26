"use client";

import { useId, useState } from "react";
import {
  FaChevronDown,
  FaQuestionCircle,
  FaRegLightbulb,
} from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionId = useId();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="space-y-6 w-full max-w-3xl mx-auto"
      role="list"
      aria-label="Pytania i odpowiedzi"
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `${accordionId}-question-${index}`;
        const answerId = `${accordionId}-answer-${index}`;

        return (
          <article
            key={index}
            className="backdrop-blur-sm rounded-lg overflow-hidden border transition-all duration-300 animate-fade-up bg-white border-gray-200 hover:border-weldingRed/30 shadow-sm"
            style={{ animationDelay: `${index * 100}ms` }}
            role="listitem"
          >
            <h3>
              <button
                id={questionId}
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="flex items-center gap-3 flex-1">
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? "bg-weldingRed text-white"
                        : "bg-industrialGray text-weldingRed group-hover:bg-weldingRed/10"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <FaRegLightbulb /> : <FaQuestionCircle />}
                  </span>

                  <span
                    className={`text-xl font-oswald transition-colors duration-300 ${
                      isOpen
                        ? "text-weldingRed"
                        : "text-gray-900 group-hover:text-weldingRed"
                    }`}
                  >
                    {item.question}
                  </span>
                </span>

                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "bg-weldingRed text-white rotate-180"
                      : "bg-industrialGray text-weldingRed group-hover:bg-weldingRed/10"
                  }`}
                  aria-hidden="true"
                >
                  <FaChevronDown className="text-sm" />
                </span>
              </button>
            </h3>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? "500px" : "0",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-6 pb-6">
                <div className="pt-3 border-t border-weldingRed/20 mt-1">
                  <p className="font-roboto mt-3 leading-relaxed text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}