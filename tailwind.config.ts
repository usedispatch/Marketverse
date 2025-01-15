import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["VT323", "Monaco", "Lucida Console", "monospace"],
        lcd: ["Share Tech Mono", "VT323", "Monaco", "monospace"],
      },
      colors: {
        calculator: {
          bg: "#FFFFFF",
          text: "#000000",
          dim: "#666666",
          highlight: "#000000",
          error: "#FF0000",
          success: "#008000",
        },
        background: "var(--calculator-bg)",
        foreground: "var(--calculator-text)",
        card: {
          DEFAULT: "var(--calculator-bg)",
          foreground: "var(--calculator-text)",
        },
        primary: {
          DEFAULT: "var(--calculator-text)",
          foreground: "var(--calculator-bg)",
        },
        secondary: {
          DEFAULT: "var(--calculator-dim)",
          foreground: "var(--calculator-text)",
        },
        muted: {
          DEFAULT: "var(--calculator-dim)",
          foreground: "var(--calculator-text)",
        },
        accent: {
          DEFAULT: "var(--calculator-highlight)",
          foreground: "var(--calculator-bg)",
        },
        destructive: {
          DEFAULT: "var(--calculator-error)",
          foreground: "var(--calculator-bg)",
        },
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      animation: {
        'lcd-blink': 'lcd-blink 1s steps(1) infinite',
        'scan-line': 'scan-line 10s linear infinite',
      },
      keyframes: {
        'lcd-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function({ addUtilities }) {
      const newUtilities = {
        '.lcd-frame': {
          border: '1px solid var(--calculator-text)',
          backgroundColor: 'var(--calculator-bg)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.05) 3px)',
            pointerEvents: 'none',
          },
        },
        '.lcd-scan-line': {
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '1px',
            background: 'rgba(0, 0, 0, 0.1)',
            animation: 'scan-line 10s linear infinite',
            pointerEvents: 'none',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;