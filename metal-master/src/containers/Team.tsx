"use client";

import Image from "next/image";
import { FaEnvelope, FaPhone, FaQuoteLeft, FaUserTie, FaTools, FaAward } from "react-icons/fa";
import { teamItems } from "@/consts/teamItems";
import { useTheme } from "@/components/providers/ThemeProvider";
import SectionHeader from "@/components/ui/SectionHeader";
import BackgroundPattern from "@/components/ui/BackgroundPattern";

export default function Team() {
  const { theme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : true;

  const fallbackImage = "/images/photoPlaceholder.webp";

  return (
    <section
      className={`py-24 relative overflow-hidden ${
        isDark ? "bg-industrialGray" : "bg-industrialLight"
      }`}
    >
      <div className="absolute top-20 right-0 w-64 h-64 bg-weldingRed/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-ctaOrange/5 rounded-full filter blur-3xl"></div>
      <BackgroundPattern isDark={isDark} />
      <div className="container mx-auto px-6 relative">
        <SectionHeader
          title="Nasz Zespół"
          subtitle="PROFESJONALIŚCI"
          isDark={isDark}
        >
          Poznaj ludzi, którzy tworzą naszą firmę. Łączymy wieloletnie
          doświadczenie z pasją do spawalnictwa.
        </SectionHeader>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group mx-auto w-full max-w-[90%] md:max-w-[95%] lg:max-w-[90%]">
            <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-weldingRed/20 to-ctaOrange/10 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 opacity-80"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={teamItems.img}
                alt={teamItems.name}
                width={500}
                height={600}
                className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="bg-weldingRed text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                    {teamItems.role}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full">
                    {teamItems.experience} lat doświadczenia
                  </span>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-oswald font-bold">
                  {teamItems.name}
                </h3>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div
              className={`p-6 rounded-xl ${
                isDark ? "bg-gray-900/50" : "bg-white/90 shadow-md"
              }`}
            >
              <div className="flex gap-4 mb-4">
                <FaQuoteLeft className="text-weldingRed/20 text-4xl flex-shrink-0" />
                <p
                  className={`font-roboto italic leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {teamItems.quote ||
                    "Jako spawacz z wieloletnim doświadczeniem, wierzę że jakość i precyzja są kluczem do trwałych konstrukcji. Każdy projekt traktuję z najwyższą starannością, bo wiem, że moja praca ma służyć ludziom przez lata."}
                </p>
              </div>
            </div>
            <div>
              <p
                className={`font-roboto leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {teamItems.description}
              </p>
            </div>
            <div
              className={`p-6 rounded-xl ${
                isDark ? "bg-gray-900/50" : "bg-white/90 shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-weldingRed/10">
                  <FaTools className="text-weldingRed" />
                </div>
                <h4
                  className={`text-xl font-oswald font-bold ${
                    isDark ? "text-white" : "text-steelBlue-dark"
                  }`}
                >
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
            <div
              className={`p-6 rounded-xl ${
                isDark ? "bg-gray-900/50" : "bg-white/90 shadow-md"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-weldingRed/10">
                  <FaUserTie className="text-weldingRed" />
                </div>
                <h4
                  className={`text-xl font-oswald font-bold ${
                    isDark ? "text-white" : "text-steelBlue-dark"
                  }`}
                >
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
