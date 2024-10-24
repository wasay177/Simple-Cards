import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        html: "url('/html.png')",
        css: "url('/css.png')",
        javascript: "url('/javascript 1.png')",
        typescript: "url('/typescript.png')",
        python: "url('/python 1.png')",
        C: "url('/c.png')",
        Cplus: "url('/c++.png')",
        Csharp: "url('/c1.png')",
      },
      fontFamily: {
        "Londrina": ["Londrina Sketch", "sans-serif"],
        "Permanent": ["Permanent Marker", "cursive"],
        "Shadow": ["Londrina Shadow", "sans-serif"],
        "Creepster": ["Creepster", "system-ui"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
