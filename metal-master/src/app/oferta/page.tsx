"use client";

import Link from "next/link";
import SmallHeroSection from "@/components/ui/SmallHeroSection";
import OfferCard from "@/components/ui/OfferCard";
import { FaArrowRight, FaTools } from "react-icons/fa";
import { offers } from "@/consts/offerItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from "framer-motion";

export default function Offer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <main className={isDark ? "bg-industrialGray" : "bg-industrialLight"}>
      <SmallHeroSection
        title="Nasza Oferta"
        description="Poznaj nasze rzemieślnicze produkty metalowe, tworzone z pasją i dbałością o najdrobniejsze detale"
      />
      <section className="py-24 relative">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: isDark
                ? "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')"
                : "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')",
            }}
          ></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-weldingRed/10 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-ctaOrange/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-weldingRed/10 text-weldingRed font-medium text-sm mb-4 border border-weldingRed/20">
              NASZA OFERTA
            </span>
            <h2 className={`text-4xl font-bold font-oswald relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
              Profesjonalne Usługi Spawalnicze
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
            </h2>
            <p className={`mt-6 text-xl font-roboto max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Oferujemy kompleksowe usługi spawalnicze dla klientów indywidualnych i firm. 
              Nasze wieloletnie doświadczenie gwarantuje najwyższą jakość wykonania.
            </p>
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
        {/* Decorative elements */}
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
          
          <h2 className={`text-4xl font-bold font-oswald mb-6 relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Zrealizujemy Twój Projekt
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform -skew-x-12"></div>
          </h2>
          <p className={`text-xl font-roboto mb-12 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Skontaktuj się z nami, aby omówić szczegóły Twojego zamówienia.
            Oferujemy bezpłatną wycenę i konsultację.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/kontakt"
              className="py-4 px-12 bg-weldingRed hover:bg-ctaOrange 
                      text-white font-oswald text-xl rounded-lg
                      transition-all duration-300
                      flex items-center mx-auto w-auto max-w-fit
                      shadow-lg shadow-weldingRed/20 hover:shadow-ctaOrange/30"
            >
              Skontaktuj się z nami
              <FaArrowRight className="ml-3" />
            </Link>
          </motion.div>
          
          {/* Decorative dots */}
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
    </main>
  );
}
