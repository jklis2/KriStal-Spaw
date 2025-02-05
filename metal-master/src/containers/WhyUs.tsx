"use client";

import React from "react";
import { whyUsItems } from "@/consts/whyUsItems";

export default function WhyUs() {
  return (
    <section className="py-24 bg-industrialGray relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-oswald text-white relative inline-block">
            Dlaczego My?
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-weldingRed transform -skew-x-12"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyUsItems.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 group
                       transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-weldingRed"
            >
              <div className="bg-weldingRed/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6
                            group-hover:bg-weldingRed/20 transform group-hover:rotate-6 transition-all duration-300">
                <benefit.Icon 
                  size={32} 
                  className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
                />
              </div>
              <h3 className="text-2xl font-oswald font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 font-roboto leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
}
