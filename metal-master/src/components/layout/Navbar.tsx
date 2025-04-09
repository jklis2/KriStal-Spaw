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

  // Handle scroll effect - only when menu is closed
  useEffect(() => {
    // Only add scroll listener if menu is closed
    if (!isOpen) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen]);
  
  // Handle menu opening/closing and scroll behavior
  useEffect(() => {
    if (isOpen) {
      // Scroll to top immediately when menu opens
      window.scrollTo({ top: 0, behavior: 'auto' });
      
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Re-enable scrolling when menu closes
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} ${scrolled ? 'shadow-xl' : 'shadow-md'} border-b-2 border-weldingRed ${
      isDark
        ? `${scrolled ? 'bg-industrialGray/95 backdrop-blur-md' : 'bg-industrialGray'} text-white`
        : `${scrolled ? 'bg-industrialLight/95 backdrop-blur-md' : 'bg-industrialLight'} text-steelBlue-dark`
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6 overflow-visible">
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer group overflow-visible">
            <div className="relative overflow-visible rounded-xl bg-gradient-to-br from-weldingRed to-ctaOrange p-0.5 shadow-xl transition-all duration-300 group-hover:shadow-weldingRed/50 group-hover:scale-105">
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
              <span className={`font-oswald text-xl lg:text-2xl font-bold transition-colors duration-300 ${
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

        <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 flex-nowrap whitespace-nowrap">
            <Link 
            href="/" 
            className={`font-roboto text-sm lg:text-base xl:text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-ctaOrange after:transition-all whitespace-nowrap ${pathname === '/' ? 'text-ctaOrange after:w-full' : 'hover:text-ctaOrange after:w-0 hover:after:w-full'}`}
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
                className={`font-roboto text-sm lg:text-base xl:text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-ctaOrange after:transition-all whitespace-nowrap ${isActive ? 'text-ctaOrange after:w-full' : 'hover:text-ctaOrange after:w-0 hover:after:w-full'}`}
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
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-label="Menu"
        >
          {isOpen ? 
            <FiX className="transform scale-110 transition-transform duration-300" /> : 
            <FiMenu className="transform transition-transform duration-300" />
          }
        </button>
      </div>

      {/* Mobile menu with animation */}
      {/* Overlay for background dimming */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      ></div>
      
      {/* Full-width mobile menu */}
      <div 
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        } ${
          isDark
            ? "bg-industrialGray/95 backdrop-blur-md"
            : "bg-industrialLight/95 backdrop-blur-md"
        }`}
        style={{ height: '100vh' }}
      >
        <div className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-weldingRed/30 ${
          isDark ? 'bg-industrialGray/95' : 'bg-industrialLight/95'
        } backdrop-blur-md`}>
          <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-steelBlue-dark'}`}>
            Menu główne
          </p>
          <button 
            className={`text-2xl hover:text-ctaOrange transition-all duration-300 p-2 rounded-lg ${
              isDark
                ? "hover:bg-weldingRed/10"
                : "hover:bg-weldingRed/5"
            }`} 
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <FiX className="transform scale-110 transition-transform duration-300" />
          </button>
        </div>
        <nav className="flex flex-col h-full max-w-4xl mx-auto px-6 pt-20 pb-20">
          <Link 
            href="/" 
            className={`font-roboto p-4 my-1 rounded-lg transition-all duration-300 flex items-center gap-3 ${
              isDark
                ? `${pathname === '/' ? 'bg-gray-800 text-ctaOrange' : 'hover:bg-gray-800 hover:text-ctaOrange'}`
                : `${pathname === '/' ? 'bg-gray-100 text-ctaOrange' : 'hover:bg-gray-100 hover:text-ctaOrange'}`
            }`} 

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
                className={`font-roboto p-4 my-1 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  isDark
                    ? `${isActive ? 'bg-gray-800 text-ctaOrange' : 'hover:bg-gray-800 hover:text-ctaOrange'}`
                    : `${isActive ? 'bg-gray-100 text-ctaOrange' : 'hover:bg-gray-100 hover:text-ctaOrange'}`
                }`}

              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-weldingRed/10 text-weldingRed">
                  {['👥', '🔧', '🖼️', '📝', '❓', '📞'][index]}
                </span>
                {item}
              </Link>
            );
          })}
          <div className="mt-auto p-6 border-t border-weldingRed/30 flex justify-between items-center">
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
