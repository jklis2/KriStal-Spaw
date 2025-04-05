"use client";

import Image from "next/image";
import { historyItems } from "@/consts/historyItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function History() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? "bg-industrialGray" : "bg-industrialLight"}`}>
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

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-weldingRed/10 text-weldingRed font-medium text-sm mb-4 border border-weldingRed/20">
            NASZA DROGA
          </span>
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Nasza Historia
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h2>
          <p className={`mt-8 text-xl font-roboto max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Metal Master to firma z ponad 20-letnim doświadczeniem w tworzeniu bram, ogrodzeń i dekoracji
            metalowych. Nasze produkty cechuje precyzja wykonania i dbałość o detale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-weldingRed/20 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://picsum.photos/800/500"
                  alt="Warsztat Metal Master"
                  width={800}
                  height={500}
                  className="w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-weldingRed text-white text-sm font-medium rounded-full mb-2">Od 2005 roku</span>
                  <h3 className="text-white text-2xl font-oswald mb-2">Tradycja i Nowoczesność</h3>
                  <p className="text-gray-200 font-roboto">Łączymy tradycyjne rzemiosło z nowoczesnymi technologiami</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg border border-weldingRed/20 bg-gradient-to-br from-transparent to-weldingRed/5">
              <blockquote className="relative">
                <div className="absolute -top-4 -left-4 text-4xl text-weldingRed opacity-30">❝</div>
                <p className={`italic text-lg relative z-10 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  Nasza historia to historia pasji do metalu i precyzyjnego rzemiosła. Każdy projekt to dla nas nowe wyzwanie, które podejmujemy z entuzjazmem.
                </p>
                <footer className="mt-4">
                  <p className="font-medium text-weldingRed">Jan Kowalski</p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Założyciel Metal Master</p>
                </footer>
                <div className="absolute -bottom-4 -right-4 text-4xl text-weldingRed opacity-30">❞</div>
              </blockquote>
            </div>
          </motion.div>

          <div 
            className="space-y-8 relative" 
            ref={timelineRef}
          >
            {/* Timeline vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-weldingRed via-ctaOrange to-weldingRed/30"></div>
            
            {historyItems.map((milestone, index) => (
              <motion.div 
                key={index} 
                className={`relative pl-12 group p-6 rounded-lg border border-transparent transition-all duration-300 ${
                  isDark 
                    ? "hover:bg-gray-900/30 hover:border-weldingRed/20" 
                    : "hover:bg-white/70 hover:border-weldingRed/20"
                }`}
                initial={{ opacity: 0, x: 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Timeline node */}
                <div
                  className="absolute left-0 top-6 w-8 h-8 bg-weldingRed/10 rounded-lg flex items-center justify-center
                  group-hover:bg-weldingRed/20 transform group-hover:rotate-12 transition-all duration-300 z-10"
                >
                  <milestone.Icon className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" />
                </div>

                <div className="relative">
                  <span className="text-ctaOrange font-oswald text-3xl block mb-2 group-hover:text-weldingRed transition-colors duration-300">{milestone.year}</span>
                  <h3 className={`font-oswald text-xl mb-2 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>{milestone.title}</h3>
                  <p className={`font-roboto leading-relaxed transition-colors duration-300 ${
                    isDark 
                      ? "text-gray-400 group-hover:text-gray-300" 
                      : "text-gray-600 group-hover:text-gray-800"
                  }`}>
                    {milestone.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-weldingRed to-ctaOrange mt-4 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                </div>
              </motion.div>
            ))}
            

          </div>
        </div>
      </div>
    </section>
  );
}
