import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightyellow: "var(--light-yellow)",
        neongreen: "var(--neon-green)",
        deeporange: "var(--deep-orange)"
      },
    },
  },
  plugins: [],
};
export default config;

