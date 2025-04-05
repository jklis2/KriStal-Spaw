"use client";

import SmallHeroSection from "@/components/ui/SmallHeroSection";
import Image from "next/image";
import { useState, useEffect } from "react";
import { galleryItems, categories } from "@/consts/galleryItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaFilter, FaSearch } from 'react-icons/fa';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");
  const [isFiltering, setIsFiltering] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Efekt animacji przy zmianie filtra
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredItems = galleryItems.filter(
    (item) =>
      selectedCategory === "Wszystkie" || item.category === selectedCategory
  );

  return (
    <main className={isDark ? "bg-industrialGray" : "bg-industrialLight"}>
      <SmallHeroSection
        title="Galeria Realizacji"
        description="Zobacz nasze najlepsze projekty i realizacje. Każdy produkt to połączenie rzemieślniczej precyzji z nowoczesnym designem."
      />
      <section className="py-24 relative overflow-hidden">
        {/* Tło z wzorem */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: isDark
                ? "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')"
                : "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E')"
            }}
          ></div>
        </div>
        
        {/* Dekoracyjne elementy */}
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
              <FaCamera className="text-weldingRed" />
              <span className="text-sm font-medium uppercase text-weldingRed">NASZE REALIZACJE</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-oswald mb-4 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
              Przeglądaj nasze najlepsze projekty
            </h2>
            <p className={`max-w-2xl mx-auto mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Filtruj według kategorii, aby zobaczyć projekty, które Cię interesują
            </p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 relative z-10 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 w-full max-w-4xl mx-auto">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 rounded-lg font-oswald text-lg transition-all duration-300 flex items-center gap-2
                      ${
                        category === selectedCategory
                          ? "bg-weldingRed text-white shadow-md shadow-weldingRed/20"
                          : isDark
                            ? "bg-gray-900/50 text-gray-300 hover:bg-weldingRed/20 hover:text-white"
                            : "bg-white/70 text-steelBlue hover:bg-weldingRed/10 hover:text-steelBlue-dark shadow-sm"
                      }`}
                  >
                    {category === selectedCategory && <FaFilter className="text-sm" />}
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {isFiltering && (
                <motion.div 
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="p-8 rounded-lg bg-weldingRed/20 backdrop-blur-md">
                    <div className="animate-spin w-12 h-12 border-4 border-weldingRed border-t-transparent rounded-full"></div>
                  </div>
                </motion.div>
              )}
              
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`group relative overflow-hidden rounded-lg backdrop-blur-sm
                           hover:shadow-xl hover:shadow-weldingRed/10 transition-all duration-300 ${
                             isDark ? "bg-gray-900/50" : "bg-white/70 shadow-md"
                           }`}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-weldingRed text-white text-xs font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.category}
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                    <div
                      className="absolute inset-0 p-6 flex flex-col justify-end
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-ctaOrange font-oswald text-sm mb-2 inline-block">
                          {item.category}
                        </span>
                        <h3 className="text-2xl font-bold font-oswald text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 font-roboto text-sm">
                          {item.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <button className="flex items-center gap-2 text-white font-oswald group-hover:text-weldingRed transition-colors">
                            <FaSearch className="text-sm" />
                            <span>Zobacz szczegóły</span>
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform origin-left 
                                scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  ></div>
                </motion.div>
              ))}
              
              {filteredItems.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-3 text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-weldingRed/10 flex items-center justify-center">
                    <FaSearch className="text-weldingRed text-2xl" />
                  </div>
                  <h3 className={`text-2xl font-oswald mb-2 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
                    Brak projektów w tej kategorii
                  </h3>
                  <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Spróbuj wybrać inną kategorię lub sprawdź później
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
