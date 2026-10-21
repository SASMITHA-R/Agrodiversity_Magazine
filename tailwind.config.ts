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
          dark: "#263F5B",
          forest: "#314F70",
          primary: "#263F5B",
          leaf: "#4F8DB8",
          emerald: "#5DA0CD",
          sage: "#8FC9EF",
          tint: "#D7EEFF",
          surface: "#EAF6FF",
          cream: "#FFFFFF",
          earth: "#31465C",
          clay: "#52718F",
          gold: "#D4AF37",
          "gold-dark": "#B38F20",
          amber: "#E9C46A",
        },
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "Cambria", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        'journal': '0 4px 20px -2px rgba(38, 63, 91, 0.08), 0 2px 6px -1px rgba(38, 63, 91, 0.04)',
        'journal-hover': '0 12px 32px -4px rgba(38, 63, 91, 0.13), 0 4px 12px -2px rgba(38, 63, 91, 0.08)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
