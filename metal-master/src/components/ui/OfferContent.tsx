"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from "framer-motion";
import { FaArrowRight, FaTools } from "react-icons/fa";
import OfferCard from "@/components/ui/OfferCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import BackgroundPattern from "@/components/ui/BackgroundPattern";

interface OfferItem {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface OfferContentProps {
  offers: OfferItem[];
}

export default function OfferContent({ offers }: OfferContentProps) {
  const { theme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : true;

  return (
    <>
      <section className="py-24 relative">
        <BackgroundPattern isDark={isDark} />
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-weldingRed/10 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-ctaOrange/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Profesjonalne Usługi Spawalnicze"
              subtitle="NASZA OFERTA"
              isDark={isDark}
            >
              Oferujemy kompleksowe usługi spawalnicze dla klientów indywidualnych i firm.
              Nasze wieloletnie doświadczenie gwarantuje najwyższą jakość wykonania.
            </SectionHeader>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <OfferCard {...offer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-weldingRed/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ctaOrange/5 rounded-full filter blur-3xl"></div>
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-weldingRed/10 rounded-full mb-6">
            <FaTools className="text-weldingRed text-xl" />
          </div>
          <SectionHeader
            title="Zrealizujemy Twój Projekt"
            isDark={isDark}
          >
            Skontaktuj się z nami, aby omówić szczegóły Twojego zamówienia.
            Oferujemy bezpłatną wycenę i konsultację.
          </SectionHeader>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8"
          >
            <CTAButton href="/kontakt" icon={<FaArrowRight />}>
              Skontaktuj się z nami
            </CTAButton>
          </motion.div>
          <div className="absolute top-10 left-10 grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-weldingRed"></div>
            ))}
          </div>
          <div className="absolute bottom-10 right-10 grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-ctaOrange"></div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
