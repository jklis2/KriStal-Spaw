"use client";

import Image from "next/image";
import { FaEnvelope, FaPhone, FaQuoteLeft, FaUserTie, FaTools, FaAward } from "react-icons/fa";
import { teamItems } from "@/consts/teamItems";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function Team() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Fallback image jeśli zdjęcie nie istnieje
  const fallbackImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000";
  
  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? "bg-industrialGray" : "bg-industrialLight"}`}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-weldingRed/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-ctaOrange/5 rounded-full filter blur-3xl"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: isDark
              ? "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z\' fill=\'%23fff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')"
              : "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172zm5.656 0l-9.9 9.9-2.172 2.172 7.9-7.9h4.172z\' fill=\'%23000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')",
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className={`px-4 py-1 rounded-full text-sm font-medium ${
              isDark ? "bg-weldingRed/20 text-weldingRed" : "bg-weldingRed/10 text-weldingRed"
            }`}>
              PROFESJONALIŚCI
            </span>
          </div>
          <h2 className={`text-5xl font-bold font-oswald relative inline-block ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
            Nasz Zespół
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-weldingRed to-ctaOrange transform -skew-x-12"></div>
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Poznaj ludzi, którzy tworzą naszą firmę. Łączymy wieloletnie doświadczenie z pasją do spawalnictwa.
          </p>
        </div>
        
        {/* Team member profile */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-weldingRed/20 to-ctaOrange/10 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 opacity-80"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={teamItems.img}
                alt={teamItems.name}
                width={500}
                height={600}
                className="w-full h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Image overlay content */}
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-weldingRed text-white text-xs font-bold px-3 py-1 rounded-full">
                    {teamItems.role}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {teamItems.experience} lat doświadczenia
                  </span>
                </div>
                <h3 className="text-white text-3xl font-oswald font-bold">{teamItems.name}</h3>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Quote */}
            <div className={`p-6 rounded-xl ${
              isDark ? "bg-gray-900/50" : "bg-white/90 shadow-md"
            }`}>
              <div className="flex gap-4 mb-4">
                <FaQuoteLeft className="text-weldingRed/20 text-4xl flex-shrink-0" />
                <p className={`font-roboto italic leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  {teamItems.quote || "Jako spawacz z wieloletnim doświadczeniem, wierzę że jakość i precyzja są kluczem do trwałych konstrukcji. Każdy projekt traktuję z najwyższą starannością, bo wiem, że moja praca ma służyć ludziom przez lata."}
                </p>
              </div>
            </div>
            
            {/* Description */}
            <div>
              <p className={`font-roboto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {teamItems.description}
              </p>
            </div>
            
            {/* Expertise */}
            <div className={`p-6 rounded-xl ${
              isDark ? "bg-gray-900/50" : "bg-white/90 shadow-md"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-weldingRed/10">
                  <FaTools className="text-weldingRed" />
                </div>
                <h4 className={`text-xl font-oswald font-bold ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
                  Specjalizacje
                </h4>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {teamItems.expertise.map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-3 rounded-lg font-roboto transition-all duration-300 flex items-center gap-2 ${
                      isDark 
                        ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/10 hover:text-white" 
                        : "bg-gray-100 text-gray-600 hover:bg-weldingRed/5 hover:text-steelBlue-dark"
                    }`}
                  >
                    <FaAward className="text-weldingRed text-sm" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact */}
            <div className={`p-6 rounded-xl ${
              isDark ? "bg-gray-900/50" : "bg-white/90 shadow-md"
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-weldingRed/10">
                  <FaUserTie className="text-weldingRed" />
                </div>
                <h4 className={`text-xl font-oswald font-bold ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
                  Kontakt bezpośredni
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href={`tel:${teamItems.contact.phone}`}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/20 hover:text-white" 
                      : "bg-gray-100 text-gray-600 hover:bg-weldingRed/10 hover:text-steelBlue-dark"
                  }`}
                >
                  <FaPhone className="text-weldingRed" />
                  <span className="font-roboto">{teamItems.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${teamItems.contact.email}`}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? "bg-gray-800 text-gray-300 hover:bg-weldingRed/20 hover:text-white" 
                      : "bg-gray-100 text-gray-600 hover:bg-weldingRed/10 hover:text-steelBlue-dark"
                  }`}
                >
                  <FaEnvelope className="text-weldingRed" />
                  <span className="font-roboto">{teamItems.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}
