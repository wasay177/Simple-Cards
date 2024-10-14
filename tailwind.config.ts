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
        html: "url('/html.jfif')",
        css: "url('/css.jfif')",
        javascript: "url('/javascript 1.jfif')",
        typescript: "url('/typescript.png')",
        python: "url('/python 1.png')",
        C: "url('/c.jfif')",
        Cplus: "url('/c++.jfif')",
        Csharp: "url('/c1.jfif')",
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
