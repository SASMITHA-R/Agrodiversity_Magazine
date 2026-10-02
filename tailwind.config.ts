import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          dark: "#0d2818",       // Deepest forest green
          forest: "#16382b",     // Deep editorial forest
          primary: "#1b4332",    // Signature journal green
          leaf: "#2d6a4f",       // Vibrant foliage green
          emerald: "#40916c",    // Midtone crop green
          sage: "#74c69d",       // Light sage
          tint: "#d8f3dc",       // Pale mint tint
          surface: "#f7f9f7",    // Editorial paper background
          cream: "#f4f1ea",      // Warm journal card
          earth: "#5c4033",      // Earthy soil brown
          clay: "#8c5a3c",       // Warm terracotta/clay
          gold: "#d4af37",       // Scientific academic gold
          "gold-dark": "#b38f20",// Deep gold hover
          amber: "#e9c46a",      // Warm harvest amber
        },
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "Cambria", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        'journal': '0 4px 20px -2px rgba(27, 67, 50, 0.08), 0 2px 6px -1px rgba(27, 67, 50, 0.04)',
        'journal-hover': '0 12px 32px -4px rgba(27, 67, 50, 0.16), 0 4px 12px -2px rgba(27, 67, 50, 0.08)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
