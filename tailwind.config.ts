import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: "#E07A5F",
          light: "#F4A261",
          dark: "#C66B52",
        },
        teal: {
          DEFAULT: "#3D5A80",
          light: "#81B29A",
          dark: "#293241",
        },
        cream: {
          DEFAULT: "#FAF8F5",
          dark: "#FFF8F0",
        },
        charcoal: "#2D3142",
        gray: {
          body: "#5C6370",
        },
      },
      fontFamily: {
        display: ["var(--font-nunito)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      boxShadow: {
        "soft": "0 4px 20px rgba(45, 49, 66, 0.08)",
        "lift": "0 12px 40px rgba(45, 49, 66, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
