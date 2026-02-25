import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#000000",
        surface: "#0B0B0B",
        accentA: "#FF7A00",
        accentB: "#FFD84D"
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 122, 0, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
