import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        // Core brand palette — sourced directly from the approved style guide
        primary: {
          DEFAULT: "#1789FF", // Bright Cyan Blue
          50: "#EAF4FF",
          100: "#D6E9FF",
          200: "#ADD3FF",
          300: "#7FB9FF",
          400: "#4A9EFF",
          500: "#1789FF",
          600: "#0E6FDE",
          700: "#0B57AF",
          800: "#0B4483",
          900: "#0C3A6B",
        },
        navy: {
          DEFAULT: "#0F3863", // Deep Navy Blue
          50: "#EEF3F8",
          100: "#D6E1EC",
          200: "#AFC4DA",
          300: "#7FA0C0",
          400: "#4D77A0",
          500: "#2C5480",
          600: "#1B3F66",
          700: "#0F3863",
          800: "#0B2A4A",
          900: "#081E36",
        },
        skyfaint: "#E6F4FF", // Very Light Blue
        mist: "#F5FAFF", // Soft neutral / light grey-blue
        paper: "#FFFFFF",
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" }],
        "h2": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "h3": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 56, 99, 0.06), 0 8px 24px -8px rgba(15, 56, 99, 0.08)",
        card: "0 4px 16px -4px rgba(15, 56, 99, 0.08), 0 12px 32px -12px rgba(15, 56, 99, 0.10)",
        lift: "0 12px 32px -8px rgba(15, 56, 99, 0.16), 0 4px 12px -4px rgba(15, 56, 99, 0.10)",
        glow: "0 8px 24px -6px rgba(23, 137, 255, 0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drip-sway": {
          "0%, 100%": { transform: "scaleY(1) translateY(0)" },
          "50%": { transform: "scaleY(1.06) translateY(1px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "drip-sway": "drip-sway 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
