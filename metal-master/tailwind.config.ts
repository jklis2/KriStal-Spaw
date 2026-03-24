import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      colors: {
        // Base colors
        background: {
          DEFAULT: "var(--background)",
          light: "var(--background-light)"
        },
        foreground: "var(--foreground)",
        
        // Primary dark colors
        industrialGray: {
          DEFAULT: "#1f2530",
          light: "#2a3241",
          lighter: "#3a4455"
        },
        
        // Accent colors
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
