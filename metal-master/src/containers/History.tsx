"use client";

import Image from "next/image";
import { historyItems } from "@/consts/historyItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";
import BackgroundPattern from "@/components/ui/BackgroundPattern";


export default function History() {
  const { theme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : true;
  
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? "bg-industrialGray" : "bg-industrialLight"}`}>
      <BackgroundPattern isDark={isDark} />
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-weldingRed/10 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-ctaOrange/10 blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Nasza Historia"
            subtitle="NASZA DROGA"
            isDark={isDark}
          >
            Metal Master to firma z ponad 20-letnim doświadczeniem w tworzeniu bram, ogrodzeń i dekoracji
            metalowych. Nasze produkty cechuje precyzja wykonania i dbałość o detale.
          </SectionHeader>
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
                  src="/images/photoPlaceholder.webp"
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
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-weldingRed via-ctaOrange to-weldingRed/30"></div>
            {historyItems.map((milestone, index) => (
              <TimelineItem
                key={index}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                Icon={milestone.Icon}
                index={index}
                isDark={isDark}
                isInView={timelineInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
