import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: {
          50: "#fafaf7",
          100: "#f5f4ee",
          200: "#eceae0",
        },
        ink: {
          900: "#0c0c0a",
          800: "#1a1a17",
          700: "#2b2b27",
        },
        moss: {
          50: "#eef3ef",
          400: "#5a8a6e",
          500: "#3f6e54",
          600: "#2f5640",
          700: "#244231",
          800: "#1a3023",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1400px",
      },
      boxShadow: {
        diffusion: "0 24px 60px -28px rgba(20, 24, 28, 0.18)",
        edge: "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 0 rgba(20,24,28,0.04)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
