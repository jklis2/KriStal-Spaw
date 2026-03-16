"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import FAQAccordion from "@/components/ui/FAQAccordion";
import BackgroundPattern from "@/components/ui/BackgroundPattern";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQContentProps {
  faqItems: FAQItem[];
}

export default function FAQContent({ faqItems }: FAQContentProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-24 relative overflow-hidden">
      <BackgroundPattern isDark={isDark} />
      <div className="absolute top-0 right-0 w-72 h-72 bg-weldingRed/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ctaOrange/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-70"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-weldingRed/10 mb-4">
            <FaQuestionCircle className="text-weldingRed" />
            <span className="text-sm font-medium uppercase text-weldingRed">CZĘSTO ZADAWANE PYTANIA</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-oswald mb-4 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Masz pytania? My mamy odpowiedzi!
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i produktów.
            Jeśli nie znajdziesz odpowiedzi na swoje pytanie, skontaktuj się z nami bezpośrednio.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FAQAccordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
