"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaFilter, FaSearch } from 'react-icons/fa';
import GalleryCard from "@/components/ui/GalleryCard";
import BackgroundPattern from "@/components/ui/BackgroundPattern";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface GalleryContentProps {
  galleryItems: GalleryItem[];
  categories: string[];
}

export default function GalleryContent({ galleryItems, categories }: GalleryContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");
  const [isFiltering, setIsFiltering] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
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
    <section className="py-24 relative overflow-hidden">
      <BackgroundPattern />
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
              <GalleryCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                description={item.description}
                isDark={isDark}
                index={index}
              />
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
  );
}
