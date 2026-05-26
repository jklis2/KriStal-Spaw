"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiUsers, FiTool, FiImage, FiFileText, FiHelpCircle, FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when navigating to a different page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle scroll effect - only when menu is closed
  useEffect(() => {
    // Only add scroll listener if menu is closed
    if (!isOpen) {
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const shouldBeScrolled = window.scrollY > 50;
            setScrolled((prev) => {
              // Only update state if value actually changes
              if (prev !== shouldBeScrolled) {
                return shouldBeScrolled;
              }
              return prev;
            });
            ticking = false;
          });
          ticking = true;
        }
      };

      // Set initial state
      handleScroll();

      window.addEventListener('scroll', handleScroll, { passive: true });
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} ${scrolled ? 'shadow-xl' : 'shadow-md'} border-b-2 border-weldingRed ${scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'} text-gray-900`}>
      <div className="container mx-auto flex items-center justify-between px-6 overflow-visible">
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer group overflow-visible">
            <div className="relative overflow-visible rounded-xl bg-gradient-to-br from-weldingRed to-ctaOrange p-0.5 shadow-xl transition-all duration-300 group-hover:shadow-weldingRed/50 group-hover:scale-105">
              <div className="rounded-xl bg-zinc-900 flex items-center justify-center" style={{width: scrolled ? '64px' : '74px', height: scrolled ? '64px' : '74px'}}>
                <Image 
                  src="/logo.svg" 
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
              <span className="font-oswald text-xl lg:text-2xl font-bold transition-colors duration-300 text-gray-900 group-hover:text-weldingRed drop-shadow-md">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-weldingRed to-ctaOrange">KriStal</span>-Spaw
              </span>
              <span className="text-xs font-medium tracking-wider text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                Dopasujemy każdy projekt do Twoich potrzeb
              </span>
            </div>
          </div>
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 flex-nowrap whitespace-nowrap">
            <Link 
            href="/" 
            className={`font-roboto text-sm lg:text-base xl:text-lg font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-ctaOrange after:transition-all whitespace-nowrap ${pathname === '/' ? 'text-ctaOrange after:w-full' : 'hover:text-ctaOrange after:w-0 hover:after:w-full'}`}
          >
            Home
          </Link>
          {["Oferta", "Galeria", "Blog", "FAQ", "Kontakt"].map((item) => {
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
        </nav>

        <button 
          className="md:hidden text-2xl hover:text-ctaOrange transition-all duration-300 p-2 rounded-lg hover:bg-weldingRed/10" 
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
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
        } bg-white/95 backdrop-blur-md`}
        style={{ height: '100vh' }}
      >
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-weldingRed/30 bg-white/95 backdrop-blur-md">
          <p className="text-xl font-bold text-gray-900">
            Menu główne
          </p>
          <button 
            className="text-2xl hover:text-ctaOrange transition-all duration-300 p-2 rounded-lg hover:bg-weldingRed/10" 
            onClick={() => setIsOpen(false)}
            aria-label="Zamknij menu"
          >
            <FiX className="transform scale-110 transition-transform duration-300" />
          </button>
        </div>
        <nav aria-label="Menu mobilne" className="flex flex-col h-full max-w-4xl mx-auto px-6 pt-20 pb-20">
          <Link 
            href="/" 
            className={`font-roboto p-4 my-1 rounded-lg transition-all duration-300 flex items-center gap-3 ${pathname === '/' ? 'bg-industrialGray text-ctaOrange' : 'text-gray-900 hover:bg-industrialGray hover:text-ctaOrange'}`} 

          >
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-weldingRed/10 text-weldingRed">
              <FiHome className="text-xl" />
            </span>
            Home
          </Link>
          {["Oferta", "Galeria", "Blog", "FAQ", "Kontakt"].map((item, index) => {
            const itemPath = `/${item.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === itemPath;
            return (
              <Link
                key={item}
                href={itemPath}
                className={`font-roboto p-4 my-1 rounded-lg transition-all duration-300 flex items-center gap-3 ${isActive ? 'bg-industrialGray text-ctaOrange' : 'text-gray-900 hover:bg-industrialGray hover:text-ctaOrange'}`}

              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-weldingRed/10 text-weldingRed">
                  {[<FiUsers key="users" className="text-xl" />, <FiTool key="tool" className="text-xl" />, <FiImage key="image" className="text-xl" />, <FiFileText key="file" className="text-xl" />, <FiHelpCircle key="help" className="text-xl" />, <FiPhone key="phone" className="text-xl" />][index]}
                </span>
                {item}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
