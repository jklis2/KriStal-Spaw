"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '@/components/providers/ThemeProvider';
import { motion } from 'framer-motion';

export default function ContactInfo() {
  const { theme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : true;
  
  const contactItems = [
    {
      icon: FaPhone,
      title: "Telefon",
      content: "+48 123 456 789"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "kontakt@metalmaster.pl"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Adres",
      content: "ul. Metalowa 123\n00-001 Warszawa"
    },
    {
      icon: FaClock,
      title: "Godziny Otwarcia",
      content: "Poniedziałek - Piątek: 8:00 - 16:00\nSobota - Niedziela: Zamknięte"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-weldingRed/10 flex items-center justify-center">
            <FaEnvelope className="text-weldingRed" />
          </div>
          <h2 className={`text-3xl font-oswald relative ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Informacje Kontaktowe
          </h2>
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-weldingRed to-ctaOrange mb-6"></div>
        <p className={isDark ? "text-gray-300 font-roboto mb-8" : "text-gray-600 font-roboto mb-8"}>
          Skontaktuj się z nami, aby omówić Twój projekt. Jesteśmy dostępni od poniedziałku do piątku
          w godzinach 8:00-16:00.
        </p>
      </div>

      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-start space-x-4 group"
            variants={itemVariants}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 ${
              isDark ? "bg-weldingRed/20 group-hover:bg-weldingRed/30" : "bg-weldingRed/10 group-hover:bg-weldingRed/20"
            }`}>
              <item.icon className="text-weldingRed text-xl" />
            </div>
            <div className="flex-1">
              <h3 className={`font-oswald text-xl mb-1 transition-colors duration-300 group-hover:text-weldingRed ${
                isDark ? "text-white" : "text-steelBlue-dark"
              }`}>{item.title}</h3>
              <p className={`whitespace-pre-line ${
                isDark ? "text-gray-300 font-roboto" : "text-gray-600 font-roboto"
              }`}>{item.content}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`mt-12 p-6 backdrop-blur-sm rounded-lg border border-transparent ${
          isDark 
            ? "bg-gray-900/50 border-gray-800 hover:border-weldingRed/20" 
            : "bg-white/70 border-gray-200 shadow-md hover:shadow-lg hover:shadow-weldingRed/10"
        } transition-all duration-300`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-weldingRed/10 flex items-center justify-center">
            <FaPhone className="text-weldingRed text-sm" />
          </div>
          <h3 className={`text-xl font-oswald ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Umów się na konsultację
          </h3>
        </div>
        <p className={`font-roboto mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Chętnie pomożemy w realizacji Twojego projektu. Zadzwoń lub napisz do nas,
          aby umówić się na bezpłatną konsultację.
        </p>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="tel:+48123456789"
          className="inline-flex items-center px-6 py-3 bg-weldingRed text-white font-oswald
                   rounded-lg transition-all duration-300 hover:bg-ctaOrange
                   group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            <FaPhone className="mr-2" />
            <span>Zadzwoń teraz</span>
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </span>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-ctaOrange to-weldingRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.a>
      </motion.div>
    </div>
  );
}