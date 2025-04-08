"use client";

import SmallHeroSection from "@/components/ui/SmallHeroSection";
import ContactForm from "@/containers/ContactForm";
import ContactInfo from "@/containers/ContactInfo";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className={isDark ? "bg-industrialGray" : "bg-industrialLight"}>
      <SmallHeroSection
        title="Kontakt"
        description="Skontaktuj się z nami, aby omówić Twój projekt. Odpowiemy na wszystkie pytania i pomożemy w realizacji Twoich planów."
      />
      <section className="py-24 relative overflow-hidden">
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto px-6"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-weldingRed/10 mb-4">
            <FaEnvelope className="text-weldingRed" />
            <span className="text-sm font-medium uppercase text-weldingRed">SKONTAKTUJ SIĘ Z NAMI</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-oswald mb-4 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Jesteśmy do Twojej dyspozycji
          </h2>
        </motion.div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`backdrop-blur-sm p-8 rounded-lg border border-transparent ${
                isDark 
                  ? "bg-gray-900/50 border-gray-800 hover:border-weldingRed/20" 
                  : "bg-white/70 border-gray-200 shadow-md hover:shadow-lg hover:shadow-weldingRed/10"
              } transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-weldingRed/10 flex items-center justify-center">
                  <FaEnvelope className="text-weldingRed" />
                </div>
                <h2 className={`text-3xl font-oswald relative ${
                  isDark ? "text-white" : "text-steelBlue-dark"
                }`}>
                  Napisz do nas
                </h2>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-weldingRed to-ctaOrange mb-8"></div>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="pb-24 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-weldingRed/10 flex items-center justify-center">
              <FaMapMarkedAlt className="text-weldingRed" />
            </div>
            <h2 className={`text-3xl font-oswald ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
              Gdzie nas znaleźć
            </h2>
          </div>
          
          <div className={`backdrop-blur-sm rounded-lg overflow-hidden border border-transparent ${
            isDark 
              ? "bg-gray-900/50 border-gray-800 hover:border-weldingRed/20" 
              : "bg-white/70 border-gray-200 shadow-md hover:shadow-lg hover:shadow-weldingRed/10"
          } transition-all duration-300`}>
            <div className="aspect-[21/9] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12643.756924484244!2d21.0122281!3d52.2296756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669d3f99a5%3A0x52b81c9f2707694d!2sWarszawa!5e0!3m2!1spl!2spl!4v1615997602232!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
