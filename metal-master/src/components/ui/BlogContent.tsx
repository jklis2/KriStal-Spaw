"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from 'framer-motion';
import { FaNewspaper, FaSearch } from 'react-icons/fa';
import PostCard from "@/components/ui/PostCard";
import BackgroundPattern from "@/components/ui/BackgroundPattern";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

interface BlogContentProps {
  blogPosts: BlogPost[];
}

export default function BlogContent({ blogPosts }: BlogContentProps) {
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
            <FaNewspaper className="text-weldingRed" />
            <span className="text-sm font-medium uppercase text-weldingRed">BLOG TECHNICZNY</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-oswald mb-4 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Najnowsze artykuły i poradniki
          </h2>
          <p className={`max-w-2xl mx-auto mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Poszerzaj swoją wiedzę o spawalnictwie dzięki profesjonalnym artykułom
            przygotowanym przez naszych ekspertów
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="relative max-w-md w-full">
              <input 
                type="text" 
                placeholder="Szukaj artykułów..." 
                className={`w-full py-3 px-5 pl-12 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-weldingRed/50 transition-all ${
                  isDark 
                    ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500" 
                    : "bg-white border-gray-200 text-gray-800 placeholder-gray-400"
                }`}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-weldingRed" />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
