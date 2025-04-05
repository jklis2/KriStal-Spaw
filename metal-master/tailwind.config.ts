import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base colors that change with theme
        background: {
          DEFAULT: "var(--background)",
          light: "var(--background-light)"
        },
        foreground: "var(--foreground)",
        
        // Dark theme (current) colors
        industrialGray: {
          DEFAULT: "#1f2530",
          light: "#2a3241",
          lighter: "#3a4455"
        },
        
        // Light theme colors
        industrialLight: {
          DEFAULT: "#f5f7fa",
          dark: "#e2e8f0",
          darker: "#cbd5e1"
        },
        
        // Accent colors that work in both themes
        weldingRed: {
          DEFAULT: "#E53E3E",
          light: "#FC8181",
          dark: "#C53030"
        },
        ctaOrange: {
          DEFAULT: "#DD6B20",
          light: "#F6AD55",
          dark: "#C05621"
        },
        metalSilver: {
          DEFAULT: "#A0AEC0",
          light: "#CBD5E0",
          dark: "#718096"
        },
        steelBlue: {
          DEFAULT: "#4A5568",
          light: "#718096",
          dark: "#2D3748"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
