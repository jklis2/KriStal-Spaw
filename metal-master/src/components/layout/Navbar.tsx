"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useTheme } from "@/components/providers/ThemeProvider";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} ${scrolled ? 'shadow-xl' : 'shadow-md'} border-b-2 border-weldingRed ${
      isDark
        ? `${scrolled ? 'bg-industrialGray/95 backdrop-blur-md' : 'bg-industrialGray'} text-white`
        : `${scrolled ? 'bg-industrialLight/95 backdrop-blur-md' : 'bg-industrialLight'} text-steelBlue-dark`
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-weldingRed to-ctaOrange p-0.5 shadow-xl transition-all duration-300 group-hover:shadow-weldingRed/50 group-hover:scale-105">
              <div className={`rounded-xl ${isDark ? 'bg-zinc-900' : 'bg-white'} flex items-center justify-center`} style={{width: scrolled ? '64px' : '74px', height: scrolled ? '64px' : '74px'}}>
                <Image 
                  src="/metalMaster/logo.svg" 
                  alt="KRISTAL-SPAW Logo" 
                  width={scrolled ? 60 : 70}
                  height={scrolled ? 60 : 70}
                  className="w-full h-full p-1 transition-all duration-300 drop-shadow-md"
                  priority
                />
              </div>
              
              {/* Dekoracyjny element */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-weldingRed/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-ctaOrange/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="flex flex-col">
              <span className={`font-oswald text-2xl font-bold transition-colors duration-300 ${
                isDark 
                  ? "text-white group-hover:text-weldingRed drop-shadow-md" 
                  : "text-steelBlue-dark group-hover:text-weldingRed drop-shadow-sm"
              }`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-weldingRed to-ctaOrange">KRISTAL</span>-SPAW
              </span>
              <span className={`text-xs font-medium tracking-wider ${
                isDark 
                  ? 'text-gray-300 group-hover:text-gray-200' 
                  : 'text-gray-600 group-hover:text-gray-800'
              } transition-colors duration-300`}>
                PROFESJONALNE SPAWALNICTWO
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-roboto font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-ctaOrange after:transition-all ${pathname === '/' ? 'text-ctaOrange after:w-full' : 'hover:text-ctaOrange after:w-0 hover:after:w-full'}`}
          >
            Home
          </Link>
          {["O nas", "Oferta", "Galeria", "Blog", "FAQ", "Kontakt"].map((item) => {
            const itemPath = `/${item.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === itemPath;
            return (
              <Link
                key={item}
                href={itemPath}
                className={`font-roboto font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-ctaOrange after:transition-all ${isActive ? 'text-ctaOrange after:w-full' : 'hover:text-ctaOrange after:w-0 hover:after:w-full'}`}
              >
                {item}
              </Link>
            );
          })}
          <div className="pl-4 border-l border-weldingRed/30">
            <ThemeToggle />
          </div>
        </div>

        <button 
          className={`md:hidden text-2xl hover:text-ctaOrange transition-all duration-300 p-2 rounded-lg ${
            isDark
              ? "hover:bg-weldingRed/10"
              : "hover:bg-weldingRed/5"
          }`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? 
            <FiX className="transform scale-110 transition-transform duration-300" /> : 
            <FiMenu className="transform transition-transform duration-300" />
          }
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div 
        className={`md:hidden fixed top-[76px] right-0 bottom-0 z-50 w-[280px] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${
          isDark
            ? "bg-industrialGray border-l border-gray-700"
            : "bg-industrialLight border-l border-gray-200"
        }`}
      >
        <nav className="flex flex-col h-full overflow-y-auto">
          <div className="p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}">
            <p className="text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}">
              Menu główne
            </p>
          </div>
          <Link 
            href="/" 
            className={`font-roboto p-4 transition-all duration-300 border-b flex items-center gap-3 ${
              isDark
                ? `${pathname === '/' ? 'bg-gray-800 text-ctaOrange' : 'hover:bg-gray-800'} border-gray-700`
                : `${pathname === '/' ? 'bg-gray-100 text-ctaOrange' : 'hover:bg-gray-100'} border-gray-200`
            }`} 
            onClick={() => setIsOpen(false)}
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-weldingRed/10 text-weldingRed">🏠</span>
            Home
          </Link>
          {["O nas", "Oferta", "Galeria", "Blog", "FAQ", "Kontakt"].map((item, index) => {
            const itemPath = `/${item.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === itemPath;
            return (
              <Link
                key={item}
                href={itemPath}
                className={`font-roboto p-4 transition-all duration-300 border-b flex items-center gap-3 ${
                  isDark
                    ? `${isActive ? 'bg-gray-800 text-ctaOrange' : 'hover:bg-gray-800'} border-gray-700`
                    : `${isActive ? 'bg-gray-100 text-ctaOrange' : 'hover:bg-gray-100'} border-gray-200`
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-weldingRed/10 text-weldingRed">
                  {['👥', '🔧', '🖼️', '📝', '❓', '📞'][index]}
                </span>
                {item}
              </Link>
            );
          })}
          <div className="mt-auto p-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center">
            <span className="text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}">
              Przełącz motyw
            </span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
