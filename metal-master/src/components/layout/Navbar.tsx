"use client"

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-industrialGray text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold text-weldingRed">Metal Master</span>
            <span className="text-weldingRed text-3xl">🔥</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-ctaOrange transition-colors">Home</Link>
          {["O nas", "Oferta", "Galeria", "FAQ", "Kontakt"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-ctaOrange transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-industrialGray p-4">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="block text-center hover:text-ctaOrange transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            {["O nas", "Oferta", "Galeria", "FAQ", "Kontakt"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="block text-center hover:text-ctaOrange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
