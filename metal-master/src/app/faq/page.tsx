"use client";

import SmallHeroSection from "@/components/ui/SmallHeroSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqItems } from "@/consts/faqItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

export default function FAQ() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <main className={isDark ? "bg-industrialGray" : "bg-industrialLight"}>
      <SmallHeroSection
        title="FAQ"
        description="Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i produktów"
      />
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: isDark
                ? "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')"
                : "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')"
            }}
          ></div>
        </div>
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
    </main>
  );
}
