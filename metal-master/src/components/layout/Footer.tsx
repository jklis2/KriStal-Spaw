"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <footer className={`relative border-t-2 border-weldingRed ${
      isDark
        ? "bg-industrialGray text-white"
        : "bg-industrialLight text-steelBlue-dark"
    }`}>
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-weldingRed via-ctaOrange to-weldingRed"></div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        {/* Footer top with logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-weldingRed to-ctaOrange p-0.5 shadow-xl transition-all duration-300 hover:shadow-weldingRed/50 hover:scale-105 group">
            <div className={`rounded-xl p-3 ${isDark ? 'bg-zinc-900' : 'bg-white'}`}>
              <Image 
                src="/metalMaster/logo.svg" 
                alt="KRISTAL-SPAW Logo" 
                width={100}
                height={100}
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            
            {/* Dekoracyjne elementy */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-weldingRed/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-ctaOrange/10 rounded-full blur-xl"></div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h2 className={`font-oswald text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-steelBlue-dark"}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-weldingRed to-ctaOrange">KRISTAL</span>-SPAW
            </h2>
            <p className={`text-sm max-w-md text-center md:text-left mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Profesjonalne usługi spawalnicze, produkcja ogrodzeń i konstrukcji metalowych najwyższej jakości od 2005 roku.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-weldingRed to-ctaOrange rounded-full mb-4"></div>
          </div>
        </div>
        
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="font-oswald text-xl font-bold text-weldingRed mb-6 relative inline-block">
              Kontakt
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-ctaOrange"></div>
            </h3>
            <div className="font-roboto space-y-5">
              <div className={`flex items-start gap-4 group hover:translate-x-1 transition-all duration-300`}>
                <div className={`p-3 rounded-lg flex-shrink-0 group-hover:bg-weldingRed group-hover:text-white transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}>
                  <FaMapMarkerAlt className="text-weldingRed group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Adres</h4>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>ul. Przemysłowa 10, 00-001 Warszawa</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 group hover:translate-x-1 transition-all duration-300`}>
                <div className={`p-3 rounded-lg flex-shrink-0 group-hover:bg-weldingRed group-hover:text-white transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}>
                  <FaPhone className="text-weldingRed group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Telefon</h4>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>+48 123 456 789</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 group hover:translate-x-1 transition-all duration-300`}>
                <div className={`p-3 rounded-lg flex-shrink-0 group-hover:bg-weldingRed group-hover:text-white transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}>
                  <FaEnvelope className="text-weldingRed group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Email</h4>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>kontakt@metalmaster.pl</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 group hover:translate-x-1 transition-all duration-300`}>
                <div className={`p-3 rounded-lg flex-shrink-0 group-hover:bg-weldingRed group-hover:text-white transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}>
                  <FaClock className="text-weldingRed group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Godziny pracy</h4>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>Pon-Pt: 8:00 - 17:00</p>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>Sobota: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="font-oswald text-xl font-bold text-weldingRed mb-6 relative inline-block">
              Szybkie linki
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-ctaOrange"></div>
            </h3>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <Link 
                href="/" 
                className={`font-roboto inline-flex items-center hover:translate-x-2 hover:text-ctaOrange transition-all duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                <span className="mr-2 text-weldingRed">→</span>
                Home
              </Link>
              {["O nas", "Oferta", "Galeria", "Blog", "FAQ", "Kontakt"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className={`font-roboto inline-flex items-center hover:translate-x-2 hover:text-ctaOrange transition-all duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  <span className="mr-2 text-weldingRed">→</span>
                  {item}
                </Link>
              ))}
            </nav>
            
            <div className={`mt-8 p-4 rounded-lg ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
              <h4 className="font-oswald text-lg font-bold mb-2">Potrzebujesz wyceny?</h4>
              <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Skontaktuj się z nami, aby otrzymać bezpłatną wycenę Twojego projektu.
              </p>
              <Link href="/kontakt" legacyBehavior>
                <a className="inline-block bg-weldingRed text-white px-4 py-2 rounded font-medium hover:bg-ctaOrange transition-all duration-300">
                  Zapytaj o wycenę
                </a>
              </Link>
            </div>
          </div>
          
          {/* Social media and newsletter */}
          <div className="space-y-6">
            <h3 className="font-oswald text-xl font-bold text-weldingRed mb-6 relative inline-block">
              Bądźmy w kontakcie
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-ctaOrange"></div>
            </h3>
            
            {/* Social media */}
            <div className="flex gap-4 mb-8">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                className={`p-3 rounded-lg hover:bg-weldingRed hover:text-white hover:scale-110 transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl text-weldingRed hover:text-white transition-colors duration-300" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className={`p-3 rounded-lg hover:bg-weldingRed hover:text-white hover:scale-110 transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl text-weldingRed hover:text-white transition-colors duration-300" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className={`p-3 rounded-lg hover:bg-weldingRed hover:text-white hover:scale-110 transition-all duration-300 ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-weldingRed hover:text-white transition-colors duration-300" />
              </Link>
            </div>
            
            {/* Newsletter */}
            <div className={`p-6 rounded-lg ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
              <h4 className="font-oswald text-lg font-bold mb-2">Newsletter</h4>
              <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Zapisz się, aby otrzymywać najnowsze informacje i promocje.
              </p>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Twój adres email" 
                  className={`px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-weldingRed ${
                    isDark 
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                  }`}
                />
                <button 
                  type="submit" 
                  className="bg-weldingRed text-white px-4 py-2 rounded font-medium hover:bg-ctaOrange transition-all duration-300"
                >
                  Zapisz się
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer bottom */}
      <div className={`border-t ${
        isDark ? "border-gray-800" : "border-gray-200"
      }`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-center md:text-left font-roboto text-sm mb-4 md:mb-0 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}>
              &copy; {new Date().getFullYear()} Metal Master. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/polityka-prywatnosci" 
                className={`text-sm hover:text-ctaOrange transition-colors duration-300 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Polityka prywatności
              </Link>
              <Link 
                href="/regulamin" 
                className={`text-sm hover:text-ctaOrange transition-colors duration-300 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
