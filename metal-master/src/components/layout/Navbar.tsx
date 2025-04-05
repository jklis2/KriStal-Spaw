"use client"

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-industrialGray text-white shadow-lg border-b-2 border-weldingRed">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="font-oswald text-2xl font-bold text-white group-hover:text-weldingRed transition-colors duration-300">
              Metal<span className="text-weldingRed group-hover:text-white transition-colors duration-300">Master</span>
            </span>
            <span className="text-weldingRed text-3xl animate-pulse">🔥</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-roboto hover:text-ctaOrange transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ctaOrange hover:after:w-full after:transition-all">Home</Link>
          {["O nas", "Oferta", "Galeria", "Blog", "FAQ", "Kontakt"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="font-roboto hover:text-ctaOrange transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ctaOrange hover:after:w-full after:transition-all"
            >
              {item}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <button 
          className="md:hidden text-2xl hover:text-ctaOrange transition-colors duration-300 p-2 rounded-lg hover:bg-gray-700/30" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX className="transform rotate-0 transition-transform duration-300" /> : <FiMenu className="transform rotate-180 transition-transform duration-300" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-industrialGray border-t border-gray-700 animate-fadeIn">
          <nav className="flex flex-col">
            <Link 
              href="/" 
              className="font-roboto p-4 hover:bg-gray-700/30 hover:text-ctaOrange transition-all duration-300 border-b border-gray-700" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {["O nas", "Oferta", "Galeria", "Blog", "FAQ", "Kontakt"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="font-roboto p-4 hover:bg-gray-700/30 hover:text-ctaOrange transition-all duration-300 border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="p-4 border-b border-gray-700 flex justify-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
