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
        
        // Premium light grays
        industrialGray: {
          DEFAULT: "#F5F5F5",
          light: "#FAFAFA",
          lighter: "#FFFFFF"
        },
        
        // Premium gold accents
        weldingRed: {
          DEFAULT: "#D4AF37",
          light: "#E8D4A0",
          dark: "#B8941F"
        },
        ctaOrange: {
          DEFAULT: "#C9A961",
          light: "#E0C98A",
          dark: "#A88B3D"
        },
        metalSilver: {
          DEFAULT: "#E8E8E8",
          light: "#F2F2F2",
          dark: "#D1D1D1"
        },
        steelBlue: {
          DEFAULT: "#A0A0A0",
          light: "#C0C0C0",
          dark: "#808080"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
