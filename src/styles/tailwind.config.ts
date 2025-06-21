import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        "modern-negra": ["var(--font-modern-negra)"],
      },
      colors: {
        yellow: "var(--color-yellow)",
        white100: "var(--color-white-100)",
      },
    },
  },
  plugins: [],
};

export default config;
