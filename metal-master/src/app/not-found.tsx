"use client";

import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import { motion } from 'framer-motion';
import { FaHome, FaTools, FaImages, FaEnvelope, FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';

export default function NotFound() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Warianty animacji
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen text-center p-6 relative overflow-hidden ${
      isDark ? "bg-industrialGray" : "bg-industrialLight"
    }`}>
      {/* Dekoracyjne elementy tła */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-weldingRed/5 rounded-full filter blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ctaOrange/5 rounded-full filter blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Dekoracyjne elementy */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: isDark
              ? "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')"
              : "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')"
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-weldingRed/10 mb-4">
            <FaExclamationTriangle className="text-weldingRed" />
            <span className="text-sm font-medium uppercase text-weldingRed">STRONA NIE ZNALEZIONA</span>
          </div>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className={`text-7xl font-extrabold mb-4 font-oswald ${
            isDark ? "text-white" : "text-steelBlue-dark"
          }`}
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-weldingRed to-ctaOrange">404</span>
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className={`text-3xl font-semibold mb-6 font-oswald ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Ups! Ta strona się dopiero spawa...
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className={`mb-6 max-w-lg font-roboto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Wygląda na to, że trafiłeś w miejsce, gdzie iskry lecą, ale strona jeszcze nie zdążyła ostygnąć. 
          Może jest na warsztacie, a może ktoś zapomniał przyłożyć elektrody... 🤷‍♂️
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className={`italic mb-8 font-roboto ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          💡 Pro tip: Jeśli szukasz czegoś konkretnego, skontaktuj się z nami – pomożemy szybciej niż elektroda się nagrzewa!
        </motion.p>
      
      <motion.div 
        variants={itemVariants}
        className={`p-8 rounded-lg backdrop-blur-sm mb-8 border border-transparent ${
          isDark 
            ? "bg-gray-900/30 hover:border-weldingRed/20" 
            : "bg-white/70 hover:border-weldingRed/10 shadow-md hover:shadow-lg hover:shadow-weldingRed/5"
        } transition-all duration-300`}
      >
        <div className="w-full h-0.5 bg-gradient-to-r from-weldingRed to-ctaOrange mb-6"></div>
        <p className={`font-roboto mb-6 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}>
          Sprawdź nasze popularne strony:
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isDark 
                ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/20 hover:text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-weldingRed/10 hover:text-gray-900"
            } transition-colors duration-300`}>
              <FaHome />
              <span>Strona główna</span>
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/oferta" className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isDark 
                ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/20 hover:text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-weldingRed/10 hover:text-gray-900"
            } transition-colors duration-300`}>
              <FaTools />
              <span>Oferta</span>
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/galeria" className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isDark 
                ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/20 hover:text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-weldingRed/10 hover:text-gray-900"
            } transition-colors duration-300`}>
              <FaImages />
              <span>Galeria</span>
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/kontakt" className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isDark 
                ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/20 hover:text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-weldingRed/10 hover:text-gray-900"
            } transition-colors duration-300`}>
              <FaEnvelope />
              <span>Kontakt</span>
            </Link>
          </motion.div>
        </div>
        <div className="w-full h-0.5 bg-gradient-to-r from-weldingRed to-ctaOrange mt-6"></div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href="/" className="inline-flex items-center gap-2 bg-weldingRed text-white px-8 py-4 text-lg font-roboto font-semibold 
             rounded-full shadow-md hover:shadow-lg hover:shadow-weldingRed/30 
             transition-all duration-300 relative overflow-hidden group">
          <span className="relative z-10 flex items-center">
            <FaHome className="mr-2" />
            <span>Wróć na stronę główną</span>
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-ctaOrange to-weldingRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </motion.div>
      </motion.div>
    </div>
  );
}