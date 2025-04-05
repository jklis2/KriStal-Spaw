"use client";

import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function NotFound() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen text-center p-6 ${
      isDark ? "bg-industrialGray" : "bg-industrialLight"
    }`}>
      <h1 className={`text-6xl font-extrabold mb-4 font-oswald ${
        isDark ? "text-white" : "text-steelBlue-dark"
      }`}>🔥 404 🔥</h1>
      <h2 className={`text-2xl font-semibold mb-4 font-oswald ${
        isDark ? "text-gray-200" : "text-gray-700"
      }`}>Ups! Ta strona się dopiero spawa...</h2>
      <p className={`mb-6 max-w-lg font-roboto ${
        isDark ? "text-gray-300" : "text-gray-600"
      }`}>
        Wygląda na to, że trafiłeś w miejsce, gdzie iskry lecą, ale strona jeszcze nie zdążyła ostygnąć. 
        Może jest na warsztacie, a może ktoś zapomniał przyłożyć elektrody... 🤷‍♂️
      </p>
      <p className={`italic mb-6 font-roboto ${
        isDark ? "text-gray-400" : "text-gray-500"
      }`}>💡 Pro tip: Jeśli szukasz czegoś konkretnego, skontaktuj się z nami – pomożemy szybciej niż elektroda się nagrzewa!</p>
      
      <div className={`p-8 rounded-lg backdrop-blur-sm mb-8 ${
        isDark 
          ? "bg-gray-900/30 border border-gray-800" 
          : "bg-white/70 border border-gray-200 shadow-md"
      }`}>
        <div className="w-full h-0.5 bg-weldingRed/30 mb-6"></div>
        <p className={`font-roboto mb-6 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}>
          Sprawdź nasze popularne strony:
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className={`px-4 py-2 rounded ${
            isDark 
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          } transition-colors duration-300`}>
            Strona główna
          </Link>
          <Link href="/oferta" className={`px-4 py-2 rounded ${
            isDark 
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          } transition-colors duration-300`}>
            Oferta
          </Link>
          <Link href="/galeria" className={`px-4 py-2 rounded ${
            isDark 
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          } transition-colors duration-300`}>
            Galeria
          </Link>
          <Link href="/kontakt" className={`px-4 py-2 rounded ${
            isDark 
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          } transition-colors duration-300`}>
            Kontakt
          </Link>
        </div>
        <div className="w-full h-0.5 bg-weldingRed/30 mt-6"></div>
      </div>
      
      <Link href="/" legacyBehavior>
        <a
          className="inline-block bg-weldingRed text-white px-8 py-4 text-lg font-roboto font-semibold 
             rounded transform hover:-translate-y-1 hover:shadow-lg hover:shadow-weldingRed/50 
             transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Wróć na stronę główną</span>
          <div className="absolute inset-0 bg-ctaOrange transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </a>
      </Link>
    </div>
  );
}