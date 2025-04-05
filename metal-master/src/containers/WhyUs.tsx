"use client";

import React from "react";
import Image from "next/image";
import { whyUsItems } from "@/consts/whyUsItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function WhyUs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? "bg-industrialGray" : "bg-industrialLight"}`}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-weldingRed/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-ctaOrange/5 to-transparent rounded-full blur-3xl"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: isDark
            ? "url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')"
            : "url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className={`px-4 py-1 rounded-full text-sm font-medium ${
              isDark ? "bg-weldingRed/20 text-weldingRed" : "bg-weldingRed/10 text-weldingRed"
            }`}>
              NASZE ATUTY
            </span>
          </div>
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Dlaczego Warto Nam Zaufać?
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform -skew-x-12"></div>
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Od lat dostarczamy najwyższej jakości usługi spawalnicze i ślusarskie.
            Poznaj powody, dla których klienci wybierają właśnie nas.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyUsItems.map((benefit, index) => (
            <div 
              key={index} 
              className={`backdrop-blur-sm rounded-xl p-8 group transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-weldingRed shadow-lg ${
                isDark
                  ? "bg-gray-900/50 hover:bg-gray-800/70 shadow-black/20"
                  : "bg-white/90 hover:bg-white shadow-gray-200/70"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 ${
                  isDark
                    ? "bg-weldingRed/10 group-hover:bg-weldingRed/20"
                    : "bg-weldingRed/5 group-hover:bg-weldingRed/10"
                }`}>
                  <benefit.Icon 
                    size={32} 
                    className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
                  />
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-gray-800 text-gray-400"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  0{index + 1}
                </span>
              </div>
              
              <h3 className={`text-2xl font-oswald font-bold mb-3 group-hover:text-weldingRed transition-colors duration-300 ${
                isDark ? "text-white" : "text-steelBlue-dark"
              }`}>
                {benefit.title}
              </h3>
              
              <p className={`font-roboto leading-relaxed transition-colors duration-300 ${
                isDark
                  ? "text-gray-400 group-hover:text-gray-300"
                  : "text-gray-600 group-hover:text-gray-700"
              }`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Testimonial section */}
        <div className={`rounded-2xl overflow-hidden shadow-xl ${
          isDark ? "bg-gray-900/50 shadow-black/20" : "bg-white/90 shadow-gray-200/70"
        }`}>
          <div className="grid md:grid-cols-5">
            {/* Image column */}
            <div className="md:col-span-2 relative h-64 md:h-auto">
              <Image
                src="/testimonial-image.jpg" // Placeholder - replace with actual image
                alt="Zadowolony klient"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                // Fallback if image doesn't exist
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-weldingRed text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                  OPINIA KLIENTA
                </div>
                <h3 className="text-white text-xl font-bold">Jan Kowalski</h3>
                <p className="text-gray-300 text-sm">Firma budowlana, Warszawa</p>
              </div>
            </div>
            
            {/* Testimonial content */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-weldingRed/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="relative">
                <p className={`text-xl font-medium mb-8 ${isDark ? "text-white" : "text-gray-800"}`}>
                  Współpraca z firmą KRISTAL-SPAW to czysta przyjemność. Profesjonalne podejście, terminowość i najwyższa jakość wykonania. Konstrukcje, które dla nas wykonali, są nie tylko funkcjonalne, ale również estetyczne. Polecam każdemu, kto szuka solidnego partnera w branży metalowej.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>5.0 / 5.0</span>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="text-center mt-16">
          <Link href="/o-nas" className="inline-flex items-center gap-2 bg-weldingRed text-white px-8 py-4 rounded-lg font-medium hover:bg-ctaOrange transition-all duration-300 shadow-lg shadow-weldingRed/20 hover:shadow-ctaOrange/30">
            <span>Poznaj nas lepiej</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
