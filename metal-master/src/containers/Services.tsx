"use client";

import { servicesItems } from "@/consts/servicesItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <section className={`py-24 relative overflow-hidden ${
      isDark ? "bg-industrialGray" : "bg-industrialLight"
    }`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: isDark
              ? "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z\' fill=\'%23fff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')"
              : "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z\' fill=\'%23000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')"
          }}
        ></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-weldingRed/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-ctaOrange/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className={`px-4 py-1 rounded-full text-sm font-medium ${
              isDark ? "bg-weldingRed/20 text-weldingRed" : "bg-weldingRed/10 text-weldingRed"
            }`}>
              NASZE USŁUGI
            </span>
          </div>
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${
            isDark ? "text-white" : "text-steelBlue-dark"
          }`}>
            Czym się zajmujemy?
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform -skew-x-12"></div>
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Oferujemy kompleksowe usługi spawalnicze i ślusarskie dla klientów indywidualnych i firm.
            Każdy projekt traktujemy z najwyższą starannością.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesItems.map((service, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm rounded-xl p-8 group transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-weldingRed shadow-lg ${
                isDark
                  ? "bg-gray-900/50 hover:bg-gray-800/70 shadow-black/20"
                  : "bg-white/90 hover:bg-white shadow-gray-200/70"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 ${
                  isDark
                    ? "bg-weldingRed/10 group-hover:bg-weldingRed/20"
                    : "bg-weldingRed/5 group-hover:bg-weldingRed/10"
                }`}>
                  <service.Icon 
                    className="text-weldingRed group-hover:text-ctaOrange transition-colors duration-300" 
                    size={32}
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
              
              <h3 className={`text-2xl font-oswald font-bold mb-4 group-hover:text-weldingRed transition-colors duration-300 ${
                isDark ? "text-white" : "text-steelBlue-dark"
              }`}>
                {service.title}
              </h3>
              
              <p className={`font-roboto leading-relaxed mb-6 transition-colors duration-300 ${
                isDark
                  ? "text-gray-400 group-hover:text-gray-300"
                  : "text-gray-600 group-hover:text-gray-700"
              }`}>
                {service.description}
              </p>
              
              <div className={`mt-auto pt-4 border-t border-dashed flex justify-between items-center ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}>
                <span className={`text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}>
                  Dowiedz się więcej
                </span>
                <Link href="/oferta" className="group/arrow">
                  <div className={`p-2 rounded-full group-hover/arrow:bg-weldingRed transition-all duration-300 ${
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  }`}>
                    <FaArrowRight className="text-weldingRed group-hover/arrow:text-white transition-colors duration-300" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA button */}
        <div className="text-center mt-16">
          <Link href="/oferta" className="inline-flex items-center gap-2 bg-weldingRed text-white px-8 py-4 rounded-lg font-medium hover:bg-ctaOrange transition-all duration-300 shadow-lg shadow-weldingRed/20 hover:shadow-ctaOrange/30">
            <span>Zobacz pełną ofertę</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
