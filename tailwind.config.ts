import { text } from "stream/consumers";
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
        "black-theme" : {
          hoverWhite : "rgba(255, 255, 255, 0.6)",
          white : "#FFFFFF",
          whereWhite : "#F8F8F8",
          whereGrey : "#C8C8C8",
          grey: "#5B5B5C",
          whereBlack: "#161617",
          hoverWhereBlack : "rgba(0,0,0,0.6)",
          black: "#000000",
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))'
        }
      },
      fontSize: {
        xs : "12",
        sm : "14",
        base : "16",
        lg : "18",
        '2xl' : "24",
        '4xl' : "32",
        '5xl' : "48",
      },
    },
  },
  plugins: [],
} satisfies Config;
