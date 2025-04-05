"use client";

import React from "react";
import { whyUsItems } from "@/consts/whyUsItems";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function WhyUs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className={`py-24 relative ${isDark ? "bg-industrialGray" : "bg-industrialLight"}`}>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Dlaczego My?
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyUsItems.map((benefit, index) => (
            <div 
              key={index} 
              className={`backdrop-blur-sm rounded-lg p-8 group transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-weldingRed ${isDark ? "bg-gray-900/50" : "bg-white/70 hover:bg-weldingRed/5"}`}
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-all duration-300 ${isDark ? "bg-weldingRed/10 group-hover:bg-weldingRed/20" : "bg-weldingRed/5 group-hover:bg-weldingRed/10"}`}>
                <benefit.Icon 
                  size={32} 
                  className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
                />
              </div>
              <h3 className={`text-2xl font-oswald font-bold mb-3 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
                {benefit.title}
              </h3>
              <p className={`font-roboto leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-700"}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
