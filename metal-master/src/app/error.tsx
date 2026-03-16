"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import { motion } from 'framer-motion';
import { FaHome, FaExclamationTriangle, FaArrowRight, FaRedo } from 'react-icons/fa';
import { SVG_PATTERNS } from '@/consts/svgPatterns';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

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
      <div className="absolute top-0 right-0 w-96 h-96 bg-weldingRed/5 rounded-full filter blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ctaOrange/5 rounded-full filter blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: isDark ? SVG_PATTERNS.diagonal.dark : SVG_PATTERNS.diagonal.light
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
            <span className="text-sm font-medium uppercase text-weldingRed">WYSTĄPIŁ BŁĄD</span>
          </div>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className={`text-6xl font-extrabold mb-4 font-oswald ${
            isDark ? "text-white" : "text-steelBlue-dark"
          }`}
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-weldingRed to-ctaOrange">Ups!</span>
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className={`text-3xl font-semibold mb-6 font-oswald ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Coś poszło nie tak
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className={`mb-6 max-w-lg mx-auto text-center font-roboto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Wygląda na to, że napotkaliśmy nieoczekiwany problem. Nie martw się, nasz zespół został powiadomiony i pracuje nad rozwiązaniem.
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
            Możesz spróbować ponownie lub wrócić do strony głównej:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={reset}
                className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                  isDark 
                    ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/20 hover:text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-weldingRed/10 hover:text-gray-900"
                } transition-colors duration-300`}
              >
                <FaRedo />
                <span>Spróbuj ponownie</span>
              </button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/" className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                isDark 
                  ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/20 hover:text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-weldingRed/10 hover:text-gray-900"
              } transition-colors duration-300`}>
                <FaHome />
                <span>Strona główna</span>
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
