import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
