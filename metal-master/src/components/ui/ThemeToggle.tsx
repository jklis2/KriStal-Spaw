"use client";

import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsWrench } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // The actual theme switching functionality will be implemented later
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center p-1 rounded-full w-14 h-7 bg-gradient-to-r from-industrialGray to-gray-700 shadow-inner transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-weldingRed"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Welding sparks effect (visible in dark mode) */}
      {isDark && (
        <span className="absolute -top-1 right-1">
          <span className="flex space-x-1">
            <span className="animate-ping absolute h-1 w-1 rounded-full bg-yellow-300 opacity-75"></span>
            <span className="animate-ping absolute h-1.5 w-1.5 rounded-full bg-orange-400 opacity-75 delay-75"></span>
            <span className="animate-ping absolute h-1 w-1 rounded-full bg-yellow-200 opacity-75 delay-150"></span>
          </span>
        </span>
      )}
      
      {/* Toggle switch */}
      <span
        className={`flex items-center justify-center w-5 h-5 transform transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-7 bg-industrialGray" : "translate-x-0 bg-yellow-300"
        } rounded-full shadow-md`}
      >
        {isDark ? (
          <HiOutlineFire className="text-weldingRed text-xs" />
        ) : (
          <FiSun className="text-orange-600 text-xs" />
        )}
      </span>
      
      {/* Welding tool decoration */}
      <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
        <BsWrench className={`text-gray-400 rotate-45 ${isDark ? "text-opacity-70" : "text-opacity-40"}`} size={12} />
      </span>
    </button>
  );
}
